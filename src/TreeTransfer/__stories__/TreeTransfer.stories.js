import React from 'react';
import {message} from 'antd';
import {storiesOf} from '@storybook/react';
import ToolBar from '../index';

const stories = storiesOf('TreeTransfer', module);

stories.add('基础用法', () => {
  class App extends React.Component {
    state = {
      targetKeys: []
    };
    onChange = nextTargetKeys => {
      this.setState({targetKeys: nextTargetKeys});
    };
    render() {
      const asset = [
        {
          key: '1',
          title: '1',
          children: [
            {
              key: '1-1',
              title: '1-1'
            }
          ]
        },
        {
          key: '2',
          title: '2'
        }
      ];
      return (
        <TreeTransfer
          showSearch
          dataSource={asset}
          targetKeys={[]}
          onChange={this.onChange}
          searchPlaceholder={'请输入'}
          listStyle={{height: 342}}
        />
      );
    }
  }

  return <App />;
});

stories.add('自定义主键', () => {
  class App extends React.Component {
    state = {
      targetKeys: []
    };
    onChange = nextTargetKeys => {
      this.setState({targetKeys: nextTargetKeys});
    };
    render() {
      const asset = [
        {
          id: '1',
          name: '1',
          children: [
            {
              id: '1-1',
              name: '1-1',
              children: [
                {
                  id: '1-1-1',
                  name: '1-1-1'
                }
              ]
            }
          ]
        },
        {
          id: '2',
          name: '2'
        },
        {
          id: '3',
          name: '3'
        }
      ];
      return (
        <TreeTransfer
          showSearch
          rowKey='id'
          label='name'
          dataSource={asset}
          targetKeys={['1']}
          onChange={this.onChange}
          searchPlaceholder={'请输入'}
          listStyle={{height: 342}}
        />
      );
    }
  }

  return <App />;
});
