import React,{PureComponent} from 'react'
import Panel from '../Panel'
import Tabs from 'antd/lib/tabs'

const TabPane = Tabs.TabPane;

export default class TabsPanel extends PureComponent{
  stringifyURL(str, options) {
    if (!str) {
      return str
    }
    return str.replace(/:(\w+)/gi, function (match, p1) {
      var replacement = options[p1]
      if (!replacement) {
        throw new Error('Could not find url parameter ' + p1 + ' in passed options object')
      }
      return replacement
    })
    return str
  }
  onChange(activeKey){
    const {history,match:{path,params}} = this.props
    history.push(this.stringifyURL(path,Object.assign({},params,{type:activeKey})))
  }
  renderModule(child){
    const {children,...otherProps} = this.props
    const childProps = child.props
    // console.log(childProps.children)
    return React.createElement(TabPane, {tab:childProps.title,key:childProps.path},
      typeof(childProps.children)==="function"?React.createElement(childProps.children,otherProps):React.cloneElement(childProps.children,otherProps)
    )
  }
  renderPanes(){
    const {children} = this.props
    return [].concat(children).map((child)=>this.renderModule(child))
  }

  render(){
    const {match:{params},defaultPath}= this.props
    return(
      <Panel >
        <Tabs activeKey={params.type || defaultPath} animated={false} onChange={this.onChange.bind(this)}>
          {this.renderPanes()}
        </Tabs>
      </Panel>
    )
  }
}
