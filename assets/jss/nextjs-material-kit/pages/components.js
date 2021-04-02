import { container } from "assets/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  title: {
    fontSize: "9.2rem",
    fontWeight: "600",
    letterSpacing:"5px",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    margin: "0px 0 0",
    fontSize: "rem",
    maxWidth: "100%",
    fontWeight: "400",
    letterSpacing: "4px",
    marginTop: "30px",
    fontFamily: "Roboto Slab, Times New Roman, serif",
  },
  main: {
    background: "#eee",
    position: "relative",
    zIndex: "3"
  },
  gridContainer: {
    background: "#eee",
    position: "relative",
    zIndex: "3",
    alignSelf:"center"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  alignSelfCenter: {
    alignSelf: "center"
  },
  buttonFont: {
    fontSize: "1.456rem"
  },
  gridTheme: {
    backgroundColor:"#343434",
    background:"radial-gradient(ellipse at center,#585858 0,#232323 100%)",
    width:"-webkit-fill-available"
  },
  imgCardTop:{
    borderRadius: "10px",
    background:"transparent"
  },
  cateTitle:{
    color:"0xFFFFFF",
    textWeight:"400"
  }

};

export default componentsStyle;
