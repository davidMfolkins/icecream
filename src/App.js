import useStyles from "./Styles"
import GreenIceCream from "./components/GreenIceCream"
import PurpleIceCream from "./components/PurpleIceCream"
import Philosophy from "./components/Philosophy"
import HottestFlavoursLG from "./components/HottestFlavoursLG"
import FourCones from "./components/FourCones"
import HottestFlavoursSM from "./components/HottestFlavoursSM"

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.hottestFlavoursLG}>
        <HottestFlavoursLG />
      </div>
      <div className={classes.hottestFlavoursSM}>
        <HottestFlavoursSM />
      </div>
      <div className={classes.col2}>
        <div className={classes.twoicecreams}>
          <div className={classes.purpleIceCream}>
            <PurpleIceCream />
          </div>
          <div className={classes.greenIceCream}>
            <GreenIceCream />
          </div>
        </div>
        <div className={classes.fourCones}>
          <FourCones />
        </div>
        <div className={classes.philosophy}>
          <Philosophy />
        </div>
      </div>
    </div>
  );
}

export default App;
