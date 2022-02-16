import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <AppBar position="static" className='back'>
                <Toolbar variant="dense" className='bar'>
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit" className='title'>
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start" >
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;