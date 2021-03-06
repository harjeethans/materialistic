import React from 'react';

import {Dialog, Button} from 'materialistic';

import {container} from './Styles';

class Dialogs extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      dialogcontainer: document.getElementById("dialogs-contained-container")
    }
  }

  open(event) {
    this.setState({ open: true });
  }

  openInContainer(event) {
    this.setState({
      open: true,
      container: document.getElementById("dialogs-contained-container")
    });

  }

  close() {
    this.setState({ open: false });
  }

  render() {
    console.log(JSON.stringify(container));
    return (
      <div className="docs-sample">
        <div className="">
        <Button raised={1===1} primary={1===1} ripple={1===1} onClick={this.open.bind(this)}>Show Modal</Button><br/><br/>
        <Button raised={1===1} primary={1===1} ripple={1===1} onClick={this.openInContainer.bind(this)}>Show Modal In Container</Button>
        <Dialog open={this.state.open} ref="dialog">
          <Dialog.Title/>
          <Dialog.Content>
            <p>Allowing us to collect data will let us get you the information you want faster.</p>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onClick={this.close.bind(this)}>Ok</Button>
            <Button onClick={this.close.bind(this)}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </div>
      <div style = {container}>
        <div className="dialogs-contained-container" id="dialogs-contained-container"></div>
      </div>
      </div>
    );
  }
}

export default Dialogs;
