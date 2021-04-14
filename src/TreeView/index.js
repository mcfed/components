import React, {Component} from 'react';
import {Tree, Input, Button, TreeSelect} from 'antd';

const Search = Input.Search;
const TreeNode = Tree.TreeNode;
const DirectoryTree = Tree.DirectoryTree;

export {TreeNode};

export default class TreeView extends Component {
  // state = {
  // 	checkedKeys: [],
  // }
  constructor(props) {
    super(props);
    this.state = {
      checkedKeys: props.value,
      expandedKeys: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.value) != JSON.stringify(this.props.value)) {
      this.setState({
        checkedKeys: nextProps.value
      });
    }
  }

  loopTreeNode(data) {
    let {renderItem} = this.props;
    return data.map(item => {
      if (item.children && item.children.length) {
        return React.cloneElement(
          renderItem(item),
          {},
          this.loopTreeNode(item.children)
        );
      }
      return React.cloneElement(renderItem(item));
    });
  }
  onCheck = (checkedKeys, e) => {
    const {filterNode} = this.props;
    let filterKeys = [];
    if (filterNode) {
      //是否需要移除父节点传值
      filterKeys = filterNode(e.checkedNodes);
    } else {
      //常规分支
      filterKeys = checkedKeys;
    }
    this.setState(
      {
        checkedKeys: filterKeys
      },
      () => {
        this.props.onChange(this.state.checkedKeys);
      }
    );
  };

  onSelect = (selectedKeys, e, selectedNodes) => {
    // console.log(selectedKeys,e.node)
    const {onSelect} = this.props;
    this.setState({selectedKeys});
    if (onSelect) {
      onSelect(e.node);
    }
  };

  onExpand = (expandedKeys, e) => {
    // console.log(expandedKeys,'----',this.state.expandedKeys)
    this.setState({
      expandedKeys: expandedKeys
    });
  };
  render() {
    const {
      treeData,
      treeConfig,
      isTreeInModal,
      value,
      onSelect,
      defaultKey,
      scrollHeight
    } = this.props;
    const {checkedKeys, expandedKeys} = this.state;
    // console.log(treeData)
    //style={{maxHeight:scrollHeight,overflowY:'auto',border:'1px solid #d9d9d9'}}
    return (
      <div
        className='ant-tree-view'
        style={
          scrollHeight
            ? {
                maxHeight: scrollHeight,
                overflowY: 'auto',
                border: '1px solid #d9d9d9'
              }
            : {}
        }>
        <Tree
          defaultSelectedKeys={checkedKeys}
          checkedKeys={checkedKeys}
          {...treeConfig}
          expandedKeys={expandedKeys}
          className={isTreeInModal ? 'tree-in-modal' : ''}
          onCheck={this.onCheck}
          onSelect={this.onSelect}
          onExpand={this.onExpand}>
          {this.loopTreeNode(treeData)}
        </Tree>
      </div>
    );
  }
}

export class TreeSelectPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  //
  onChange(value, label) {
    const {onChange} = this.props;
    // console.log(value,label)
    this.setState(
      {
        value: value
      },
      function() {
        onChange(value);
      }
    );
  }

  render() {
    const {
      onChange,
      treeData,
      children,
      value,
      allowClear,
      ...otherProps
    } = this.props;
    // console.log(children,this.state.value)
    if (allowClear == true) {
      return (
        <TreeSelect
          {...otherProps}
          defaultValue={this.state.value}
          treeData={treeData}
          allowClear={allowClear}
          onChange={onChange}
          onSelect={this.onChange.bind(this)}
        />
      );
    } else {
      return (
        <TreeSelect
          {...otherProps}
          value={this.state.value}
          treeData={treeData}
          onSelect={this.onChange.bind(this)}
        />
      );
    }
  }
}

export class TreeViewPanel extends Component {
  state = {
    key: '',
    inside: false,
    label: '',
    value: ''
  };
  onSearch(value, event) {
    const {searchCallback} = this.props;
    // console.log(node.props.title)
    if (searchCallback) {
      searchCallback(value);
    } else {
      this.setState({
        key: value
      });
    }
  }
  onSelect(node, value) {
    this.setState({
      label: node.props.title,
      value: node.props.value
    });
  }
  filterTree(data, regexp) {
    // let { renderNode } = this.props
    return new Array().concat(data).filter(item => {
      if (item.children && item.children.length) {
        // console.log(this.filterTree(item.children,regexp))
        item.children = this.filterTree(item.children, regexp);
      }

      /* istanbul ignore next */
      return (
        regexp.test(item.title) || (item.children && item.children.length > 0)
      );
    });
  }
  onMouseHandler(status) {
    const {key, inside, label, value} = this.state;
    if (label != '') {
      this.setState({
        inside: !status
      });
    }
  }
  renderPanel() {
    const {treeData, isShowExpend, searchCallback, ...others} = this.props;
    const {key, inside, label, value} = this.state;
    if (inside && isShowExpend) {
      return <div className='tree-view-panel-box'>{label}</div>;
    } else {
      return (
        <div className='tree-view-panel-box'>
          <Search
            style={{marginBottom: 8}}
            placeholder='Search'
            onSearch={this.onSearch.bind(this)}
          />
          <TreeView
            treeData={this.filterTree(treeData, new RegExp(key))}
            {...others}
            onSelect={this.onSelect.bind(this)}
          />
        </div>
      );
    }
  }
  renderExpendButton() {
    const {isShowExpend} = this.props;
    const {key, inside, label} = this.state;
    return isShowExpend ? (
      <Button onClick={this.onMouseHandler.bind(this, inside)}>
        {!inside ? '收起' : '展开'}
      </Button>
    ) : null;
  }
  render() {
    return (
      <div className='tree-view-panel'>
        {this.renderExpendButton()}
        {this.renderPanel()}
      </div>
    );
  }
}
