import Ember from 'ember';

export default Ember.Controller.extend({
  siteNavState: Ember.inject.service('site-nav-state'),
  navigationIsOpen: Ember.computed('siteNavState.isOpen', function() {
    console.log('changed');
    return this.get('siteNavState.isOpen') ? 'navigation-is-open' : '';
  }),
});
