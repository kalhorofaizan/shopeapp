import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import CardI from './CardI'
import Header from './Header'
import Container from '@material-ui/core/Container'
import Seprater from './Seprater'
import Footer from './Footer'
export default class ProdectPage extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Container>
                <Seprater  name={"Prodects"} ns={1} rs={6}  />

                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6} md={6} lg={4}    >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}    >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}    >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}    >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}     >
                        <CardI />
                    </Grid>
                </Grid>
                <Footer/>
                </Container>
            </div>
        )
    }
}
