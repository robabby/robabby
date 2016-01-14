import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var posts = this.store.findAll('post');
		return posts;
	}
});
