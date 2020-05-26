import * as React from 'react';
import Row from 'antd/es/row';
import Button from 'antd/es/button';
import {CustomFormComponentProps, AdvancedForm} from '../BaseForm/indexTs';

interface AdvancedFormProps extends CustomFormComponentProps {
  gutter?: number;
  filterSubmitHandler: (values: any) => void;
  defaultParams?: object;
  layout?: 'horizontal' | 'inline' | 'vertical';
}

export default class AdvancedSearchForm extends React.Component<
  AdvancedFormProps
> {
  form: any;
  static defaultProps = {
    gutter: 20,
    layout: 'horizontal',
    defaultParams: {},
    filterSubmitHandler: (value: any) => {}
  };
  handleSearch(e: any, values?: any) {
    e.preventDefault();
    const {filterSubmitHandler, defaultParams} = this.props;
    if (values !== undefined) {
      filterSubmitHandler.call(this, Object.assign({}, defaultParams, values));
    } else {
      this.form.validateFieldsAndScroll((err, values) => {
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
    return (
      <div className='advanced-search-toolbar'>
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
    const {children} = this.props;
    return children;
  }
  render() {
    const {gutter, layout} = this.props;
    return (
      <div className='advanced-search-panel'>
        <AdvancedForm
          layout={layout}
          wrappedComponentRef={this.saveFormRef.bind(this)}>
          <Row gutter={gutter}>{this.renderFields()}</Row>
          {this.renderSearchBar()}
        </AdvancedForm>
      </div>
    );
  }
}
