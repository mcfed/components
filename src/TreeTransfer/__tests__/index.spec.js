import React from 'react';
import {TreeTransfer, TreeTransferProps} from '../index';

describe('TreeTransfer', () => {
  it.skip('TreeTransfer 方法测试', () => {
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
    const props = {
      rowKey: 'id',
      label: 'name',
      dataSource: asset,
      targetKeys: []
    };
    expect(TreeTransfer(props)).toMatchSnapshot();
  });
});
