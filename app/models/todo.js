import DS from 'ember-data';

export default DS.Model.extend({
    titulo: DS.attr('string'),
    completo: DS.attr('boolean'),
    usuario: DS.belongsTo('usuario')
});
