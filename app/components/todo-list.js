import Ember from 'ember';

export default Ember.Component.extend({  
    incompletas: Ember.computed('todos.@each.completo', function() {
        let todos = this.get('todos');
        return todos.filterBy('completo', false).get('length');
    }),
    label: Ember.computed('incompletas', function() {
        var incompletas = this.get('incompletas');
        return (incompletas === 1) ? 'tarefa incompleta' : 'tarefas incompletas';
    })
});
