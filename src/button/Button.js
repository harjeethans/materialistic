import React, { PropTypes }  from 'react';
import classnames from 'classnames';

const baseClasses = {
  'mdl-button': true,
  'mdl-js-button': true
};

function Button(props) {

  const {
    children,
    className,
    floating,
    colored,
    ripple,
    raised,
    primary,
    accent,
    icon,
    mini,
    ...elementProps
  } = props;

  const classes = classnames(baseClasses, {
    'mdl-button--fab': floating,
    'mdl-button--colored': colored,
    'mdl-button--raised': raised,
    'mdl-button--primary': primary,
    'mdl-button--accent': accent,
    'mdl-button--icon': icon,
    'mdl-button--mini-fab': floating && mini,
    'ripple-effect': ripple
  }, className);

  return (
    <button  {...elementProps} className={classes}>
      {children}
    </button>
  );
}


Button.PropTypes = {
  className: PropTypes.string, //adds a custom css class
  floating: PropTypes.bool, // aka fab
  colored: PropTypes.bool,
  ripple: PropTypes.bool,
  raised: PropTypes.bool,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
  icon: PropTypes.bool,
  mini: PropTypes.bool
};

export default Button;
