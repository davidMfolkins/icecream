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
    flexDirection: "row",
    backgroundColor: "#ffebc7",
    alignItems: "center",
    justifyContent: "center",
    margin: "60px 15%"
  },
  col2: {
    display: "flex",
    flexDirection: "column",
    flex: "5"
  },
  twoicecreams: {
    display: "flex",
    flexDirection: "row",
  },
  image4lg: {
    display: "block",
    flex: "1",
    marginTop: "34px",
    marginLeft: "80px"
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
  image2: {
    marginLeft: "80px"
  },
  image3: {
    marginLeft: "30px"
  },
  '@media screen and (max-width: 1200px)': {
    container: {
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      // justifyContent: "center",
      margin: "0px"
    },
    col2: {
      display: "flex",
      flexDirection: "column",
    },
    twoicecreams: {
      display: "flex",
      flexDirection: "column",
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
    image2: {
      marginBottom: "20px",
      marginLeft: "0px"
    },
    image3: {
      marginBottom: "20px",
      marginLeft: "0px"
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
      <div className={classes.col2}>
        <div className={classes.twoicecreams}>
          <div className={classes.image2}>
            <GreenIceCream />
          </div>
          <div className={classes.image3}>
            <PurpleIceCream />
          </div>
        </div>
        <div className={classes.image4sm}>
          <FourCones />
        </div>
        <div className={classes.image4lg}>
          <Philosophy />
        </div>
      </div>
    </div>
  );
}

export default App;
