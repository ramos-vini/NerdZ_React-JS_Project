import './login.css';
import { TextField, FormControl, Button, Stack } from '@mui/material';
import {theme, OrangeTextField} from '../../muiTheme';
import LoginIcon from '@mui/icons-material/Login';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Login(params) {

    return (
        <>
            <Header></Header>

            <Stack className='mainDiv'>

            <FormControl sx={{padding: '5%'}} className='form'>

            <LoginIcon className='loginIcon' fontSize='large'></LoginIcon>    

            <h1>Faça seu Login</h1>

            <TextField className='input' label="E-mail" variant="outlined" type="email" sx={OrangeTextField}/>

            <TextField className='input' id="outlined-basic1" label="Senha" variant="outlined" type="password" sx={OrangeTextField}/> 

            <Button variant="contained" theme={theme} sx={{color: 'white'}}>Entrar</Button>

            <p><a href>Esqueci minha senha</a></p>

            </FormControl>

            </Stack>
            
            <Footer></Footer>
        </>
    );
}