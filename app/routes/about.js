import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').addClass('about');
  },
  deactivate: function() {
    Ember.$('body').removeClass('about');
  }
});
