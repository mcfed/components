import * as React from 'react';
// import Row from 'antd/es/row';
// import Col from 'antd/es/col';
// import Button from 'antd/es/button';
import {FormProps} from 'antd/lib/form';
import {AdvancedForm} from '../BaseForm';
import ButtonGroups from '../ButtonGroups';
import LocaleReceiver from 'antd/lib/locale-provider/LocaleReceiver';
import Locale from './locale';
import {Row, Col} from 'antd';

const Button = ButtonGroups.CustomButton;

interface AdvancedFormProps extends FormProps {
  /**
   * 组件之前的间隔
   */
  gutter?: number;
  /**
   * 搜索按钮事件监听方法
   */
  filterSubmitHandler: (values: any) => void;
  /**
   * 设置发送请求时带的默认参数
   */
  defaultParams?: object;
  /**
   * 是否显示搜索按钮
   */
  showSearchButton?: boolean;
  /**
   * 设置一列中排列的组件个数
   */
  columns?: number;
  /**
   * 表单自动提交
   */
  autoSubmitForm?: boolean;
  /**
   * 传入国际化字段文案
   */
  locale?: object;
  /**
   * 传入自定义搜索按钮文本
   */
  customBtnText?: {
    searchBtnText?: string;
    collapseText?: string;
    openCollapseText?: string;
    resetBtnText?: string;
  };
  /**
   * 搜索项过多是否需要收起展开功能
   */
  needCollapse?: boolean;
}

interface AdvancedFormState {
  isCollapse: boolean;
}

export default class AdvancedSearchForm extends React.Component<
  AdvancedFormProps,
  AdvancedFormState
> {
  form: any;
  state = {
    isCollapse: true
  };
  static defaultProps = {
    gutter: 20,
    columns: 4,
    layout: 'horizontal',
    defaultParams: {},
    autoSubmitForm: true,
    filterSubmitHandler: (value: any) => {},
    showSearchButton: false,
    needCollapse: false
  };
  handleSearch(e: any, values?: any) {
    e.preventDefault();
    const {filterSubmitHandler, defaultParams} = this.props;
    if (values !== undefined) {
      filterSubmitHandler.call(this, Object.assign({}, defaultParams, values));
    } else {
      this.form.validateFieldsAndScroll((err: any, values: object) => {
        filterSubmitHandler.call(
          this,
          Object.assign({}, defaultParams, values)
        );
      });
    }
  }
  saveFormRef(instance: any) {
    if (instance) {
      this.form = instance.props.form;
    }
  }
  handleResetForm() {
    this.form.resetFields();
  }
  handleCollapse() {
    this.setState({
      isCollapse: !this.state.isCollapse
    });
  }
  renderButton(locale: any) {
    const {customBtnText, needCollapse} = this.props;
    const contextLocale = Object.assign({}, locale, this.props.locale);
    const collapseText =
      customBtnText?.collapseText == undefined
        ? contextLocale.collapseText
        : customBtnText?.collapseText;
    const openCollapseText =
      customBtnText?.openCollapseText == undefined
        ? contextLocale.openCollapseText
        : customBtnText?.openCollapseText;

    return [
      <Button
        htmlType='reset'
        actionkey='aaa'
        onClick={this.handleResetForm.bind(this)}
        type='default'>
        {customBtnText?.resetBtnText == undefined
          ? contextLocale.resetBtnText
          : customBtnText?.resetBtnText}
      </Button>,
      <Button
        htmlType='submit'
        actionkey='bbb'
        onClick={this.handleSearch.bind(this)}
        type='primary'>
        {customBtnText?.searchBtnText == undefined
          ? contextLocale.searchText
          : customBtnText?.searchBtnText}
      </Button>,
      needCollapse ? (
        <Button
          actionkey='ccc'
          onClick={this.handleCollapse.bind(this)}
          type='link'>
          {this.state.isCollapse ? collapseText : openCollapseText}
        </Button>
      ) : null
    ];
  }
  renderSearchBar() {
    const {showSearchButton} = this.props;

    return (
      <div
        className='head-searchbar-toolbar'
        style={showSearchButton ? {} : {display: 'none'}}>
        {React.createElement(
          LocaleReceiver,
          {
            componentName: 'HeadSearchBar',
            defaultLocale: Locale,
            //@ts-ignore
            children: () => undefined //为通过类型检查
          },
          this.renderButton.bind(this)
        )}
      </div>
    );
  }
  renderFields() {
    const {children, columns} = this.props;
    let cols = 6;
    if (columns !== undefined) {
      cols = 24 / columns;
    }
    return React.Children.toArray(children).map((it: any, idx: number) => {
      //搜索项若需要设置多倍宽度 columns 为设置倍数
      const {columns} = it.props;
      const spanCol = Number(columns) ? cols * Number(columns) : cols;
      return (
        <Col span={spanCol} key={idx}>
          {React.createElement(it.type, it.props, it.props.children)}
        </Col>
      );
    });
  }

  render() {
    const {
      gutter,
      layout,
      autoSubmitForm,
      needCollapse,
      filterSubmitHandler,
      className = ''
    } = this.props;
    return (
      <div
        className={`${className} head-searchbar-panel ${
          needCollapse && this.state.isCollapse
            ? 'head-searchbar-collapsed'
            : 'head-searchbar-not-collapse'
        }`}>
        <AdvancedForm
          layout={layout}
          autoSubmitForm={autoSubmitForm}
          onSearch={filterSubmitHandler}
          wrappedComponentRef={this.saveFormRef.bind(this)}>
          <Row className='head-searchbar-fieldsbox' gutter={gutter}>
            {this.renderFields()}
          </Row>
          {this.renderSearchBar()}
        </AdvancedForm>
      </div>
    );
  }
}
