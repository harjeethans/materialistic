import React from 'react';

import {Button} from 'materialistic';

class Buttons extends React.Component {

  render() {
    console.log('ccccc');

    return (
      <div className="docs-sample">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <Button><i className="material-icons">add</i></Button>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            4
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            4
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <Button raised={1===1}><i className="material-icons">add</i>Raised</Button>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            4
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            4
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <Button mini={1===1} floating={1===1}><i className="material-icons">add</i></Button>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            4
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            4
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
