import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: '_id',
  serializeId: function(id) {
      return id.toString();
  }
});
