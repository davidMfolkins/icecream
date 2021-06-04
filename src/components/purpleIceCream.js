import purpleicecream from "../images/purpleicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

}));

function PurpleIceCream() {
  const classes = useStyles();
  
  return (
    <div>
      <span>Get it</span>
      <img src={purpleicecream} />
    </div>
  );
}

export default PurpleIceCream;