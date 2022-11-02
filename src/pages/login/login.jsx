import './login.css';
import { TextField, FormControl, Button, Stack } from '@mui/material';
import { theme, OrangeTextField } from '../../global/muiTheme';
import LoginIcon from '@mui/icons-material/Login';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login(params) {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Header></Header>

            <Stack className='mainDiv'>

                <FormControl sx={{ padding: '5%' }} className='form'>

                    <LoginIcon className='loginIcon' fontSize='large'></LoginIcon>

                    <h1>Faça seu Login</h1>

                    <TextField label="E-mail" variant="outlined" type="email" sx={OrangeTextField} />

                    <FormControl variant="outlined" sx={OrangeTextField}>
                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Senha"
                        />
                    </FormControl>

                    <Button variant="contained" theme={theme} sx={{ color: 'white' }}>Entrar</Button>

                    <p><a href>Esqueci minha senha</a></p>

                </FormControl>

            </Stack>

            <Footer></Footer>
        </>
    );
}