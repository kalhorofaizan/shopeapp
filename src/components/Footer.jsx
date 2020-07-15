import React from 'react'
import Seprater from './Seprater'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
    center:{alignItems:"center",justifyContent:"center"}
}))

export default function Footer() {

const classes=styles();
    return (
        <div>
            <Seprater  name={"Footer"} ns={1} rs={6} />
            <Grid  container  spacing={9} style={{color:"white"}} >
                <Grid  item xs={4}  ></Grid>
                <Grid  item xs={4}    >
                    <Typography  style={{marginLeft:60}} variant="h5" >
                        Shoes Shoes
                    </Typography>
                    <Typography>
                        sadkl;sakdlsakdl;sakd;lkas;ldk;lsak
                    </Typography>

                </Grid>
                <Grid  item xs={4}  ></Grid>
            </Grid>
        </div>
    )
}
