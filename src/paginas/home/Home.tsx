import React, { useEffect } from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core'
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token === "") {
          alert("Você precisa estar logado")
          history.push("/login")
  
      }
  }, [token])

  return (
    <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
            <Grid alignItems="center" item xs={6}>
                <Box paddingX={20} className='h1'>
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                        <ModalPostagem />
                    </Box>
                    <Button variant="outlined" className='botao'>Ver Postagens</Button>
                </Box>
            </Grid>
            <Grid item xs={6} >
                <img src="https://i.pinimg.com/originals/84/da/da/84dada0a5dcfd790700df3dd87897aef.gif" alt="" width="500px" height="500px" />
            </Grid>
            <Grid xs={12} className='postagens'>
                <TabPostagem />
            </Grid>
        </Grid>
    </>
);
}

export default Home;