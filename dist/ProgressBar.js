import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
const propTypes = {
  showLabel: PropTypes.bool,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  currentValue: PropTypes.number,
  barHeight: PropTypes.number,
  labelSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  activeBackColor: PropTypes.string,
  disabledBackColor: PropTypes.string,
  striped: PropTypes.bool,
  animated: PropTypes.bool,
  labelColor: PropTypes.string,
  borderRadius: PropTypes.number,
  slideIn: PropTypes.bool
};
const defaultProps = {
  showLabel: true,
  minValue: 0,
  maxValue: 100,
  currentValue: 50,
  barHeight: 30,
  labelSize: "medium",
  activeBackColor: "#007bff",
  disabledBackColor: "#cccccc",
  striped: false,
  animated: false,
  labelColor: "#ffffff",
  borderRadius: 0,
  slideIn: true
};

class ProgressBar extends React.Component {
  render() {
    const barProgressWidth = Math.round((this.props.currentValue - this.props.minValue) * 100 / (this.props.maxValue - this.props.minValue));
    const isStriped = this.props.striped ? "progress-bar-striped" : "";
    const isSlideInAnimated = this.props.animated && this.props.slideIn ? "progress-bar-animated-slideIn" : this.props.animated ? "progress-bar-animated" : this.props.slideIn ? "progress-bar-slideIn" : "";
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "progress",
      style: {
        height: this.props.barHeight,
        backgroundColor: this.props.disabledBackColor,
        borderRadius: this.props.borderRadius ? this.props.borderRadius : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: `progress-bar ${isStriped} ${isSlideInAnimated}`,
      role: "progressbar",
      style: {
        width: `${barProgressWidth}%`,
        backgroundColor: this.props.activeBackColor
      },
      "aria-valuenow": this.props.currentValue,
      "aria-valuemin": this.props.minValue,
      "aria-valuemax": this.props.maxValue
    }, this.props.showLabel ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: this.props.labelSize,
        color: this.props.labelColor
      }
    }, barProgressWidth, " %") : null)));
  }

}

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
export default ProgressBar;