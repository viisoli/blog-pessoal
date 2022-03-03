import {createStore} from 'redux';
import { tokenReducer } from './tokens/tokensReducer';

const store = createStore(tokenReducer);
// constante que vai chamar o metodo createStore (metodo importado do redux) e vai passar por parametro o tokenReducer, dessa forma conseguimos fazer o gerenciamento dos estados da  aplicação.

export default store;