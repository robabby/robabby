import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: 'cd-nav-trigger',
  siteNavState: Ember.inject.service('site-nav-state'),
  click() {
    var currentNavState = this.get('siteNavState');

    if(currentNavState.isOpen) {
      currentNavState.set('isOpen', false);
    } else {
      currentNavState.set('isOpen', true);
    }
  }
});
