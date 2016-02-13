import Ember from 'ember';

export default Ember.Controller.extend({
  isOpen: false,
  actions: {
    toggleNav(){
      this.toggleProperty('isOpen');
    }
  }
});
