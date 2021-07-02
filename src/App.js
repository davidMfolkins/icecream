import useStyles from "./Styles"
import GreenIceCream from "./components/GreenIceCream"
import PurpleIceCream from "./components/PurpleIceCream"
import Philosophy from "./components/Philosophy"
import HottestFlavours from "./components/HottestFlavours"
import FourCones from "./components/FourCones"
import ManyIceCream from "./components/ManyIceCream"

function App() {
  const classes = useStyles();
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
            <PurpleIceCream />
          </div>
          <div className={classes.image3}>
            <GreenIceCream />
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
