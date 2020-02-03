import React from 'react';
import {Tree, Card, Checkbox} from 'antd';
import './style.less';
const TreeNode = Tree.TreeNode;

interface TreeTileProps {
  title?: string;
  checkedKeys?: any;
  dataSource: any;
  onChange?: (arg: any) => void;
}

interface TreeTileStates {
  indeterminate: boolean;
  checkAll: boolean;
  dataSourceKeys: any;
  checkedKeys: any;
}

class TreeTile extends React.Component<TreeTileProps, TreeTileStates> {
  static defaultProps = {
    dataSource: [],
    title: '请选择'
  };

  constructor(props: TreeTileProps) {
    super(props);
    this.state = {
      indeterminate: false,
      checkAll: false,
      dataSourceKeys: [],
      checkedKeys: []
    };
  }

  componentDidMount() {
    let {dataSource} = this.props;
    let dataSourceKeys = this.getKeysFromMap(dataSource, []);
    this.setState({
      dataSourceKeys
    });

    let {checkedKeys} = this.props;
    if (checkedKeys instanceof Array) {
      this.setState({
        checkedKeys
      });
    } else {
      this.setState({
        checkedKeys: []
      });
    }
  }

  getKeysFromMap = (data: any, dataSourceKeys: any) => {
    data.map((d: any) => {
      if (!!d.children) {
        this.getKeysFromMap(d.children, dataSourceKeys);
      }
      dataSourceKeys.push(d.key);
    });
    return dataSourceKeys;
  };

  renderTreeNodes = (data: any) =>
    data.map((item: any) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });

  onChange = (item: any) => {
    const {onChange} = this.props;
    if (!onChange) return null;
    return onChange(item);
  };

  onCheckAll = (e: any) => {
    let {dataSourceKeys} = this.state;
    let checkedKeys = e.target.checked ? dataSourceKeys : [];
    this.setState(
      {
        checkedKeys: checkedKeys,
        indeterminate: false,
        checkAll: e.target.checked
      },
      () => {
        this.onChange(checkedKeys);
      }
    );
  };

  onCheck = (checkedKeys: any) => {
    let {dataSourceKeys} = this.state;
    this.setState(
      {
        checkedKeys: checkedKeys,
        indeterminate:
          !!checkedKeys &&
          checkedKeys.length !== 0 &&
          checkedKeys.length < dataSourceKeys.length,
        checkAll: !!checkedKeys && checkedKeys.length === dataSourceKeys.length
      },
      () => {
        this.onChange(checkedKeys);
      }
    );
  };

  render() {
    const {title, dataSource} = this.props;
    let {checkedKeys} = this.state;
    return (
      <Card
        // @ts-ignore: 自定义属性，忽略检查
        size='small'
        title={title}
        extra={
          <Checkbox
            onChange={this.onCheckAll}
            indeterminate={this.state.indeterminate}
            checked={this.state.checkAll}>
            全选
          </Checkbox>
        }
        style={{width: '100%'}}>
        {!!dataSource && dataSource.length > 0 ? (
          <Tree
            className='treeTile'
            // @ts-ignore: 自定义属性，忽略检查
            name='tree'
            checkable
            blockNode={false}
            defaultExpandAll
            onCheck={this.onCheck}
            checkedKeys={checkedKeys}>
            {this.renderTreeNodes(dataSource)}
          </Tree>
        ) : (
          <p className='treeNoData'>no data</p>
        )}
      </Card>
    );
  }
}

export default TreeTile;
