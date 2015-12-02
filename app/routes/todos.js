import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        return Ember.RSVP.hash({
            todos: this.store.findAll('todo'),
            usuarios: this.store.findAll('usuario')
        });
    }, 
    setupController(controller, models){
        controller.set('todos', models.todos);
        controller.set('usuarios', models.usuarios);
    },
    actions: {
        createTodo(novoTitulo) {
            this.store.createRecord('todo', {
                titulo: novoTitulo,
                completo: false
            }).save();
        },
       updateTodo(todo) {
           todo.save();
       },
       deleteTodo(todo) {
           todo.destroyRecord();
       }
    }
});
