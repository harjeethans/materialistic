import React, { PropTypes }  from 'react';
import classnames from 'classnames';

class RenderInContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.popup = document.createElement("div");
    this.props.container.appendChild(this.popup);
    this._renderLayer();
  }

  componentDidUpdate() {
    this._renderLayer();
  }

  componentWillUnmount() {
    React.unmountComponentAtNode(this.popup);
    this.props.container.removeChild(this.popup);
  }

  _renderLayer() {
    React.render(this.props.children, this.popup);
  }

  render() {
    // Render a placeholder
    //return React.DOM.div(this.props);
    return null;
  }

}


RenderInContainer.propTypes = {
  children: PropTypes.array,
  container: React.PropTypes.oneOfType([
    componentOrElement
  ])
}

RenderInContainer.defaultProps = {
  container: document.body
}

export default RenderInContainer;
