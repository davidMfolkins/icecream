import verticalicecream from "../images/verticalicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    border: "1px solid #636363"
  }
}));

function HottestFlavours() {
  const classes = useStyles();
  
  return (
    <div>
      <img src={verticalicecream} className={classes.img} alt="hottest flavours" />
    </div>
  );
}

export default HottestFlavours;