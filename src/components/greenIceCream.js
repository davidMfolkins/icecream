import greenicecream from "../images/greenicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    color: "white",
    zIndex: "100",
    position: "absolute",
    left: "40%",
    top: "75%",
    border: "3px solid white",
    padding: "10px 20px",
    borderRadius: "30px",
    backgroundColor: "green",
    fontSize: "18px"
  },
  img: {
    border: "1px solid black"
  }
}));

function GreenIceCream() {
  const classes = useStyles();
  
  return (
    <div>
      <span className={classes.text}>Get it</span>
      <img src={greenicecream} className={classes.img} width="415px" alt="green-ice-cream" />
    </div>
  );
}

export default GreenIceCream;