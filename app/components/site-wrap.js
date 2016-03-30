import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  classNameBindings: ['isOpen:navigation-is-open'],
  classNames: ['site-wrap'],
  actions: {
    toggleNav() {
      this.toggleProperty('isOpen');
    }
  }
});
