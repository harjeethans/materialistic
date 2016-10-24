import React, { PropTypes }  from 'react';
import classnames from 'classnames';

import Button from '../button/Button';


const modifierClasses = {
  'mdl-menu--small': true,
  'mdl-menu--medium': false,
  'mdl-menu--large': false
};

class Menu extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onClick = this.onClick.bind(this);

    this.state = {
      isOpen: false
    };

  }

  onClick(event) {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const {baseClass, children, className, ripple, size} = this.props;

    const classes = classnames(baseClass, {
      'ripple-effect': ripple,
      'mdl-menu--small': (size === 'S'),
      'mdl-menu--medium': (size === 'M'),
      'mdl-menu--large': (size === 'L')
    }, className);
    const containerClasses = classnames({
      'mdl-menu__container': true,
      'is-visible': this.state.isOpen
    })

    return (
      <div className={classes} onClick={this.onClick}>
        <Button>Options</Button>
        <div className={containerClasses}>
          <ul className="mdl-menu mdl-shadow--2dp mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect">
            {children}
          </ul>
        </div>
      </div>
    );
  }
}


Menu.state = {
  isOpen: false
}

Menu.propTypes = {
  baseClass: PropTypes.string,
  className: PropTypes.string, //adds a custom css class
  children: PropTypes.array,
  onClick: React.PropTypes.func, // callback for onMouseEnter
  ripple: PropTypes.bool,
  position: PropTypes.oneOf(['BL', 'BR','TL','TR']),
  size: PropTypes.oneOf(['A', 'S', 'M','L']) // custom, small , medium , large
}

Menu.defaultProps = {
  baseClass: 'mdl-menu--container',
  position: 'BL',
  size: 'S'
}

export default Menu;
