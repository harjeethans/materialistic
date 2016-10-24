import React, { PropTypes }  from 'react';
import classnames from 'classnames';

const baseClasses = {
  'mdl-menu__item': true
};

function MenuItem(props) {

  const {
    children,
    className,
    divider,
    dividerClass,
    ...elementProps
  } = props;

  const classes = classnames(baseClasses, className, {[dividerClass]: divider});
  return (
    <li className={classes} {...elementProps}>{children}</li>
  );
}


MenuItem.PropTypes = {
  className: PropTypes.string,
  divider: PropTypes.bool,
  dividerClass: PropTypes.string,
  overlap: PropTypes.bool
};

MenuItem.defaultProps = {
  dividerClass: 'mdl-menu__item--full-bleed-divider'
}

export default MenuItem;
