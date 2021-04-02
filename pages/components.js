import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Timeline from "@material-ui/icons/Timeline";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
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

import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import gridstyles from "assets/jss/nextjs-material-kit/pages/components.js";

import cardBlog5 from "assets/img/profile-bg.jpg";
import Subject from "@material-ui/icons/Subject";
import Icon from "@material-ui/core/Icon";
import Delete from "@material-ui/core/Icon";
import CardFooter from "../components/Card/CardFooter";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
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
          color: "success"
        }}
        {...rest}
      />
      <Clearfix/>
      <Parallax image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h2 className={classes.subtitle}>The Jivamukti Series.</h2>
                  <h1 className={classes.title}>
                    Signature
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classNames(classes.alignSelfCenter)} >
          <GridContainer
              className={classNames(classes.container)}
          >
            <GridItem xs={4} sm={6} md={6} lg={6}
               className={classNames(classes.alignSelfCenter)}
            >
                <h3 className={classes.subtitle}>
                    PRACTICE WITH THE MASTERS
                </h3>
                <h4>
                    STASANG WITH THE FOUNDERS, AS WELL AS CLASSIC, TRIBLE adafaf, AND RETREAT MASTER CLASSES!
                </h4>
            </GridItem>
            <GridItem xs={8} sm={6} md={6} lg={6}>
              <Card>
                  <img style={{ height: "180px", width: "100%", display: "block" }}
                       className={classes.imgCardTop}
                       src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                       alt="Card-img-cap"
                  />
                  <Button className={classes.buttonFont}
                      color="rose"
                  >
                      START PRACTICE
                  </Button>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
          <div className={classNames(classes.container)}>
              <GridContainer className = {classNames(classes.gridTheme)}>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                      <Card className={classNames(classes.imgCardTop,classes.cateTitle)} >
                          <img style={{ height: "180px", width: "100%", display: "block" }}
                               className={classes.imgCardTop}
                               src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                               alt="Card-img-cap"
                          />

                      <CardBody className = {classNames(classes.cardTile)}>
                          <h4 className={classes.cardTitle}>INTER MEDEDITE 1</h4>
                          <p>
                                1 LESSON
                          </p>
                      </CardBody>
                      </Card>
                  </GridItem>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                      <Card className={classes.imgCardTop} >
                          <img style={{ height: "180px", width: "100%", display: "block" }}
                               className={classes.imgCardTop}
                               src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                               alt="Card-img-cap"
                          />
                          <CardBody className = {classNames(classes.cardTile)}>
                              <h4 className={classes.cardTitle}>INTER MEDEDITE 1</h4>
                              <p>
                                  1 LESSON
                              </p>
                          </CardBody>
                      </Card>
                  </GridItem>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                      <Card className={classes.imgCardTop} >
                          <img style={{ height: "180px", width: "100%", display: "block" }}
                               className={classes.imgCardTop}
                               src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                               alt="Card-img-cap"
                          />
                          <CardBody className = {classNames(classes.cardTile)}>
                              <h4 className={classes.cardTitle}>INTER MEDEDITE 1</h4>
                              <p>
                                  1 LESSON
                              </p>
                          </CardBody>
                      </Card>
                  </GridItem>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                      <Card className={classNames(classes.imgCardTop,classes.cateTitle)} >
                          <img style={{ height: "180px", width: "100%", display: "block" }}
                               className={classes.imgCardTop}
                               src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                               alt="Card-img-cap"
                          />

                          <CardBody className = {classNames(classes.cardTile)}>
                              <h4 className={classes.cardTitle}>INTER MEDEDITE 1</h4>
                              <p>
                                  1 LESSON
                              </p>
                          </CardBody>
                      </Card>
                  </GridItem>
              </GridContainer>
              <GridContainer className={classNames(classes.gridTheme)}>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                      <Card className={classNames(classes.imgCardTop,classes.cateTitle)} >
                          <img style={{ height: "180px", width: "100%", display: "block" }}
                               className={classes.imgCardTop}
                               src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                               alt="Card-img-cap"
                          />

                          <CardBody className = {classNames(classes.cardTile)}>
                              <h4 className={classes.cardTitle}>INTER MEDEDITE 1</h4>
                              <p>
                                  1 LESSON
                              </p>
                          </CardBody>
                      </Card>
                  </GridItem>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                      <Card className={classNames(classes.imgCardTop,classes.cateTitle)} >
                          <img style={{ height: "180px", width: "100%", display: "block" }}
                               className={classes.imgCardTop}
                               src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                               alt="Card-img-cap"
                          />

                          <CardBody className = {classNames(classes.cardTile)}>
                              <h4 className={classes.cardTitle}>INTER MEDEDITE 1</h4>
                              <p>
                                  1 LESSON
                              </p>
                          </CardBody>
                      </Card>
                  </GridItem>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                      <Card className={classNames(classes.imgCardTop,classes.cateTitle)} >
                          <img style={{ height: "180px", width: "100%", display: "block" }}
                               className={classes.imgCardTop}
                               src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                               alt="Card-img-cap"
                          />

                          <CardBody className = {classNames(classes.cardTile)}>
                              <h4 className={classes.cardTitle}>INTER MEDEDITE 1</h4>
                              <p>
                                  1 LESSON
                              </p>
                          </CardBody>
                      </Card>
                  </GridItem>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                      <Card className={classNames(classes.imgCardTop,classes.cateTitle)} >
                          <img style={{ height: "180px", width: "100%", display: "block" }}
                               className={classes.imgCardTop}
                               src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                               alt="Card-img-cap"
                          />

                          <CardBody className = {classNames(classes.cardTile)}>
                              <h4 className={classes.cardTitle}>INTER MEDEDITE 1</h4>
                              <p>
                                  1 LESSON
                              </p>
                          </CardBody>
                      </Card>
                  </GridItem>
              </GridContainer>
          </div>
        {/*<SectionBasics />*/}
        {/*<SectionNavbars />*/}
        {/*<SectionTabs />*/}
        {/*<SectionPills />*/}
        {/*<SectionNotifications />*/}
        {/*<SectionTypography />*/}
        {/*<SectionJavascript />*/}
        {/*<SectionCompletedExamples />*/}
        {/*<SectionDownload />*/}

      </div>
      <Footer />
    </div>
  );
}
