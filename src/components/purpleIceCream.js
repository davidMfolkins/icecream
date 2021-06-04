import purpleicecream from "../images/purpleicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    border: "1px solid black"
  }
}));

function PurpleIceCream() {
  const classes = useStyles();

  return (
    <div>
      {/* <span className={classes.text}>Get it</span> */}
      <img src={purpleicecream} className={classes.img} width="415px" alt="purple-ice-cream" />
    </div>
  );
}

export default PurpleIceCream;