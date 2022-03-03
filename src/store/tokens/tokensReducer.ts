import {Action } from './actions';

export interface TokenState {
    tokens: string
}
//model Token State com uma propriedade chamada token

const initialState = {
    tokens: ""
}
//constante definindo para o state um valor inicial vazio

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload}
        }

        default:
            return state
    }
}
//tokenReducer - precisa receber dois parametros, 1- state: estado e 2- action: ação que vai modificar o state.
//1 parâmetro -> state:TokenState : tipo da model, ou seja, tokens do tipo string. "= initialState": atribuindo um valor inicial ao tokenstate
//2 parâmetro -> action:Action : uso da action creada no arquivo actions.ts

//corpo da função -> switch: faz uma verificação, vai olhar o tipo da action e vai verificar se a action é do tipo ADD_Token
//se for ADD_Token: o retorno será fazer a propriedade tokens receber o payload que contem dentro de actions, ou seja, o token
// se não for ADD_token: vai retornar o estado original, que é vazio.