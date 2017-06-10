import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: 'cd-nav-trigger',
  click() {
    this.sendAction('toggleNav');
  }
});
