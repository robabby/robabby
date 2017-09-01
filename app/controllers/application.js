import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['menuIsOpen'],
  menuIsOpen: false,
  actions: {
    toggleNav() {
      this.toggleProperty('menuIsOpen');
    }
  }
});
