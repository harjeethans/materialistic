import React from 'react';

import {Button} from 'materialistic';

class Buttons extends React.Component {

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
            <code>raised=true primary=true ripple=true</code>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <Button raised={1===1} primary={1===1} ripple={1===1}>Primary</Button>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <span>Ripple effect is css based.</span>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <code>raised=true accent=true ripple=true</code>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <Button raised={1===1} accent={1===1} ripple={1===1}>Raised</Button>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            @todo
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <code>mini=true floating=true ripple=true icon=true</code>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <Button mini={1===1} floating={1===1}  icon={1===1} colored={1===2}><i className="material-icons">add</i></Button>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            @todo
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <pre>
              <code>
                @todo add some code samples here.
              </code>
            </pre>
          </div>
        </div>

      </div>
    );
  }
}

export default Buttons;
