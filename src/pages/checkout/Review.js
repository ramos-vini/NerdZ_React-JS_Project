import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Cursos from '../../global/cursos';

const addresses = ['R. São José, 90 - Centro', 'Rio de Janeiro', 'RJ', '20010-020', 'Brasil'];
const payments = [
  { name: 'Bandeira', detail: 'Visa' },
  { name: 'Nome do Titular', detail: 'Vinícius Ramos' },
  { name: 'Número do Cartão', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Data de Vencimento', detail: '04/2026' },
];

export default function Review(props) {

  const products = [
    {
      name: `${Cursos[props.idx].nome}`,
      desc: 'Curso Online de Acesso Vitalício',
      price: `${((Cursos[props.idx].valor)*1.4).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`,
    },

    { name: 'Desconto', desc: '', price: `${((Cursos[props.idx].valor)*0.4).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}` },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalhes da Compra
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {`${((Cursos[props.idx].valor)*1.0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Endereço
          </Typography>
          <Typography gutterBottom>Vinícius Ramos</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalhes do Pagamento
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
