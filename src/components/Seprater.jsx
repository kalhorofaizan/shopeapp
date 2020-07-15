import React from 'react'
import Divider from '@material-ui/core/Divider'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
const styles = makeStyles((theme) => ({
    divider:{
        height: 1,
        marginTop:16
    },
    gird:{
        marginTop:10,
        marginBottom:10
    },
    text:{
        marginBottom:6,
        alignSelf:"center",
        color:"White"
    },
    divider2:{
        height: 1,
        marginTop:10
    },
}))


export default function Seprater(props) {

    const classes= styles();

    return (
        <Grid     container  spacing={2}  >
            <Grid  item xs={5} >
                    <Divider  className={classes.divider}  variant={"full"}  />
                    <Divider  className={classes.divider2}  variant={"full"}  />
            </Grid>
            <Grid  item xs={props.ns} >
                    <Typography variant={'h4'} className={classes.text}  >{props.name}</Typography>
            </Grid>
            <Grid  item xs={props.rs} >
                    <Divider  className={classes.divider}  variant={"full"}  />
                    <Divider  className={classes.divider2}  variant={"full"}  />
            </Grid>
        </Grid>
    )
}
