import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffebc7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "15%",
    marginRight: "15%"
  },
  col2: {
    position: 'relative',
    display: "flex",
    flexDirection: "column",
    flex: "5"
  },
  twoicecreams: {
    position: 'relative',
    display: "flex",
    flexDirection: "row",
  },
  philosophy: {
    position: 'relative',
    display: "block",
    flex: "1",
    marginTop: "32px",
    marginLeft: "80px"
  },
  fourCones: {
    display: "none"
  },
  hottestFlavoursLG: {
    position: 'relative',
    display: "block",
  },
  hottestFlavoursSM: {
    display: "none"
  },
  purpleIceCream: {
    position: 'relative',
    marginLeft: "80px"
  },
  greenIceCream: {
    position: 'relative',
    marginLeft: "30px"
  },
  '@media screen and (max-width: 1200px)': {
    container: {
      display: "flex",
      flexDirection: "column",
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
    philosophy: {
      display: "none"
    },
    fourCones: {
      display: "block",
    },
    hottestFlavoursLG: {
      display: "none"
    },
    hottestFlavoursSM: {
      display: "block",
      marginBottom: "20px"
    },
    purpleIceCream: {
      marginBottom: "20px",
      marginLeft: "0px"
    },
    greenIceCream: {
      marginBottom: "20px",
      marginLeft: "0px"
    }
  }
}));

export default useStyles