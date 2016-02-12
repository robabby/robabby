import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: 'cd-nav-trigger',
  siteNavState: Ember.inject.service('site-nav-state'),
  click() {
    // if(this.get('siteNavState').getState()) {
    //   this.get('siteNavState').setState(false);
    // } else {
    //   this.get('siteNavState').setState(true);
    // }
    // console.log(this.get('siteNavState').getState());

    this.toggleProperty('siteNavState.isOpen');

    console.log(this.get('siteNavState.isOpen'));
  }
});
