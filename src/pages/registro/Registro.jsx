import './registro.css';
import { TextField, FormControl, Button, Stack } from '@mui/material';
import {theme, OrangeTextField} from '../../muiTheme';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

export default function Registro(params) {

    return (
        <>

            <Stack className='mainDiv'>

            <FormControl sx={{padding: '5%'}} className='form'>

            <SmartDisplayIcon className='smartDisplayIcon' fontSize='large'></SmartDisplayIcon>    

            <h1>Faça sua matrícula grátis</h1>

            <TextField className='input' label="Nome Completo" variant="outlined" type="text" sx={OrangeTextField}/>

            <TextField className='input' label="E-mail" variant="outlined" type="email" sx={OrangeTextField}/>

            <TextField className='input' id="outlined-basic1" label="Senha" variant="outlined" type="password" sx={OrangeTextField}/> 

            <TextField className='input' id="outlined-basic2" label="Confirme sua senha" variant="outlined" type="password" sx={OrangeTextField}/>

            <Button variant="contained" theme={theme} sx={{color: 'white'}}>Entrar</Button>

            <p>Ao clicar em cadastrar, você declara que leu e concorda com nossos <a href>termos de utilização.</a></p>

            </FormControl>

            </Stack>
            
        </>
    );
}