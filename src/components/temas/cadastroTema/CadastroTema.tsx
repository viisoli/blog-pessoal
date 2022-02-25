import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function CadastroTema() {
  
    let history = useHistory();
    //useHistory - responsável por fazer o redirecionamento de pagina
    
    const { id } = useParams<{id: string}>();
    //UseParams - capturar os parametros que sao enviados por uma url, ou seja, vai ajudar a capturar os ids para atualizar ou criar um novo tema
    
    const [token, setToken] = useLocalStorage('token');
    //useLocalStorage - vai capturar o token que esta armazenado dentro do local storage

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
    
        }
    }, [token])
    //useEffect token - para identificar se tem um token, se não tiver vai mandar um alerta e redirecionar para a pagina de login

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])
    //useEffect id - vai ficar monitorando o id, se tiver um id disponivel vai ativar a função findbyId, que vai pegar o tema cadastrado de acordo com o id

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }
    //findById - Vai pegar o tema cadastrado de acordo com o id

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }
    //updatedTema- vai fazer a atualização da model Tema que vai atualizar o StateTema. Vai capturar os valores digitados no formulario e atribui-los ao setTema que vai fazer a alteração no StateTema
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado com sucesso');
        } else {
            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso');
        }
        back()

    }
    //onSubmit - Vai atualizar o tema atraves do id, se houver um id ele vai atualizar com as informaçoes inseridas ativando o metodo put e vai mandar um alert, se o id for indefinido ele vai cadastrar um novo tema ativando o metodo post e mandar um alert.

    function back() {
        history.push('/temas')
    }
    //back - vai nos redirecionar para o componente temas

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;