import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FixedCart from "../../components/fixedCart/FixedCart";
// import { Grid } from "@mui/material";
import MainBanner from "../../components/mainBanner/MainBanner";
import MaisVendidos from "../../components/maisVendidos/MaisVendidos";

import './catalogo.css';

export default function Catalogo(params) {
    return (
        <>
            <Header></Header>

            <MainBanner></MainBanner>

            <MaisVendidos></MaisVendidos>

            {/* <Grid container spacing={2}>
                <Grid item xs={8} sm={6}>
                    <h1>teste</h1>
                </Grid>
                <Grid item xs={4} sm={6}>
                    <h1>teste</h1>
                </Grid>
                <Grid item xs={4}>
                    <h1>teste</h1>
                </Grid>
                <Grid item xs={8}>
                    <h1>teste</h1>
                </Grid>
            </Grid> */}

            <FixedCart></FixedCart>

            <Footer></Footer>
        </>
    );
}