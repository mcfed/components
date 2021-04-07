import React from 'react';
import {Upload, Button, Icon} from 'antd';
import {UploadProps} from 'antd/lib/upload';
import LocaleReceiver from 'antd/lib/locale-provider/LocaleReceiver';
import Locale from './locale';

interface UploadFileProps extends UploadProps {
  value?: any;
  onChange?: any;
  uploadText?: string;
  mode?: 'single' | 'multiple';
}

type UploadState = {
  fileList: any[];
};

export default class UploadFile extends React.Component<
  UploadFileProps,
  UploadState
> {
  static defaultProps = {
    mode: 'single'
  };
  constructor(props: UploadFileProps) {
    super(props);
    this.state = {
      fileList: props.value ? [props.value] : []
    };
  }

  compileFileListValue() {
    const {mode, value} = this.props;
    const isSingle = mode == 'single';
    if (!value) {
      return [];
    }
  }

  componentWillReceiveProps(next: UploadFileProps) {
    let _this = this;
    const {listType = ''} = this.props;
    if (JSON.stringify(this.props.value) !== JSON.stringify(next.value)) {
      let file = next.value;
      if (file && file instanceof File && listType?.indexOf('picture') > -1) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
          file.thumbUrl = reader.result;

          _this.setState({
            fileList: file ? [file] : []
          });
        };
      } else {
        this.setState({
          fileList: file ? [file] : []
        });
      }
    }
  }
  beforeUpload(file: any, fileList: any[]) {
    this.props.onChange(file);
    return false;
  }
  onRemove() {
    this.props.onChange(undefined);
  }
  renderText(locale: any) {
    const {uploadText} = this.props;
    const contextLocale = Object.assign({}, locale, this.props.locale);

    return uploadText === undefined ? contextLocale.uploadText : uploadText;
  }
  render() {
    const {onChange, uploadText, mode, value, ...other} = this.props;
    return (
      <Upload
        {...other}
        fileList={this.state.fileList}
        beforeUpload={this.beforeUpload.bind(this)}
        onRemove={this.onRemove.bind(this)}>
        <Button>
          <Icon type='upload' />
          {React.createElement(
            LocaleReceiver,
            {
              componentName: 'UploadFile',
              defaultLocale: Locale,
              //@ts-ignore
              children: () => undefined //为通过类型检查
            },
            this.renderText.bind(this)
          )}
        </Button>
      </Upload>
    );
  }
}
