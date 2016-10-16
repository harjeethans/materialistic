import React from 'react';

import {Menu, MenuItem} from 'materialistic';

class Menus extends React.Component {
  render() {
    return (
      <Menu className="foo">

          <li className="mdl-menu__item">Some Action</li>
          <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">Another Action</li>
          <li disabled className="mdl-menu__item">Disabled Action</li>
          <li className="mdl-menu__item">Yet Another Action</li>
              </Menu>
    );
  }
}

export default Menus;
