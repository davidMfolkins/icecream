import { makeStyles } from '@material-ui/core/styles';
import GreenIceCream from "./components/GreenIceCream"
import PurpleIceCream from "./components/PurpleIceCream"
import Philosophy from "./components/Philosophy"
import HottestFlavours from "./components/HottestFlavours"

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
 
  return (
    <div className={classes.container}>
      <GreenIceCream />
      <PurpleIceCream />
      <Philosophy />
      <HottestFlavours />
    </div>
  );
}

export default App;
