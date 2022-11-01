import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Cursos from '../../global/cursos';
import './courseCard.css';

export default function CourseCard(props) {
  return (
    <Grid item xs={12} sm={6} md={4}>

      <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className='courseCard'>
        <div>
          <Link to={`/produto/${((Cursos[props.idx]).nome).replace(/ /g, "-").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>
            <CardMedia
              component="img"
              height="140"
              image={props.img}
              alt="course img"
              className='courseCardMedia'
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.descricao}
            </Typography>
            <Rating name="read-only" value={5} readOnly sx={{ marginTop: '4%' }} />
          </CardContent>
        </div>

        <div>

          <CardActions>
            <Link to={`/produto/${((Cursos[props.idx]).nome).replace(/ /g, "-").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>
              <Button size="small" sx={{ color: '#FF731D' }}>Conheça o Curso</Button>
            </Link>
          </CardActions>
        </div>
      </Card>

    </Grid>
  );
}
