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
    backgroundColor: "#2c632b",
    fontSize: "18px"
  },
  img: {
    border: "1px solid #636363"
  }
}));

function GreenIceCream() {
  const classes = useStyles();
  
  return (
    <div>
      <button className={classes.text}>Get it</button>
      <img src={greenicecream} className={classes.img} width="415px" alt="green-ice-cream" />
    </div>
  );
}

export default GreenIceCream;