import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        let todos = [
            {
                titulo: "Aprender Ember",
                completo: false,
            },
            {
                titulo: "Ser feliz",
                completo: false,
            }
        ];
        return todos;
    }
});
