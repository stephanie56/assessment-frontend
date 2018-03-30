import Ember from 'ember';

export default Ember.Controller.extend({
  isIndexRoute: Ember.computed.equal('currentRouteName', 'products.index'),
  isShowRoute: Ember.computed.equal('currentRouteName', 'products.show'),
  actions: {
    toggleMenu: (val) => console.log(`#{val} is toggled!`),
  }
});
