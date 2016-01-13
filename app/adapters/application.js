import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'blog',
	host: 'http://localhost:4500'
});
