import './instrutor.css';
import { ReactComponent as InstrutorSVG } from '../../assets/img/instrutor.svg';
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Instrutor(params) {
    return (
        <Grid container spacing={8} className='instrutorGridContainer'>
            <Grid item xs={12} sm={6} className="instrutorGridItem1">
                <InstrutorSVG style={{width: '100%'}}/>
            </Grid>

            <Grid item xs={12} sm={6} className="instrutorGridItem2">
                <h2>Torne-se um Instrutor</h2>
                <h5>A NerdZ te dá todo o suporte necessário para você ensinar aquilo que ama &#9825;</h5>
                <p style={{marginTop: '4%'}}><Link to="/registro" className="instrutorLink">COMECE AGORA</Link></p>
            </Grid>
        </Grid>
    );
}