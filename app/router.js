import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', {path: '/'}, function() {
    this.route('completo');
    this.route('incompleto');
  });
  this.route('usuarios');
});

export default Router;
