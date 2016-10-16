import React, { PropTypes }  from 'react';
import classnames from 'classnames';

import Button from '../button/Button';

class Menu extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  onClick(event) {

  }

  render() {
    const {baseClass, children, className, ripple} = this.props;

    const classes = classnames(baseClass, {
      'ripple-effect': ripple
    }, className);

    return (
      <div className={classes}>
        <Button >Options</Button>
        <div className="mdl-menu__container">
        <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect">
          {children}
        </ul>
        </div>
      </div>
    );
  }
}


Menu.state = {
  isOpen:false
}

Menu.propTypes = {
  baseClass: PropTypes.string,
  className: PropTypes.string, //adds a custom css class
  children: PropTypes.array,
  onClick: React.PropTypes.func, // callback for onMouseEnter
  ripple: PropTypes.bool,
  position: PropTypes.oneOf(['BL', 'BR','TL','TR'])

}

Menu.defaultProps = {
  baseClass: 'mdl-menu--container',
  position: 'BL'
}

export default Menu;
