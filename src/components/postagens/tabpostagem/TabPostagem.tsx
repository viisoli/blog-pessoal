import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box, Grid } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='barra'>
          <Tabs centered indicatorColor="secondary" onChange={handleChange} >
            <Tab className='texto' label="Todas as postagens" value="1"/>
            <Tab className='texto' label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={6}> <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='sobre'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ut eveniet natus totam et, voluptate dicta tempore alias, odio nobis non eius cupiditate minima inventore pariatur! Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit consequuntur suscipit fugiat, nam quis quod quaerat veritatis et, vel ratione beatae, facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci, officia aut quidem dolorum deserunt iure dolorem doloribus velit nobis quas consequatur at ullam odit, nesciunt est nulla nihil excepturi!</Typography></Grid>
            <Grid alignItems="center" item xs={6}> <img src="https://i.imgur.com/OhuIOWe.jpg" alt="" /> </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;