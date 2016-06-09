import DS from 'ember-data';

export default DS.Model.extend({

  text: DS.belongsTo('blog', { async: true }),
});
