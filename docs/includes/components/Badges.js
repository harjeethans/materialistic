import React from 'react';

import {Badge} from 'materialistic';

class Badges extends React.Component {
  render() {
    return (
      <div className="docs-sample">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <h6>Properties used</h6>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <h6>Component</h6>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <h6>Caveats</h6>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <code></code>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <Badge data-badge="2">Inbox</Badge>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <span>Default generated span tag.</span>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <code>useTag='a'</code>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <Badge data-badge="2" useTag="a" href="#">Messages</Badge>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <span>using an anchor tag</span>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <code>useTag='div' overlap=true</code>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <Badge data-badge="♥" overlap={1===1} useTag="div" className="material-icons">account_box</Badge>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <span>using a dic tag with ocerlap</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
