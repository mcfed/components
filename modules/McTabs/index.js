import React from "react";
import { Tabs } from "antd";
import PropTypes from "prop-types";
const { TabPane } = Tabs;

export default class McTabs extends React.Component {
  constructor(props) {
    super();
    this.myRef = [];
    this.state = {
      activeTabIndex: props.defaultActiveKey || ""
    };
  }
  componentWillMount() {
    this.setActiveKey();
  }
  setActiveKey() {
    // 如果设置的defaultActiveKey状态为disabled或者没设置defaultActiveKey，则展示第一个非disabled的tab.
    const { tabsData } = this.props;
    const { activeTabIndex } = this.state;
    let currentTab = tabsData.filter(item => item.name === activeTabIndex);
    let currentStatus = currentTab[0] && currentTab[0].disabled;
    let key = activeTabIndex;
    let firstActiveKey = tabsData.filter(item => !item.disabled)[0].name;
    if (activeTabIndex) {
      if (currentStatus) {
        key = firstActiveKey;
      }
    } else {
      key = firstActiveKey;
    }

    this.setState({
      activeTabIndex: key
    });
  }
  onChange = key => {
    this.setState({
      activeTabIndex: key
    });
    this.props.onChange && this.props.onChange(key);
  };
  handleSubmit() {
    let errors = [];
    let values = {};
    this.myRef.forEach(obj => {
      let item = obj.ref;
      let form = item.current && item.current.form;
      form &&
        !obj.disabled &&
        form.validateFieldsAndScroll(
          {
            force: true
          },
          (error, value) => {
            if (error) {
              errors.push({
                tab: item.current.form.props.name,
                error: error
              });
            } else {
              Object.assign(values, { [item.current.form.props.name]: value });
            }
          }
        );
    });
    if (errors.length > 0) {
      this.setState({
        activeTabIndex: errors[0] && errors[0].tab
      });
      return;
    }
    this.props.handleSubmit && this.props.handleSubmit(values);
  }
  getTabPane(item, others) {
    let ref = React.createRef();
    const { text, name, disabled, component } = item;
    this.myRef.push({ ref: ref, disabled: disabled });
    return (
      <TabPane tab={text} key={name} forceRender disabled={disabled}>
        {!disabled && React.createElement(component, { ...others, ref: ref })}
      </TabPane>
    );
  }

  render() {
    const { onChange, tabsData, ...others } = this.props;
    const { activeTabIndex } = this.state;
    return (
      <Tabs name="tab" activeKey={activeTabIndex} onChange={this.onChange}>
        {tabsData.map(item => this.getTabPane(item, others))}
      </Tabs>
    );
  }
}

McTabs.propTypes = {
  /**
  默认选中tab 配置
  **/
  defaultActiveKey: PropTypes.string,
  /**
  tab切换方法 配置
  **/
  onChange: PropTypes.func,
  /**
  tab数据 配置
  **/
  tabsData: PropTypes.array,
  /**
  校验通过方法 配置
  **/
  handleSubmit: PropTypes.func,
  /**
  ref指向 配置， 需要初始化 myRef = React.createRef()
  **/
  ref: PropTypes.Object
};
