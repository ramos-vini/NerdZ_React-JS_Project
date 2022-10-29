import './faq.css';
import { Grid } from "@mui/material";
import SmsIcon from '@mui/icons-material/Sms';

let faqIcon = <SmsIcon sx={{color: '#FF731D'}}></SmsIcon>

let perguntasFrequentes = [
    {
        pergunta: 'Posso iniciar um curso sem conhecimento prévio?',
        resposta: 'Com certeza! Os cursos da NerdZ foram projetados para iniciar desde o nível mais básico até níveis avançados.'
    },
    {
        pergunta: 'Quando recebo acesso ao conteúdo?',
        resposta: 'Assim que o pagamento for confirmado, você receberá um e-mail de confirmação e o material será imediatamente disponibilizado na sua conta da NerdZ.'
    },
    {
        pergunta: 'Os cursos são atualizados?',
        resposta: 'Sim! Nossos instrutores estão sempre atualizando o conteúdo dos cursos para trazer as informações mais recentes e funcionais possíveis, e quem já adquiriu o curso não precisa pagar nada a mais para isso.'
    },
    {
        pergunta: 'Há garantia de obtenção de lucros?',
        resposta: 'Não. O objetivo da NerdZ é oferecer é de conteúdo de qualidade passado por instrutores altamente capacitados e que amam o que fazem. Os frutos desse conhecimento adquirido dependem exclusivamente do empenho do aluno.'
    },
    {
        pergunta: 'Qual o horário do suporte premium?',
        resposta: 'O suporte está disponível 24h por dia, todos os dias. Fique a vontade para entrar em contato com os nossos monitores.'
    },
    {
        pergunta: 'Posso acessar o curso de qualquer lugar?',
        resposta: 'Sim! Nossa plataforma está disponível para todos os dispositivos com acesso à internet: Notebooks, Desktops, Tablets, Celulares, etc.'
    },
    {
        pergunta: 'Tenho um tempo limite para assistir ao curso?',
        resposta: 'Não. Uma vez adquirido, o seu acesso ao conteúdo é vitalício. Assista no seu tempo, onde e quando quiser.'
    },
    {
        pergunta: 'Qual o formato do curso?',
        resposta: 'Os cursos da NerdZ baseiam-se em um modelo de ensino à distância com videoaulas gravadas, podendo o aluno revê-las quantas vezes desejar.'
    },
]

export default function Faq(params) {
    return (
        <div className='divFaq'>

            <h3>Perguntas Frequentes (FAQ)</h3>

            <Grid container spacing={8}>

                {
                    perguntasFrequentes.map((element, idx) => {
                        return (
                            <Grid item xs={12} sm={6}>
                                <h4>{faqIcon} {element.pergunta}</h4>
                                <h6 style={{fontWeight: '400'}}>{element.resposta}</h6>
                            </Grid>
                        )
                    })
                }

            </Grid>

        </div>
    );
}