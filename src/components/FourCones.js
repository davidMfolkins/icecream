import fourcones from "../images/FourCones.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    border: "1px solid black"
  }
}));

function FourCones() {
  const classes = useStyles();
  
  return (
    <div>
      <img src={fourcones} className={classes.img} width="415px" alt="cones" />
    </div>
  );
}

export default FourCones;