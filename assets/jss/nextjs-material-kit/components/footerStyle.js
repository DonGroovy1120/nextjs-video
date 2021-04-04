import { container, primaryColor, roseColor } from "assets/jss/nextjs-material-kit.js";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    padding: "15px 0",
    float: "left!important",
    display: "block"
  },

  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },

  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    marginTop: "40px",
    backgroundColor:"#eee"
  },
  subFooter: {
    padding: "0.9375rem 0",
    backgroundColor:"#eee",
    width:"100%",
    fontFamily: "Roboto Slab, Times New Roman, serif",
    fontWeight: "700",
    marginTop:"20px"
  },
  h2font: {
    marginTop:"40px",
    fontSize:"34px",
    color: "#3c4858",
    fontFamily: "Roboto Slab, Times New Roman, serif",
    fontWeight: "700"

  },
  h3font: {
    color: "#3c4858",
    fontFamily: "Roboto Slab, Times New Roman, serif",
    fontSize: "26px",
    fontWeight: "700",
    backgroundColor: "transparent"
  },
  h4font: {
    color: "#3c4858",
    fontFamily: "Roboto Slab, Times New Roman, serif",
    fontSize: "18px",
    fontWeight: "700",
    marginTop:"20px"
  },
  h5font: {
    color: "#3c4858",
    fontFamily: "Roboto Slab, Times New Roman, serif",
    fontWeight: "700",
    fontSize:"13px" ,
    marginTop:"15px"
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  footBottom: {
    marginLeft:"300px",
    marginRight:"300px",
    fontSize:"30px"
  },
  footerButton:{
    marginLeft: "10px",
    marginRight: "10px"
  },
  footerLinkButton:{
    marginLeft: "10px",
    marginRight: "10px"
  }
};
export default footerStyle;
