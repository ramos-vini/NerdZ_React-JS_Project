import "./vantagens.css";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DevicesIcon from '@mui/icons-material/Devices';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Grid } from "@mui/material";

let arrayVantagens = [
    {
        icone: <VolunteerActivismIcon></VolunteerActivismIcon>,
        descricao: 'Aprenda com pessoas que amam aquilo que ensinam'
    },
    {
        icone: <DevicesIcon></DevicesIcon>,
        descricao: 'Assista quando e onde quiser'
    },
    {
        icone: <AllInclusiveIcon></AllInclusiveIcon>,
        descricao: 'Receba Acesso Vitalício'
    },
];

let cardsVantagens = arrayVantagens.map((vantagem, idx) => {
    return (
        <Grid item xs={12} sm={4} className='cardVantagem'>
            {vantagem.icone}
            <h4>{vantagem.descricao}</h4>
        </Grid>
    );
});

export default function Vantagens() {
    return (
        <Grid container spacing={8} className="gridVantagens">
            {cardsVantagens}
        </Grid>
    );
}