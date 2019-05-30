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
      defaultCheckedKeys:[]
    }
  }

  componentDidMount() {
    let { dataSource } = this.props
    let dataSourceKeys = this.getKeysFromMap(dataSource,[])
    this.setState({
      dataSourceKeys
    });

    let { defaultCheckedKeys } = this.props;
    if (defaultCheckedKeys instanceof Array) {
      this.setState({
        defaultCheckedKeys
      });
    } else {
      this.setState({
        defaultCheckedKeys: []
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
      defaultCheckedKeys: e.target.checked ? dataSourceKeys : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  onCheck = checkedKeys  => {
    let { dataSourceKeys } = this.state
    this.setState({
      defaultCheckedKeys: checkedKeys,
      indeterminate: !!checkedKeys && checkedKeys.length!== 0 && checkedKeys.length < dataSourceKeys.length,
      checkAll: !!checkedKeys && checkedKeys.length === dataSourceKeys.length,
    });
  };

  render() {
    const {title, dataSource} = this.props 
    let { defaultCheckedKeys } = this.state
    
    console.log(defaultCheckedKeys)
    return (
      <Card size="small" title={title} extra={<Checkbox onChange={this.onCheckAll } indeterminate={this.state.indeterminate} checked={this.state.checkAll}>全选</Checkbox>} style={{ width: '100%' }}>
         <Tree 
            className="treeTile"            
            name="tree"
            checkable
            blockNode={false}
            defaultExpandAll
            onCheck={this.onCheck}
            defaultCheckedKeys={defaultCheckedKeys}
          >
            {this.renderTreeNodes(dataSource)}
          </Tree>
      </Card>
    );
  }
}

TreeTile.propTypes = {
  title: PropTypes.string,
  defaultCheckedKeys: PropTypes.array,
  dataSource: PropTypes.array.isRequired
};

TreeTile.defaultProps = {
  title: "请选择",
  defaultCheckedKeys: [],
  dataSource: []
};
