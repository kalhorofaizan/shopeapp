import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';

import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header:{
        
  },
  title: {
    flexGrow: 1,
    marginLeft:theme.spacing(5)
  },
}));

export default function Header() {
    const classes = useStyles();
  
    return (
        <div>
            <div className={classes.root}>
      <AppBar position="static"  className={classes.header}  >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
             Shoes Shop
          </Typography>
          <Button color="inherit"><Link  style={{ textDecoration: 'none',color:"white" }} to={'/'} >Home</Link></Button>
          <Button color="inherit"><Link  style={{ textDecoration: 'none',color:"white" }} to={'/product'} >ProdectPage</Link></Button>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    </div>
        </div>
    )
}
