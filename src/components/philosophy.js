import horizontalicecream from "../images/horizontalicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    border: "1px solid #636363"
  }
}));

function Philosophy() {
  const classes = useStyles();

  return (
    <div>
      <img src={horizontalicecream} className={classes.img} width="862px" alt="philosophy" />
    </div>
  );
}

export default Philosophy;