import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('blog', function() {
    this.route('post', {path: '/:post_id'});
  });
  this.route('about');
});

export default Router;
