import React, { PropTypes }  from 'react';
import classnames from 'classnames';

function MenuItem(props) {

  const {
    children,
    className,
    divider,
    dividerClass,
    ...elementProps
  } = props;

  const classes = classnames(baseClass, className, {[dividerClass]: divider});
  return (
    <li className={classes} {...elementProps}></li>
  );
}


MenuItem.PropTypes = {
  baseClass: PropTypes.string,
  className: PropTypes.string,
  background: PropTypes.bool,
  divider: PropTypes.bool,
  dividerClass: PropTypes.string,
  overlap: PropTypes.bool,
  useTag: PropTypes.oneOf(['a','span', 'div'])
};

MenuItem.defaultProps = {
  baseClass: 'mdl-menu__item',
  background: true,
  dividerClass: 'mdl-menu__item--full-bleed-divider',
  useTag: 'span'
}

export default MenuItem;
