import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
	content: attr('string'),
  author: attr('string'),
  date: attr('date')
});
