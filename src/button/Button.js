const React = require('react');
const classnames = require('classnames');

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


Button.propTypes = {
  className: React.PropTypes.string, //adds a custom css class
  floating: React.PropTypes.bool, // aka fab
  colored: React.PropTypes.bool,
  ripple: React.PropTypes.bool,
  raised: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  accent: React.PropTypes.bool,
  icon: React.PropTypes.bool,
  mini: React.PropTypes.bool
};

export default Button;
