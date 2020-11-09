import Route from 'consul-ui/routing/route';
import { get } from '@ember/object';

export default class AddressesRoute extends Route {
  model() {
    const parent = this.routeName
      .split('.')
      .slice(0, -1)
      .join('.');
    return this.modelFor(parent);
  }

  afterModel(model, transition) {
    if (get(model, 'item.Service.Kind') !== 'mesh-gateway') {
      const parent = this.routeName
        .split('.')
        .slice(0, -1)
        .join('.');
      this.replaceWith(parent);
    }
  }

  setupController(controller, model) {
    super.setupController(...arguments);
    controller.setProperties(model);
  }
}
