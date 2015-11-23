import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({  
    titulo(i) { return `Tarefa titulo ${i + 1}`; },
    completo: faker.list.random(true, false)
});
