import purpleicecream from "../images/purpleicecream.png"
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
    backgroundColor: "purple",
    fontSize: "18px"
  },
  img: {
    border: "1px solid black"
  }
}));

function PurpleIceCream() {
  const classes = useStyles();

  return (
    <div>
      <span className={classes.text}>Get it</span>
      <img src={purpleicecream} className={classes.img} width="415px" alt="purple-ice-cream" />
    </div>
  );
}

export default PurpleIceCream;