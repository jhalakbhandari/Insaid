import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>&copy; Copyright 2022</div>
      <div>
        <a href="https://www.linkedin.com/in/jhalak-bhandari-3680961aa/">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/jhalak-bhandari-3680961aa/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/jhalakbhandari">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
