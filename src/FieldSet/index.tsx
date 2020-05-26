import React from 'react';
import {Divider, Icon} from 'antd';

const up = {
  transform: 'rotate(180deg)',
  fontSize: 12,
  marginLeft: 5,
  verticalAlign: -1
};
const down = {
  fontSize: 12,
  marginLeft: 5,
  verticalAlign: -1
};
const UpDown = ({state = 'up'}) => (
  <Icon
    type={'down'}
    className={down.toString()}
    style={state === 'down' ? down : up}
  />
);

interface FieldSetProps {
  title: string;
  display: string;
  onChange: any;
}

interface FieldSetStates {
  hidden: boolean;
}

class FieldSet extends React.Component<FieldSetProps, FieldSetStates> {
  static defaultProp = {
    title: '',
    display: '',
    onChange: function() {}
  };
  state = {
    hidden:
      this.props.display === undefined ? false : this.props.display === 'hide'
  };
  showHideFun = () => {
    this.setState({hidden: !this.state.hidden}, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.hidden ? 'hide' : 'show');
      }
    });
  };
  render() {
    return (
      <div>
        <Divider orientation='left'>
          {this.props.display === undefined ? (
            this.props.title
          ) : (
            <a onClick={this.showHideFun}>
              {this.props.title}
              <UpDown state={this.state.hidden ? 'up' : 'down'} />
            </a>
          )}
        </Divider>
        {!this.state.hidden && this.props.children}
      </div>
    );
  }
}
export default FieldSet;
export {UpDown, down, up};
