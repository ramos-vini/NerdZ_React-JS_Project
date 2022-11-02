import './registro.css';
import { TextField, FormControl, Button, Stack } from '@mui/material';
import { theme, OrangeTextField } from '../../global/muiTheme';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Registro(params) {

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

    const [values2, setValues2] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange2 = (prop) => (event) => {
        setValues2({ ...values2, [prop]: event.target.value });
    };

    return (
        <>
            <Header />

            <Stack className='mainDiv'>
                <FormControl sx={{ padding: '5%' }} className='form'>
                    <VideoLibraryOutlinedIcon className='videoIcon' fontSize='large'></VideoLibraryOutlinedIcon>

                    <h1>Faça sua matrícula grátis</h1>

                    <TextField label="Nome Completo" variant="outlined" type="text" sx={OrangeTextField} />

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

                    <FormControl variant="outlined" sx={OrangeTextField}>
                        <InputLabel htmlFor="outlined-adornment-password-2">Confirme sua Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password-2"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values2.password}
                            onChange={handleChange2('password')}
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
                            label="Confirme sua Senha"
                        />
                    </FormControl>

                    <Button variant="contained" theme={theme} sx={{ color: 'white' }}>Cadastrar</Button>

                    <p>Ao clicar em cadastrar, você declara que leu e concorda com nossos <a href>termos de utilização</a>.</p>

                </FormControl>
            </Stack>

            <Footer />
        </>
    );
}