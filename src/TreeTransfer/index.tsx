import React, {useState, useEffect} from 'react';
import {Transfer, Tree} from 'antd';
import '../style/index.less';

export interface TreeTransferProps {
  /**
   * 自定义主键字段
   */
  rowKey?: string;
  /**
   * 自定义展示内容字段
   */
  label?: string;
  /**
   * 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。必传
   */
  dataSource: Array<any>;
  /**
   * 显示在右侧框数据的 key 集合。必传
   */
  targetKeys: Array<any>;
}

const {TreeNode} = Tree;

const isChecked = (selectedKeys: Array<any>, eventKey: any) => {
  return selectedKeys.indexOf(eventKey) !== -1;
};

const handleKeys = (
  onItemSelect: Function,
  checkedKeys: Array<any>,
  keys: any,
  info: any
) => {
  const eventKey = info?.node?.props?.eventKey;
  onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
};

// 层级拆分
const flatten = (
  rowKey: string,
  label: string,
  list = [],
  array: Array<any>
): any => {
  list.forEach((item: any) => {
    let node = Object.assign({}, item);
    if (rowKey) {
      node.key = node[rowKey];
    }
    if (label) {
      node.label = node[label];
    }
    array.push(node);
    flatten(rowKey, label, item.children, array);
  });
  return array;
};

/**
 * 当key不是主键时，复制主键到key，不用title作为显示时，复制显示值到title
 * @param data
 * @param array
 * @returns
 */
const dataCopy = (
  rowKey: string,
  label: string,
  data: any,
  array: any
): any => {
  for (let i = 0; i < data.length; i++) {
    let node = Object.assign({}, data[i]);
    if (rowKey) {
      node.key = node[rowKey];
    }
    if (label) {
      node.title = node[label];
    }
    node.children = [];
    if (data[i].children) {
      dataCopy(rowKey, label, data[i].children, node.children);
    }
    array.push(node);
  }
  return array;
};

// 右侧框显示
const renderTitle = (label: string, item: any) => {
  if (label) {
    return item.label || '---';
  } else {
    return item.title || '---';
  }
};

// 获取父节点key
const getParentKey = (key: any, tree: any): any => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item: any) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

export const TreeTransfer = (props: any) => {
  const [searchValue, setSearchValue] = useState('');
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(false);
  const {dataSource, targetKeys, rowKey, label, ...restProps} = props;

  // 生成树节点
  const generateTree = (treeNodes = [], checkedKeys = []) => {
    // @ts-ignore
    return treeNodes.map(({children, title, ...props}) => {
      const index = (title as any).indexOf(searchValue);
      const beforeStr = (title as any).substr(0, index);
      const afterStr = (title as any).substr(index + searchValue.length);
      const value =
        index > -1 ? (
          <span>
            {beforeStr}
            <span style={{color: '#f50'}}>{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{title}</span>
        );
      return (
        <TreeNode
          {...props}
          title={value}
          // @ts-ignore
          disabled={checkedKeys.includes(props.key)}
          key={props.key}>
          {generateTree(children, checkedKeys)}
        </TreeNode>
      );
    });
  };
  const onSearch = (direction: 'left' | 'right', value: string) => {
    if (props.onSearch) {
      props.onSearch(direction, value);
      return;
    }
    if (direction === 'left') {
      const dataList = flatten(
        rowKey,
        label,
        dataCopy(rowKey, label, dataSource, []),
        []
      );
      let keys: any = [];
      keys = dataList
        .map((item: any) => {
          if (item.title.indexOf(value) > -1) {
            return getParentKey(
              item.key,
              dataCopy(rowKey, label, dataSource, [])
            );
          }
          return null;
        })
        .filter((item: any, i: number, self: any) => {
          return item && self.indexOf(item) === i;
        });
      setSearchValue(value);
      setExpandedKeys(keys);
      setAutoExpandParent(true);
    }
  };
  const onExpand = (expandedKeys: any) => {
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(true);
  };

  const renderTree = ({
    direction = 'left',
    onItemSelect = () => {},
    selectedKeys = []
  }) => {
    if (direction === 'left') {
      const checkedKeys = [...selectedKeys, ...targetKeys];
      return (
        <Tree
          checkable
          checkStrictly
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          checkedKeys={checkedKeys}
          onExpand={onExpand}
          onCheck={handleKeys.bind(window, onItemSelect, checkedKeys)}
          onSelect={handleKeys.bind(window, onItemSelect, checkedKeys)}>
          {generateTree(dataCopy(rowKey, label, dataSource, []), targetKeys)}
        </Tree>
      );
    }
  };

  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={flatten(rowKey, label, dataSource, [])}
      className='tree-transfer'
      render={renderTitle.bind(window, label)}
      onSearch={onSearch}>
      {({direction, onItemSelect, selectedKeys}) => {
        if (direction === 'left') {
          const checkedKeys = [...selectedKeys, ...targetKeys];
          return (
            <Tree
              checkable
              checkStrictly
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              checkedKeys={checkedKeys}
              onExpand={onExpand}
              onCheck={handleKeys.bind(window, onItemSelect, checkedKeys)}
              onSelect={handleKeys.bind(window, onItemSelect, checkedKeys)}>
              {generateTree(
                dataCopy(rowKey, label, dataSource, []),
                targetKeys
              )}
            </Tree>
          );
        }
      }}
    </Transfer>
  );
};
