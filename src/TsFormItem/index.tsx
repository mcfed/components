import * as React from 'react';
import fetch from 'cross-fetch';
import {stringify} from 'qs';
// import Form, {FormItemProps} from 'antd/es/form';
// import Select from 'antd/es/select';
import {FormItemProps} from 'antd/es/form';
import {GetFieldDecoratorOptions} from 'antd/es/form/Form';
import {Form, Select} from 'antd';

import {FormRefContext, LayoutRefContext} from '../TsBaseForm';
import {FetchUtils} from '@mcf/utils';

type fnOrBoolType = ((form: any) => boolean) | boolean | undefined;
type fetchParamsType = object | ((form: any) => object);
type fetchCallbackType = (result: any) => any[];

interface CustFormItemProps extends FormItemProps {
  name: string;
  children: React.ReactElement;
  disabled?: fnOrBoolType;
  renderable?: fnOrBoolType;
  formLayout?: object;
  formRef?: any;
  options?: any[];
  renderItem?: (it: any, idx: number) => React.ReactElement;
  fetch?: string;
  fetchParams?: fetchParamsType;
  fetchCallback?: fetchCallbackType;
  containerTo?: boolean;
  loopProp?: string;
}

type CustFormItemType = CustFormItemProps & GetFieldDecoratorOptions;

export class FormItem extends React.Component<CustFormItemType, any> {
  static defaultProps = {
    containerTo: true
  };
  constructor(props: CustFormItemType) {
    super(props);
    const options = props.options;
    this.state = {
      childData: []
    };

    //childData init
    if (options !== undefined) {
      if (options instanceof Array) {
        this.state = {
          childData: options
        };
      }
    }
  }
  componentDidMount() {
    if (this.props.fetch !== undefined) {
      this.fetchData(
        this.props.fetch,
        this.props.fetchParams,
        this.props.fetchCallback
      );
    }
  }
  componentWillReceiveProps(nextProps: CustFormItemProps) {
    const {options, fetch, fetchParams} = nextProps;
    if (!this.isObjectJSONSame(options, this.props.options)) {
      this.setChildData(options);
    }

    if (fetch !== undefined) {
      if (fetch !== this.props.fetch) {
        this.fetchData(fetch, nextProps.fetchParams, nextProps.fetchCallback);
      }

      if (fetchParams !== undefined) {
        if (
          typeof fetchParams === 'function' ||
          (typeof fetchParams === 'object' &&
            !this.isObjectJSONSame(fetchParams, this.props.fetchParams))
        ) {
          this.fetchData(fetch, fetchParams, nextProps.fetchCallback);
        }
      }
    }
  }
  isObjectJSONSame(obj1: any, obj2: any) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  fetchData(
    fetchUrl: string,
    fetchParams?: fetchParamsType,
    fetchCallback?: fetchCallbackType
  ) {
    const params = this.compileFetchParams(fetchParams);
    FetchUtils.fetchGet(fetchUrl, {body: params}).then((result: any) => {
      if (fetchCallback !== undefined) {
        this.setChildData(fetchCallback(result));
      } else {
        this.defaultSetChildData(result);
      }
    });
    // const defaultOptions = {
    //   method: 'GET'
    // };
    // let url = this.compileFetchUrl(fetchUrl, fetchParams);
    // fetch(url, defaultOptions)
    //   .then(data => data.json())
    //   .then(result => {
    //     if (fetchCallback !== undefined) {
    //       this.setChildData(fetchCallback(result));
    //     } else {
    //       this.defaultSetChildData(result);
    //     }
    //   });
  }
  compileFetchParams(fetchParams?: fetchParamsType) {
    const {formRef} = this.props;
    if (fetchParams === undefined) {
      return undefined;
    }
    if (typeof fetchParams === 'function') {
      return fetchParams(formRef);
    } else {
      return fetchParams;
    }
  }

  compileFetchUrl(fetchUrl: string, fetchParams?: fetchParamsType) {
    const {formRef} = this.props;
    let url = fetchUrl;
    if (fetchParams === undefined) {
      return url;
    }

    if (typeof fetchParams === 'function') {
      url = [fetchUrl, stringify(fetchParams(formRef))].join('?');
    } else {
      url = [fetchUrl, stringify(fetchParams)].join('?');
    }

    return url;
  }
  defaultSetChildData(result: any) {
    if (result.code == 0) {
      this.setChildData(result.data.items);
    }
  }
  setChildData(dataList?: any[]) {
    if (dataList === undefined) {
      return;
    }
    if (!(dataList instanceof Array)) {
      throw 'childData 格式有误';
    }
    this.setState({
      childData: dataList
    });
  }
  isPropsTrue(prop: fnOrBoolType) {
    const {formRef} = this.props;
    if (typeof prop === 'function') {
      return prop.call(this, formRef);
    }
    if (typeof prop === 'boolean') {
      return prop;
    }
    return true;
  }

  fieldDisabledProp(disabled: fnOrBoolType) {
    if (disabled === undefined) {
      return {};
    }
    return {disabled: this.isPropsTrue(disabled)};
  }

  fieldRenderableProp(renderable: fnOrBoolType) {
    if (renderable === undefined) {
      return true;
    }
    return this.isPropsTrue(renderable);
  }
  renderItem(it: any, idx: number) {
    return (
      <Select.Option key={idx} value={it.value}>
        {it.label}
      </Select.Option>
    );
  }
  renderTreeItem(it: any) {
    return '';
  }
  loopRenderTreeNode(
    data: any[],
    loopProp: string,
    renderItem: any
  ): React.ReactNode {
    const renderItemFinal =
      renderItem !== undefined ? renderItem : this.renderTreeItem;
    return data.map((item: any) => {
      if (item[loopProp] && item[loopProp].length > 0) {
        return React.cloneElement(
          renderItemFinal(item),
          {},
          this.loopRenderTreeNode(item[loopProp], loopProp, renderItem)
        );
      }
      return React.cloneElement(renderItemFinal(item));
    });
  }
  renderChildNode(childData: any[]) {
    const {renderItem, loopProp} = this.props;
    const _this = this;
    if (loopProp !== undefined) {
      return this.loopRenderTreeNode(childData, loopProp, renderItem);
    }
    return childData.map((it: any, idx: number) => {
      return renderItem !== undefined
        ? renderItem(it, idx)
        : _this.renderItem(it, idx);
    });
  }

  renderFields(element: React.ReactElement) {
    const _this = this;
    const {childData} = this.state;
    const {disabled, containerTo, label} = this.props;
    const {defaultValue, children, ...otherProps} = element.props;
    let containerToProps = {};
    if (
      containerTo &&
      //@ts-ignore
      element.type.name === 'Select' &&
      !element.props.changeCalendarContainer
    ) {
      containerToProps = {
        getPopupContainer: (triggerNode: any) => triggerNode.parentNode
      };
    }

    const elementProps = Object.assign(
      {},
      otherProps,
      containerToProps,
      this.fieldDisabledProp(disabled)
    );
    if (childData.length > 0) {
      return React.createElement(
        element.type,
        elementProps,
        _this.renderChildNode(childData)
      );
    }
    return React.createElement(element.type, elementProps, children);
  }

  compileWrapperCols() {
    let wrapperColsProps = {};
    const {label} = this.props;
    if (label === undefined) {
      wrapperColsProps = {
        wrapperCol: {
          span: 24
        }
      };
    }
    return wrapperColsProps;
  }

  render() {
    const {
      name,
      label,
      renderable,
      formRef,
      formLayout,
      children,
      ...otherProps
    } = this.props;
    const {getFieldDecorator} = formRef;
    const element = this.props.children;
    const {defaultValue} = element.props;
    const isFormContextComing = getFieldDecorator !== undefined;
    const wrapperColsProps = this.compileWrapperCols();
    return this.fieldRenderableProp(renderable) && isFormContextComing ? (
      <Form.Item
        label={label}
        {...Object.assign({}, formLayout, wrapperColsProps, otherProps)}>
        {getFieldDecorator(name, {
          ...otherProps,
          initialValue: defaultValue
        })(this.renderFields(element))}
      </Form.Item>
    ) : null;
  }
}

export default function FormItemRender(props: CustFormItemType) {
  return (
    <FormRefContext.Consumer>
      {formRef => (
        <LayoutRefContext.Consumer>
          {formLayout => (
            <FormItem {...props} formLayout={formLayout} formRef={formRef}>
              {props.children}
            </FormItem>
          )}
        </LayoutRefContext.Consumer>
      )}
    </FormRefContext.Consumer>
  );
}
