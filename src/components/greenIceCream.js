import greenicecream from "../images/greenicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    border: "1px solid black"
  }
}));

function GreenIceCream() {
  const classes = useStyles();
  
  return (
    <div>
      <img src={greenicecream} className={classes.img} width="415px" alt="green-ice-cream" />
    </div>
  );
}

export default GreenIceCream;