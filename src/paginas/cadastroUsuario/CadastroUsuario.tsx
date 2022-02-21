import React from 'react';
import {Link} from 'react-router-dom';
import './CadastroUsuario.css'
import { Grid, Typography, Box, TextField, Button } from '@material-ui/core'



function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form> 
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos3'> Cadastre-se </Typography>
                        <TextField id='nome' label='Nome' variant='outlined' name='Nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='Usuário' variant='outlined' name='Usuário' margin='normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='Senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;