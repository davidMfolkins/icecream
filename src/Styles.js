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
  image4lg: {
    position: 'relative',
    display: "block",
    flex: "1",
    marginTop: "32px",
    marginLeft: "80px"
  },
  image4sm: {
    display: "none"
  },
  image1lg: {
    position: 'relative',
    display: "block",
  },
  image1sm: {
    display: "none"
  },
  image2: {
    position: 'relative',
    marginLeft: "80px"
  },
  image3: {
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

export default useStyles