import React, { PropTypes }  from 'react';
import classnames from 'classnames';

const baseClasses = {
  'mdl-badge': true
};

function Badge(props) {

  const {
    children,
    className,
    background,
    overlap,
    useTag,
    ...elementProps
  } = props;

  const classes = classnames(baseClasses, {
    'mdl-badge--no-background': !background,
    'mdl-badge--overlap': overlap
  }, className);

  return (
    React.createElement(
      useTag,
      Object.assign(elementProps, {className: classes}),
      children
    )
  );

  /*
  ((useTag === 'span') ? (
    <span {...elementProps} className={classes}>
      {children}
    </span>
    ) : (
    <a {...elementProps} className={classes}>
      {children}
    </a>
    )
  )*/
}


Badge.PropTypes = {
  className: PropTypes.string,
  background: PropTypes.bool,
  overlap: PropTypes.bool,
  useTag: PropTypes.oneOf(['a','span', 'div'])
};

Badge.defaultProps = {
  background: true,
  useTag: 'span'
}

export default Badge;
