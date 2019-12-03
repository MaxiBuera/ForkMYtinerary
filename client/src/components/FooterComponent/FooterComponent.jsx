import React from "react";
import homeIcon from './homeIcon.png'
import "./FooterComponentStyle.css"
import {Link} from 'react-router-dom'

const FooterComponent = props => {
  return (
    <div>
      <footer className={"footer"}>
        <Link to={'/index'}>
        <img className={"homeIcon"} src={homeIcon} alt=""/>
        </Link>
      </footer>
    </div>
  );
};

export default FooterComponent;
