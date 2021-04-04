/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import Icon from "@material-ui/core/Icon";
import { PhoneIphone, CloudDownload ,Twitter} from "@material-ui/icons";
import CustomInput from 'components/CustomInput/CustomInput.js';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import People from '@material-ui/icons/People';

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div >
          <p className={classes.h4font}>
            ABAILABLE ON MUTIPLE DEVICE VIEW ALL ;)
          </p>
          <Button className={classNames(classes.footerLinkButton)}
              size={"sm"}
              color="rose"
          >
            <i
            className={"fab fa-apple"}
            />
            iPhone
          </Button>
          <Button className={classNames(classes.footerLinkButton)}
            size={"sm"}
            color="rose"
          >
            <i
                className={"fab fa-android"}
            />
            android
          </Button>
          <div>
            <p className = {classes.h2font}> $16 A MONTH or $160 A YEAR </p>
          </div>
        </div>
        <div className = {classes.subFooter}>
          <div >
            <GridContainer>
              <GridItem xs={4} sm={6} md={6} lg={5}>
                <div className={classNames(classes.left)}>
                  <Button className={classNames(classes.footerButton)}
                          color="primary"

                  >
                      JIVAMUKTI YOURGA
                  </Button>
                </div>
              </GridItem>
              <GridItem xs={8} sm={6} md={6} lg={7}>
              <div  className={classNames(classes.right)}>
                <Button className={classNames(classes.footerButton)}
                        color="info"
                >
                    FOUNDERS
                </Button>
                <Button className={classNames(classes.footerButton)}
                        color="success"

                >
                    OPEN CLASSES
                </Button>
              </div>
              </GridItem>
            </GridContainer>
          </div>
          <div >
            <p className = {classes.h4font}
            >
              AN EXPENSIVE LIBRARY OF CLASSES,
            </p>
            <p className = {classes.h4font}
            >
              MEDITATIONS, WORKSHOPS, AND MORE!
            </p>
            <p className = {classes.h4font}
            >
              NEW CLASSES EACH WEEK, EVERYTHING
            </p>
            <p className = {classes.h4font}>
              YOU NEED FOR YOUR YOGA PRACTICE!
            </p>
          </div>
          <div >
            <h5  className = {classes.h5font}>
              SCROLL DOWN TO PREVIEW SOME OF OUR FAVORITE SELECTION OF THE MOMENT.
            </h5>
            <div className = {classes.footBottom} >
              <CustomInput
                labelText="Please enter an email address Subscribe"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (<InputAdornment position="end"><People/></InputAdornment>)
                }}
              />
            </div>
          </div>
          </div>
        </div>
    </footer>
  );
}
Footer.propTypes = {
  whiteFont: PropTypes.bool
};
