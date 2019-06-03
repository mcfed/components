import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tree, Card, Checkbox } from "antd";
import './style.less'

const { TreeNode } = Tree;

export default class TreeTile extends Component {
  constructor(props) {
    super(props);
    this.state ={
      indeterminate:false,
      checkAll: false,
      dataSourceKeys:[],
      checkedKeys:[]
    }
  }

  componentDidMount() {
    let { dataSource } = this.props
    let dataSourceKeys = this.getKeysFromMap(dataSource,[])
    this.setState({
      dataSourceKeys
    });

    let { checkedKeys } = this.props;
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

  getKeysFromMap = (data,dataSourceKeys) =>{
    data.map((d) => {
      if(!!d.children){
        this.getKeysFromMap(d.children,dataSourceKeys)
      }
      dataSourceKeys.push(d.key)
    })
    return dataSourceKeys
  }
  
  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    }); 

  onCheckAll  = (e) => {
    let { dataSourceKeys } = this.state
    this.setState({
      checkedKeys: e.target.checked ? dataSourceKeys : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  onCheck = checkedKeys  => {
    let { dataSourceKeys } = this.state
    this.setState({
      checkedKeys: checkedKeys,
      indeterminate: !!checkedKeys && checkedKeys.length!== 0 && checkedKeys.length < dataSourceKeys.length,
      checkAll: !!checkedKeys && checkedKeys.length === dataSourceKeys.length,
    });
  };

  render() {
    const {title, dataSource} = this.props 
    console.log(dataSource)
    let { checkedKeys } = this.state
    return (
      <Card size="small" title={title} extra={<Checkbox onChange={this.onCheckAll } indeterminate={this.state.indeterminate} checked={this.state.checkAll}>全选</Checkbox>} style={{ width: '100%' }}>
         {!!dataSource && dataSource.length > 0 ? <Tree 
            className="treeTile"            
            name="tree"
            checkable
            blockNode={false}
            defaultExpandAll
            onCheck={this.onCheck}
            checkedKeys={checkedKeys}
          >
            {this.renderTreeNodes(dataSource)}
          </Tree>
          :<p className="treeNoData">no data</p> }
      </Card>
    );
  }
}

TreeTile.propTypes = {
  title: PropTypes.string,
  checkedKeys: PropTypes.array,
  dataSource: PropTypes.array.isRequired
};

TreeTile.defaultProps = {
  title: "请选择",
  checkedKeys: [],
  dataSource: []
};
