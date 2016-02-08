import Ember from 'ember';

export default Ember.Service.extend({
  isOpen: null,

  init() {
    this.set('isOpen', false);
  },

  toggleState(state) {
    var newState = state ? false : true;
    this.set('isOpen', newState);
  }
});
