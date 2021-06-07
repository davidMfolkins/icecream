import manyicecream from "../images/manyicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    color: "white",
    zIndex: "100",
    position: "absolute",
    top: "20%",
    backdropFilter: "blur(2px)",
    textAlign: "center",
    marginLeft: "2px",
    width: "413px"
  },
  h1: {
    textShadow: "3px 3px 5px #000000"
  },
  img: {
    border: "1px solid #636363"
  },
}));

function ManyIceCream() {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.text}>
        <h1 className={classes.h1}>Top 10 Hottest Flavours</h1>
        <h1 className={classes.h1}>Summer 2021</h1>
      </div>
      <img src={manyicecream} className={classes.img} width="415px" alt="many-ice-cream" />
    </div>
  );
}

export default ManyIceCream;