import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import image from "../shoes.png"

const createstyle= makeStyles((theme)=>({
    grid:{
        color:"white",
        marginTop:50,
    },
    textstyle:{
        marginLeft:30,
        marginTop:30,
        fontFamily:"Merienda One"
    }
}))
export default function MainShow() {
    const classes = createstyle();
    return (
        <Grid  container  className={classes.grid}   >
        <Grid item xs={2} ></Grid>
        <Grid  item xs={4} >
            <Typography    className={classes.textstyle}  variant={"h1"}  >Running Shows</Typography>
        </Grid>
        <Grid  item xs={4} >
                <img src={image} alt="sad" style={{
                    height:300,
                    marginTop:20
                }} />
        </Grid>
    </Grid>
    )
}
