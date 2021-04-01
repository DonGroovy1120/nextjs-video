import { container } from "assets/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  title: {
    fontSize: "3.2rem",
    fontWeight: "600",
    letterSpacing:"2px",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    margin: "0px 0 0",
    fontSize: "8rem",
    maxWidth: "100%",
    fontWeight: "800",
    letterSpacing: "4px"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
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
  }
};

export default componentsStyle;
