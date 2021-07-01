import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Box extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        {children}
        <h3>{title}</h3>
      </div>
    );
  }
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
