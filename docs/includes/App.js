import React from 'react';
import {Link} from 'react-router';

import Sidebar from './nav/Sidebar';

import {routes, sidebarData} from './data';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">materialistic</span>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <Link className="mdl-navigation__link" to="/about">About</Link>
              <Link className="mdl-navigation__link" to="/getting-started">Getting Started</Link>
              <Link className="mdl-navigation__link" to="/components">Components</Link>
              <Link className="mdl-navigation__link" to="/faq">FAQ</Link>
            </nav>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link className="mdl-navigation__link" to="github">GitHub</Link>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">materialistic</span>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to="github">GitHub</Link>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet">
              <Sidebar items={sidebarData}></Sidebar>
            </div>
            <div className="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet">
              {this.props.children}
            </div>
          </div>

        </main>

      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {};


export default App;
