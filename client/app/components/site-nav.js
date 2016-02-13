import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isOpen:navigation-is-open'],
  handleIsOpen: Ember.computed('params.[]', function(){
    return this.get('params')[0];
  }),
  actions: {
    toggleNav() {
      this.sendAction('toggleNav');
    }
  }
});
