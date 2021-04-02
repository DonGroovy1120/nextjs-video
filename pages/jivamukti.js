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

import { cardTitle, cardLink, cardSubtitle, primaryColor } from "assets/jss/nextjs-material-kit.js";

const useStyles = makeStyles(imgStyles);

const additionalStyles = makeStyles(theme => ({
  startButton: {
    borderColor: primaryColor,
    backgroundColor: '#fff',
    border: '2px solid'
  }
}))

const styles = {
  ...useStyles,
  cardTitle,
  cardLink,
  cardSubtitle,
  ...additionalStyles
};

export default function Components(props) {
  const classes = useStyles();

  const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const recentItems = [
    {
      title: 'EASY',
      description: 'Well, the first step is to understand yoga.',
      categories: '​Bhakti Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1536007164800-b7f11331f35c?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + EASY',
      description: ' The real yoga. The true, traditional, life-changing yoga that has been studied and practiced for thousands of years.',
      categories: 'Gnana Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1522845015757-50bce044e5da?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + NORMAL',
      description: 'There is a lot of misinformation out there, especially with the rise of yoga stars and gym-style yoga classes.',
      categories: 'Karma Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1543604055-dede4512686d?ixlib=rb-1.2.1&ixid=MXwxMjA3[…]8ODZ8fHlvZ2F8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + HARD',
      description: 'And hey, that’s okay. We are totally supportive of everyone trying to get in on this yoga action.',
      categories: ' Kriya Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1603987835113-841f232f6f70?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + EASY',
      description: 'But we also want you to know what true yoga is about, the different types of yoga, and the branded styles that you might find on your favorite yoga studio class schedule.',
      categories: 'Tantra Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1529693662653-9d480530a697?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENLTE + EASY',
      description: 'That’s why we’ve created this ultimate guide to the types of yoga for you.',
      categories: 'Kundalini Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1579454563399-9da67b065830?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + HARD',
      description: 'So that when you choose a style of yoga for your practice, yoga teacher training program, or anything else, ',
      categories: 'Iyengar Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + NORMAL',
      description: 'anything else, you are choosing one based on the ancient wisdom that yoga has to offer',
      categories: 'Vinyasa Yoga',
      imageUrl: 'https://images.unsplash.com/flagged/photo-1573556278922-ad9a1914c801?ixid=MXwxMjA3fDB8[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ]

  const hottestItems = [
    {
      title: 'EASY',
      description: 'Well, the first step is to understand yoga.',
      categories: '​Bhakti Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1535007829477-d13662ffb714?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + EASY',
      description: ' The real yoga. The true, traditional, life-changing yoga that has been studied .',
      categories: 'Gnana Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixid=MXwxMjA3fDB8MHxzZWFyY2h[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + NORMAL',
      description: 'There is a lot of misinformation out there, especially with the rise of yoga stars and gym-style yoga classes.',
      categories: 'Karma Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1588783344727-f67e17b45dfc?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + HARD',
      description: 'And hey, that’s okay. We are totally supportive of everyone trying to get in on this yoga action.',
      categories: ' Kriya Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1573384666979-2b1e160d2d08?ixlib=rb-1.2.1&ixid=MXwxM[…]8NDB8fHlvZ2F8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + EASY',
      description: 'But we also want you to know what true yoga is about, the different types of yoga.',
      categories: 'Tantra Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENLTE + EASY',
      description: 'That’s why we’ve created this ultimate guide to the types of yoga for you.',
      categories: 'Kundalini Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + HARD',
      description: 'So that when you choose a style of yoga for your practice, yoga teacher training anything else, ',
      categories: 'Iyengar Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1552196527-bffef41ef674?ixid=MXwxMjA3fDB8MHxzZWFyY2h[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'GENTLE + NORMAL',
      description: 'anything else, you are choosing one based on the ancient wisdom that yoga has to offer',
      categories: 'Vinyasa Yoga',
      imageUrl: 'https://images.unsplash.com/photo-1510024161681-8a1f66ed1a25?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ]

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
              <img className={classes.imgCard} src="https://images.unsplash.com/photo-1611095966422-50a79dd5313b?ixid=MXwxMjA3fDF8MHxlZGl0[…]fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              <div className={classes.imgCardOverlay}>
                <h4 className={classes.h3Font}>GENTLE + EASY</h4>
                <p  className={classes.cardBody}>LESSON 1</p>
                <p  className={classes.cardFooter}>15-35MINUTES</p>
              </div>
            </Card>
          </GridItem>
        </GridContainer >
        <h3 style={{color: primaryColor, textAlign: 'center', fontWeight: 'bold', marginTop: 0}}>Recent</h3>
        <div className={classNames(classes.mainRaised)}>
          <GridContainer className={classNames(classes.gridContainer)}>
            {recentItems.map(item => (
              <GridItem xs={1} sm={2} md={3} lg={4}  className={classes.gridItem}>
                <Card style={{width: "auto"}}>
                  <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={item.imageUrl}
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.h3Font}>{item.title}</h4>
                    <p className={classes.cardBody} style={{maxHeight: '48px', overflow: 'hidden'}}>{item.description}</p>
                    <p  className={classes.cardBody}>{item.categories}</p>
                    <Button color="primary" variant="outlined" fullWidth style={{color: primaryColor, backgroundColor: '#fff', border: '2px solid ' + primaryColor}}>Start Lesson</Button>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        </div>

        <h3 style={{color: primaryColor, textAlign: 'center', fontWeight: 'bold'}}>Hottest</h3>
        <div className={classNames(classes.mainRaised)}>
          <GridContainer className={classNames(classes.gridContainer)}>
            {hottestItems.map(item => (
              <GridItem xs={1} sm={2} md={3} lg={4}  className={classes.gridItem}>
                <Card style={{width: "auto"}}>
                  <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={item.imageUrl}
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.h3Font}>{item.title}</h4>
                    <p className={classes.cardBody} style={{maxHeight: '48px', overflow: 'hidden'}}>{item.description}</p>
                    <p  className={classes.cardBody}>{item.categories}</p>
                    <Button color="primary" variant="outlined" fullWidth style={{color: primaryColor, backgroundColor: '#fff', border: '2px solid ' + primaryColor}}>Start Lesson</Button>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
