import { makeStyles } from '@material-ui/core/styles';
import GreenIceCream from "./components/GreenIceCream"
import PurpleIceCream from "./components/PurpleIceCream"
import Philosophy from "./components/Philosophy"
import HottestFlavours from "./components/HottestFlavours"
import FourCones from "./components/FourCones"
import ManyIceCream from "./components/ManyIceCream"

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexFlow: "row wrap",
    backgroundColor: "#ffebc7"
  },
  image4lg: {
    display: "block"
  },
  image4sm: {
    display: "none"
  },
  image1lg: {
    display: "block",
  },
  image1sm: {
    display: "none"
  },
  '@media screen and (max-width: 1200px)': {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    image4lg: {
      display: "none"
    },
    image4sm: {
      display: "block",
    },
    image1lg: {
      display: "none"
    },
    image1sm: {
      display: "block",
      marginBottom: "20px"
    },
    image: {
      marginBottom: "20px"
    }
  }
}));

function App() {
  const classes = useStyles();
  console.log(window.innerWidth)
  return (
    <div className={classes.container}>
      <div className={classes.image1lg}>
        <HottestFlavours />
      </div>
      <div className={classes.image1sm}>
        <ManyIceCream />
      </div>
      <div className={classes.image}>
        <GreenIceCream />
      </div>
      <div className={classes.image}>
        <PurpleIceCream />
      </div>
      <div className={classes.image4sm}>
        <FourCones />
      </div>
      <div className={classes.image4lg}>
        <Philosophy />
      </div>
    </div>
  );
}

export default App;
