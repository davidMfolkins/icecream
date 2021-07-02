import verticalicecream from "../images/verticalicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    color: "white",
    zIndex: "100",
    position: "absolute",
    top: "32%",
    height: "300px",
    backdropFilter: "blur(2px)",
    textAlign: "center",
    width: "99%",
    marginLeft: "1px"
  },
  bottom: {
    marginTop: "100px",
    textShadow: "3px 3px 5px #000000"
  },
  h1: {
    textShadow: "3px 3px 5px #000000"
  },
  img: {
    border: "1px solid #636363"
  }
}));

function HottestFlavoursLG() {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.text}>
        <h1 className={classes.h1}>Top 10</h1>
        <h1 className={classes.h1} >Hottest Flavours</h1>
        <h1 className={classes.bottom}>Summer 2021</h1>
      </div>
      <img src={verticalicecream} className={classes.img} alt="hottest flavours" />
    </div>
  );
}

export default HottestFlavoursLG;
