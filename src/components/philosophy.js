import horizontalicecream from "../images/horizontalicecream.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    color: "white",
    zIndex: "100",
    position: "absolute",
    left: "15%",
    top: "15%",
    padding: "40px",
    backgroundColor: "#3b3b3b",
    width: "550px",
    height: "230px"
  },
  h1: {
    margin: "unset",
    marginBottom: "20px"
  },
  article: {
    fontSize: "14px"
  },
  img: {
    border: "1px solid #636363"
  }
}));

function Philosophy() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.text}>
        <h1 className={classes.h1}>Our Ice Cream Philosophy</h1>
        <article className={classes.article}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          <br></br>
          <br></br>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          It has survived not only five centuries, but also the leap into electronic typesetting.
        </article>
      </div>
      <img src={horizontalicecream} className={classes.img} width="862px" alt="philosophy" />
    </div>
  );
}

export default Philosophy;