import PropTypes from "prop-types";
import React, { Component } from "react";
import * as boxStyle from "./box.module.css";

export default class Box extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={boxStyle.box}>
        {children}
        <h4>{title}</h4>
      </div>
    );
  }
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
