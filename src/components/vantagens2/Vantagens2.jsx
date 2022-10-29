import "./vantagens2.css";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Grid } from "@mui/material";

let arrayVantagens = [
    {
        icone: <AllInclusiveIcon></AllInclusiveIcon>,
        titulo: 'Acesso Vitalício',
        descricao: 'Uma vez adquirido, o curso nunca irá expirar. Fique à vontade para conduzir o aprendizado no seu próprio tempo.'
    },
    {
        icone: <QuestionAnswerIcon></QuestionAnswerIcon>,
        titulo: 'Suporte Premium',
        descricao: 'Através do nosso sistema de Chat Online, você pode tirar suas dúvidas quando quiser com o seu monitor.'
    },
    {
        icone: <WorkspacePremiumIcon></WorkspacePremiumIcon>,
        titulo: 'Certificado Profissional',
        descricao: 'Tenha a sua conquista reconhecida com um certificado oficial da NerdZ após o término do seu curso.'
    },
    {
        icone: <VerifiedUserIcon></VerifiedUserIcon>,
        titulo: 'Garantia de 7 dias',
        descricao: 'Confiamos plenamente na qualidade de todos os nossos produtos. Se em 7 dias você não gostar do curso, devolvemos 100% do seu dinheiro.'
    }
];

let cardsVantagens = arrayVantagens.map((vantagem, idx) => {
    return (
        <Grid item xs={12} sm={3} className='cardVantagem cardVantagem2'>
            {vantagem.icone}
            <h4>{vantagem.titulo}</h4>
            <h6>{vantagem.descricao}</h6>
        </Grid>
    );
});

export default function Vantagens2() {
    return (
        <Grid container spacing={8} className="gridVantagens gridVantagens2">
            {cardsVantagens}
        </Grid>
    );
}