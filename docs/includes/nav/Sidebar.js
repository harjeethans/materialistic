import React from 'react';

import {Link} from 'react-router';

function Sidebar(props) {

  const renderSidebarItems = function(items){
    return (
      items.map((item, index) => {
        return (
          <li className="mdl-list__item" key={index}>
            <span className="mdl-list__item-primary-content">
              <Link className="mdl-navigation__link" to={'/' +item.href}>{item.text}</Link></span>
          </li>
        );
      })
    );
  }

  return (
    <ul className="demo-list-item mdl-list">
      {renderSidebarItems(props.items)}
    </ul>
  );
}

Sidebar.propTypes = {
  items: React.PropTypes.array
};

Sidebar.defaultProps = {
  items: [1]
};




export default Sidebar;
