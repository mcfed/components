import React from 'react';
import {storiesOf} from '@storybook/react';
import SwitchConfirm from '../index';

const stories = storiesOf('SwitchConfirm', module);

stories.addParameters({jest: ['SwitchConfirm.spec.js']});

class Show extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currentText: props.currentOption || props.checked || false
    };
  }
  handleSet(current) {
    this.setState({
      currentText: current
    });
  }
  render() {
    const {...SwitchProps} = this.props;
    return (
      <div>
        <SwitchConfirm
          {...SwitchProps}
          onConfirm={(current, option) => {
            console.log(current, this);
            this.handleSet.call(this, current);
            option();
          }}
        />
        current:
        <span>{String(this.state.currentText)}</span>
      </div>
    );
  }
}

stories.add('基础用法', () => <Show modalConfirmProps={{title: 'title'}} />);
stories.add('自定义ON|OFF用法', () => (
  <Show
    uncheckedOption='OFF'
    checkedOption='ON'
    currentOption='OFF'
    modalConfirmProps={{title: 'title'}}
  />
));
