import manyicecream from "../images/manyicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    border: "1px solid #636363"
  }
}));

function ManyIceCream() {
  const classes = useStyles();
  
  return (
    <div>
      <img src={manyicecream} className={classes.img} width="415px" alt="many-ice-cream" />
    </div>
  );
}

export default ManyIceCream;