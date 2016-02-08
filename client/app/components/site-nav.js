import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  siteNavState: Ember.inject.service('site-nav-state')
});
