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
    backgroundColor: "#8130d1",
    fontSize: "18px"
  },
  img: {
    border: "1px solid #636363"
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