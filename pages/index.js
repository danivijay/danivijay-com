import React, { Fragment } from "react";
import ReactRotatingText from "react-rotating-text";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faStackOverflow,
  faLinkedin,
  faGithub,
  faDev,
  faMedium
} from "@fortawesome/free-brands-svg-icons";

const SocialLink = ({ link, text, handler, subText }) => (
  <Fragment>
    {" "}
    <a href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
    {(handler || subText) && (
      <Fragment>
        {" "}
        (
        {handler && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {handler}
          </a>
        )}
        {handler && subText && " - "}
        {subText})
      </Fragment>
    )}
  </Fragment>
);

const index = () => {
  return (
    <Container>
      <p style={{ fontSize: "2em", marginBottom: "0" }}>Hi,</p>
      <h1 style={{ fontSize: "3em", marginTop: "0" }}>I'm Dani Vijay.</h1>
      <div style={{ fontSize: "1.5em" }} className="social-links">
        <div>
          <a
            href="https://twitter.com/UtmostDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              style={{ fontSize: "1em", marginRight: "5px" }}
              icon={faTwitter}
            />{" "}
            @UtmostDev
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/danivijay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              style={{ fontSize: "1em", marginRight: "5px" }}
              icon={faLinkedin}
            />{" "}
            danivijay
          </a>
        </div>
        <div>
          <a
            href="https://stackoverflow.com/users/4230220/dani-vijay?tab=profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              style={{ fontSize: "1em", marginRight: "5px" }}
              icon={faStackOverflow}
            />{" "}
            Dani Vijay
          </a>
        </div>
        <div>
          <a
            href="https://github.com/danivijay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              style={{ fontSize: "1em", marginRight: "5px" }}
              icon={faGithub}
            />{" "}
            danivijay
          </a>
        </div>
        <div>
          <a
            href="https://dev.to/danivijay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              style={{ fontSize: "1em", marginRight: "5px" }}
              icon={faDev}
            />{" "}
            @danivijay
          </a>
        </div>
        <div>
          <a
            href="https://medium.com/@danivijay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              style={{ fontSize: "1em", marginRight: "5px" }}
              icon={faMedium}
            />{" "}
            @danivijay
          </a>
        </div>
      </div>
      <p style={{ fontSize: "1.5em" }}>
        Your friendly neighborhood <wbr />
        Full Stack Web Developer.
      </p>
      <p></p>
      <h2 style={{ fontWeight: "500" }}>
        I've extensive work experience with ReactJS (
        <a
          href="https://stackoverflow.com/users/story/4230220?view=Timeline"
          target="_blank"
          rel="noopener noreferrer"
        >
          among top 10% in StackOverflow
        </a>
        ), NodeJS/ ExpressJS, Ruby on Rails, MongoDB and MySQL.
      </h2>
      <p style={{ fontSize: "1.2em" }}>
        I'm fascinated about new technologies, and love to add them to my
        arsenal for timely disposal. More than happy to learn stuff to improve
        projects that I'm working on.{" "}
      </p>
      <p style={{ fontSize: "1.2em" }}>
        I've also worked with{" "}
        <ReactRotatingText
          items={[
            "Lambda Functions",
            "VueJS",
            "Python",
            "PHP",
            "Bash",
            "Firebase",
            "AWS API Gateway",
            "Heroku",
            "Netlify",
            "Gatsby",
            "NextJS",
            "Nginx"
          ]}
        />
      </p>
    </Container>
  );
};

export default index;
