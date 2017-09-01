import Ember from 'ember';

export default Ember.Component.extend({
  menuIsOpen: false,
  classNameBindings: ['menuIsOpen:navigation-is-open'],
  classNames: ['site-wrap'],
  actions: {
    toggleNav() {
      this.toggleProperty('menuIsOpen');
    }
  }
});
