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
    fontSize: "3.5626rem",
    maxWidth: "100%",
    fontWeight: "700",
    letterSpacing: "4px",
    marginTop: "30px",
    fontFamily: "Roboto Slab, Times New Roman, serif",
  },
  main: {
    background: "#eee",
    position: "relative",
    zIndex: "3"
  },
  gridItem: {
    background: "#eee",
    maxWidth:"300px",
    maxHeight:"450px",
    margin:"10px"

  },
  gridContainer: {
    background: "#eee",
    position: "relative",
    zIndex: "3",
    display:"flex",
    justifyContent: "center"
  },
  h3Font: {
    fontWeight:"700",
    color:"#3c4858",
    marginLeft:"10px"
  },
  pFont: {
    fontColor:"#999999"
  },
  mainRaised: {
    margin: "0px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    },
    display:"flex",
    justifyContent:"center",
    paddingBottom:"30px",
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
  cardBody: {
    marginLeft:"10px",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize:"14px"
  },
  mainHeight:{
    height:"25hv",
    maxHeight:"25hv",
  },
  imgCardTop:{
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
    background:"transparent"
  },
  imgCard :{
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
    maxWidth:"-webkit-fill-available"
  }
  ,
  cateTitle:{
    color:"0xFFFFFF",
    textWeight:"400"
  },
  textFont:{
    color:"#000",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },

  imgHeight: {
    height:"220px",
    width:"250px ",
  },
  cardFooter:{
    marginLeft:"10px",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize:"12px"
  }
};

export default componentsStyle;
