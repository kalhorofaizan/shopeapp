import React ,{useState}from 'react'
import shoes1 from '../shoes1.png'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    grid:{
      marginTop:20
    },
    button:{
      backgroundColor:'#0C0032'
    }
  });

export default function CardI() {

      const  [shadow,setshadow]=useState(1)
      const [show, setShow]=useState(false);
     const onMouseOver = () => {
      setshadow(10)
      setShow(true)
     };

    const  onMouseOut = () => {
      setshadow(1)
      setShow(false)
    };

    const classes = useStyles();
    return (
        <Card  elevation={shadow} onMouseOver={(e)=>onMouseOver()} onMouseOut={(e)=>onMouseOut()}className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="160"
            image={shoes1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Shoes
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cumque beatae dolorem voluptatibus, laborum dolore maxime doloribus porro saepe praesentium nisi. Consequuntur suscipit vel libero voluptatem dolor cupiditate provident maiores?
          </Typography>
          </CardContent>

        </CardActionArea>
        <Collapse  in={show} >
        <CardActions  className={classes.button} >
        <Button fullWidth    >BUY</Button>
        </CardActions>
        </Collapse>
      </Card>
    )
}
