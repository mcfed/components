import * as React from 'react';
// import Row from 'antd/es/row';
// import Col from 'antd/es/col';
// import Button from 'antd/es/button';
import {FormProps} from 'antd/lib/form';
import {AdvancedForm} from '../BaseForm';
import ButtonGroups from '../ButtonGroups';
import LocaleReceiver from 'antd/lib/locale-provider/LocaleReceiver';
import classNames from 'classnames';
import Locale from './locale';
import {Row, Col} from 'antd';

const Button = ButtonGroups.CustomButton;

type fnOrBoolType = ((form: any) => boolean) | boolean | undefined;
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
  /**
   * 默认是否展开 如果不传  默认为true
   */
  defaultCollapse?: boolean;
  /**
   * 重置按钮事件监听方法
   */
  filterResetHandler: () => void;
}

interface AdvancedFormState {
  isCollapse: boolean;
}

export default class AdvancedSearchForm extends React.Component<
  AdvancedFormProps,
  AdvancedFormState
> {
  form: any;
  static defaultProps = {
    gutter: 20,
    columns: 4,
    layout: 'horizontal',
    defaultParams: {},
    autoSubmitForm: true,
    filterSubmitHandler: (value: any) => {},
    filterResetHandler: () => {},
    showSearchButton: false,
    needCollapse: false,
    defaultCollapse: false
  };
  constructor(props: AdvancedFormProps) {
    super(props);
    if (props.defaultCollapse !== undefined) {
      this.state = {
        isCollapse: props.defaultCollapse
      };
    }
  }
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
  handleResetForm(e: any) {
    e.preventDefault();
    const {filterResetHandler} = this.props;
    if (filterResetHandler) {
      filterResetHandler.call(this);
      this.form.resetFields();
    } else {
      this.form.resetFields();
    }
  }
  handleCollapse() {
    this.setState({
      isCollapse: !this.state.isCollapse
    });
  }
  renderButton(locale: any) {
    const {showSearchButton, customBtnText, needCollapse} = this.props;
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
      showSearchButton ? (
        <React.Fragment>
          <Button
            actionkey='aaa'
            onClick={this.handleResetForm.bind(this)}
            type='default'>
            {customBtnText?.resetBtnText == undefined
              ? contextLocale.resetBtnText
              : customBtnText?.resetBtnText}
          </Button>
          <Button
            htmlType='submit'
            actionkey='bbb'
            onClick={this.handleSearch.bind(this)}
            type='primary'>
            {customBtnText?.searchBtnText == undefined
              ? contextLocale.searchText
              : customBtnText?.searchBtnText}
          </Button>
        </React.Fragment>
      ) : null,
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
    return (
      <div className='head-searchbar-toolbar'>
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
  isPropsTrue(prop: fnOrBoolType) {
    if (typeof prop === 'function') {
      return prop.call(this, this.form);
    }
    if (typeof prop === 'boolean') {
      return prop;
    }
    return true;
  }
  renderFields() {
    const {children, columns} = this.props;
    const {isCollapse} = this.state;
    let cols = 6;
    let len = React.Children.toArray(children).length;
    if (columns !== undefined) {
      cols = 24 / columns;
      isCollapse && (len = columns);
    }
    return (
      React.Children.toArray(children)
        // 过滤 renderable 为 false 的 FormItem
        ?.filter((item: any) => this.isPropsTrue(item?.props?.renderable))
        ?.slice(0, len)
        ?.map((it: any, idx: number) => {
          //搜索项若需要设置多倍宽度 columns 为设置倍数
          const {columns} = it.props;
          const spanCol = Number(columns) ? cols * Number(columns) : cols;
          return (
            <Col span={spanCol} key={idx}>
              {React.createElement(it.type, it.props, it.props.children)}
            </Col>
          );
        })
    );
  }

  formatClassName() {
    const {className, needCollapse, showSearchButton} = this.props;

    return classNames(
      className,
      'head-searchbar-panel',
      {'head-searchbar-show-button': showSearchButton},
      {'head-searchbar-collapsed': needCollapse && this.state.isCollapse},
      {'head-searchbar-not-collapse': needCollapse && !this.state.isCollapse}
    );
  }

  render() {
    const {gutter, layout, autoSubmitForm, filterSubmitHandler} = this.props;
    return (
      <div className={this.formatClassName()}>
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
