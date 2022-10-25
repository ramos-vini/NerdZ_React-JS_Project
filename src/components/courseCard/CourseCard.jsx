import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import './courseCard.css';

export default function CourseCard(props) {
  return (
    <Card sx={{ maxWidth: 345}} className='courseCard'>
      <CardMedia
        component="img"
        height="140"
        image= {props.img}
        alt="course img"
        className='courseCardMedia'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.descricao}
        </Typography>
        <Rating name="read-only" value={5} readOnly sx={{marginTop: '4%'}}/>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color: '#FF731D'}}>Conheça o Curso</Button>
      </CardActions>
    </Card>
  );
}
