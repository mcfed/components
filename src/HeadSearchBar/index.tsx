import * as React from 'react';
// import Row from 'antd/es/row';
// import Col from 'antd/es/col';
// import Button from 'antd/es/button';
import {FormProps} from 'antd/lib/form';
import {AdvancedForm} from '../TsBaseForm';
import {Row, Col, Button} from 'antd';

interface AdvancedFormProps extends FormProps {
  gutter?: number;
  filterSubmitHandler: (values: any) => void;
  defaultParams?: object;
  showSearchButton?: boolean;
  columns?: number;
  autoSubmitForm?: boolean;
}

export default class AdvancedSearchForm extends React.Component<
  AdvancedFormProps
> {
  form: any;
  static defaultProps = {
    gutter: 20,
    columns: 4,
    layout: 'horizontal',
    defaultParams: {},
    autoSubmitForm: true,
    filterSubmitHandler: (value: any) => {},
    showSearchButton: false
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
  renderSearchBar() {
    const {showSearchButton} = this.props;

    return (
      <div
        className='head-searchbar-toolbar'
        style={showSearchButton ? {} : {display: 'none'}}>
        //@ts-ignore
        <Button
          htmlType='submit'
          onClick={this.handleSearch.bind(this)}
          type='primary'>
          搜索
        </Button>
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
      return (
        <Col span={cols} key={idx}>
          {React.createElement(it.type, it.props, it.props.children)}
        </Col>
      );
    });
  }

  render() {
    const {gutter, layout, autoSubmitForm, filterSubmitHandler} = this.props;
    return (
      <div className='head-searchbar-panel'>
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
