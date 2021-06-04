import purpleicecream from "../images/purpleicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    color: "red",
    position: "fixed",
    top: "50%",
    left: "30%"
  },
}));

function PurpleIceCream() {
  const classes = useStyles();

  return (
    <div>
      {/* <span className={classes.text}>Get it</span> */}
      <img src={purpleicecream} width="415px" alt="purple-ice-cream" />
    </div>
  );
}

export default PurpleIceCream;