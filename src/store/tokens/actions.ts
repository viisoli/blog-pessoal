export type Action = {type: "ADD_TOKEN"; payload: string};
//1° propriedade: tipo da action, 2° propriedade: informação que a action esta levando, nesse caso um token.

export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});
//função constante que tem como parametro um token, do tipo action, que contem as duas propriedades
//ADD_TOKEN será o metodo enviado pela função Dispacher
