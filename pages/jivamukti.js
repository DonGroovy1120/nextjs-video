import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import imgStyles from "assets/jss/nextjs-material-kit/pages/components.js";
import NavPills from "components/NavPills/NavPills.js";

import profile from "assets/img/faces/christian.jpg";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import { cardTitle, cardLink, cardSubtitle } from "assets/jss/nextjs-material-kit.js";

const useStyles = makeStyles(imgStyles);

const styles = {
  ...useStyles,
  cardTitle,
  cardLink,
  cardSubtitle
};

export default function Components(props) {
  const classes = useStyles();

  const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="JIVAMUKTI YOGA"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h3 className={classes.subtitle}>The Jivamukti Series.</h3>
                <h1 className={classes.title}>
                  Signature
                </h1>
              </div>
            </GridItem>
            </GridContainer>
        </div>
       </Parallax>

      <div className={classNames(classes.main, classes.mainHeight)}>
        <GridContainer className={classNames(classes.container)}>
          <GridItem xs={4} sm={6} md={6} lg={5}
             className={classNames(classes.alignSelfCenter)}
          >
            <h3 className={classes.h3Font}>
              PRACTICE WITH THE MASTERS
            </h3>
            <h4 className={classes.pFont}>
                STASANG WITH THE FOUNDERS, AS WELL AS CLASSIC, TRIBLE adafaf, AND RETREAT MASTER CLASSES!
            </h4>
          </GridItem>
          <GridItem xs={8} sm={6} md={6} lg={7}>
            <Card>
              <img className={classes.imgCard} src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80" alt="Card-img" />
              <div className={classes.imgCardOverlay}>
                <h4 className={classes.h3Font}>GENTLE + EASY</h4>
                <p  className={classes.cardBody}>LESSON 1</p>
                <p  className={classes.cardFooter}>15-35MINUTES</p>
              </div>
            </Card>
          </GridItem>
        </GridContainer >
        <div className={classNames(classes.mainRaised)}>
          <GridContainer className={classNames(classes.gridContainer)}>
            <GridItem xs={3} sm={3} md={3} lg={3}  className={classes.gridItem}>
              <Card style={{width: "auto"}}>
                <img
                  style={{height: "180px", width: "100%", display: "block"}}
                  className={classes.imgCardTop}
                  src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                  alt="Card-img-cap"
                />
                <CardBody>
                  <h4 className={classes.h3Font}>GENTLE + EASY</h4>
                  <p className={classes.cardBody}> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                  <p  className={classes.cardBody}>LESSON 1</p>
                  <Button color="primary">START </Button>
                </CardBody>
              </Card>
            </GridItem>
             <GridItem xs={3} sm={3} md={3} lg={3}  className={classes.gridItem}>
                <Card style={{width: "auto"}}>
                  <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.h3Font}>GENTLE + EASY1</h4>
                    <p className={classes.cardBody}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu f </p>
                    <p className={classes.cardBody}>LESSON 1 </p>

                    <Button color="primary">START </Button>
                  </CardBody>
                </Card>
              </GridItem>
             <GridItem xs={3} sm={3} md={3} lg={3}  className={classes.gridItem}>
                <Card style={{width: "auto"}}>
                  <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.h3Font}>GENTLE + EASY2</h4>
                    <p className={classes.cardBody}>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa </p>
                    <p className={classes.cardBody}>LESSON 1 </p>
                    <Button color="primary">START </Button>
                  </CardBody>
                </Card>
              </GridItem>
            <GridItem xs={3} sm={3} md={3} lg={3}  className={classes.gridItem}>
               <Card style={{width: "auto"}}>
                 <img
                   style={{height: "180px", width: "100%", display: "block"}}
                   className={classes.imgCardTop}
                   src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                   alt="Card-img-cap"
                 />
                 <CardBody>
                   <h4 className={classes.h3Font}>GENTLE + EASY3</h4>
                   <p className={classes.cardBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                   <p className={classes.cardBody}>LESSON 1 </p>
                   <Button color="primary">START </Button>
                 </CardBody>
               </Card>
             </GridItem>
            <GridItem xs={3} sm={3} md={3} lg={3}  className={classes.gridItem}>
              <Card style={{width: "auto"}}>
                <img
                  style={{height: "180px", width: "100%", display: "block"}}
                  className={classes.imgCardTop}
                  src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                  alt="Card-img-cap"
                />
                <CardBody>
                  <h4 className={classes.h3Font}>GENTLE + EASY4</h4>
                  <p className={classes.cardBody}> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons</p>
                  <p className={classes.cardBody}>LESSON 1 </p>
                  <Button color="primary">START </Button>
                </CardBody>
              </Card>
            </GridItem>
             <GridItem xs={3} sm={3} md={3} lg={3}  className={classes.gridItem}>
                <Card style={{width: "auto"}}>
                  <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.h3Font}>GENTLE + EASY5</h4>
                    <p className={classes.cardBody}>ore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt </p>
                    <p className={classes.cardBody}>LESSON 1 </p>
                    <Button color="primary">START </Button>
                  </CardBody>
                </Card>
              </GridItem>
             <GridItem xs={3} sm={3} md={3} lg={3}  className={classes.gridItem}>
                <Card style={{width: "auto"}}>
                  <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.h3Font}>GENTLE + EASY6</h4>
                    <p className={classes.cardBody}>um dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi </p>
                    <p className={classes.cardBody}>LESSON 1 </p>
                    <Button color="primary">START </Button>
                  </CardBody>
                </Card>
              </GridItem>
            <GridItem xs={3} sm={3} md={3} lg={3}  className={classes.gridItem}>
               <Card style={{width: "auto"}}>
                 <img
                   style={{height: "180px", width: "100%", display: "block"}}
                   className={classes.imgCardTop}
                   src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                   alt="Card-img-cap"
                 />
                 <CardBody>
                   <h4 className={classes.h3Font}>GENTLE + EASY7</h4>
                   <p className={classes.cardBody}> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
                   <p className={classes.cardBody}>LESSON 1 </p>
                   <Button color="primary">START </Button>
                 </CardBody>
               </Card>
             </GridItem>
            </GridContainer>
          </div>
      </div>
      <Footer />
    </div>
  );
}
