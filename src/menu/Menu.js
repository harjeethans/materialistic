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
    this.onClickOutsideMenu = this.onClickOutsideMenu.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };

  }

  onClick(event) {
    if(this.state.isOpen){
      // close the menu and remove onClickOutsideMenu binding.
      this.close(event);
    }
    //event.stopPropagation();
  }

  onClickOutsideMenu(event){
    if(event.target.nodeName === 'LI' || event.target.nodeName === 'BUTTON' || event.target.nodeName === 'I'){
      return;
    }
    if(this.state.isOpen){
      this.setState({isOpen: false});
      document.body.removeEventListener('click', this.onClickOutsideMenu);
    }
  }

  open(event){
    this.setState({isOpen: true});
    document.body.addEventListener('click', this.onClickOutsideMenu);
  }

  close(event) {
    this.setState({isOpen: false});
    document.body.removeEventListener('click', this.onClickOutsideMenu);
  }

  toggle(event) {
    if(this.state.isOpen){
      this.close(event);
    } else {
      this.open(event);
    }
  }

  render() {
    const {baseClass, children, className, icon, label, ripple, size} = this.props;

    const classes = classnames(baseClass, {
      'mdl-menu--open': this.state.isOpen,
      'mdl-menu--small': (size === 'S'),
      'mdl-menu--medium': (size === 'M'),
      'mdl-menu--large': (size === 'L'),
      'ripple-effect': ripple
    }, className);
    const containerClasses = classnames({
      'mdl-menu__container': true,
      'is-visible': this.state.isOpen
    })

    let labelNode = label;
    if(icon){
      labelNode = <i className="material-icons">{icon}</i>
    }


    return (
      <div className={classes}>
        <Button onClick={this.toggle} icon={(icon)}>{labelNode}</Button>
        <div className={containerClasses} onClick={this.onClick}>
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
  icon: PropTypes.string, //material icon if needed, do not supply label if you just need icon
  label: PropTypes.string, //label for the menu
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
