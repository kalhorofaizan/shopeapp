import React from 'react';

import Grid from '@material-ui/core/Grid';
import CardI from './CardI'
const ItemSection = () => {

  return (
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
    </Grid>

  );
};

export default ItemSection;