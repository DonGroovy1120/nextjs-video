/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
// @material-ui/icons
import { Apps, CloudDownload, ArrowDropDownOutlined } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
export default function HeaderLinks(props) {
  const {loginSuc} = props;
  const classes = useStyles();
  if (loginSuc)
    console.log("login success");
  else
    console.log("login Fail");

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
            href="/browse"
            color="transparent"
            className={classes.navLink}
          >
            BROWSE
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          className={classes.navLink}
        >
          SEARCH
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/newclasses"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          NEW CLASSES
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/teachers"
          color="transparent"
          className={classes.navLink}
        >
         TEACHERS
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/shop"
          color="transparent"
          className={classes.navLink}
        >
          SHOP
        </Button>
      </ListItem>
      {
        !loginSuc? (
          <ListItem className={classes.listItem}>
        <Button
          href="/login"
          color="transparent"
          target="_blank"
          visible="false"
          className={classes.navLink}
        >
          Log in
        </Button>
      </ListItem>
        ) : (
          null//
        )
      }
      
      <ListItem className={classes.listItem}
        color="blue"
      >
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Sign UP"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
            
          }}
          // buttonIcon={ArrowDropDownOutlined}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
    </List>
  );
}
HeaderLinks.propTypes = {
  loginSuc: PropTypes.bool
}