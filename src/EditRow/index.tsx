import React, {Fragment} from 'react';
import {Button} from 'antd';

interface Cprops {
  renderItem: (
    it: any,
    idx: number,
    callback: (data: any, json: any) => void
  ) => React.ReactNode;
  btnText?: {
    delete?: string;
    add?: string;
  };
  value?: any[];
  onChange?: any;
}

interface Cstate {
  ranges: any[];
}

function formatRanges(ranges: any) {
  if (ranges === undefined || !(ranges instanceof Array)) {
    return [];
  }
  return ranges;
}

export default class EditRow extends React.Component<Cprops, Cstate> {
  constructor(props: Cprops) {
    super(props);
    this.state = {
      ranges: formatRanges(props.value)
    };
  }

  static getDerivedStateFromProps(props: Cprops, state: Cstate) {
    return {
      ranges: formatRanges(props.value)
    };
  }

  handleSetRanges(newRanges: any[]) {
    this.props.onChange(newRanges);
    // this.setState({
    //   ranges: newRanges
    // });
  }

  handleChangeItem(index: number, data: any) {
    this.handleSetRanges(
      this.state.ranges.map((it: any, idx) => {
        return index === idx ? Object.assign({}, it, data) : it;
      })
    );
  }
  handleAddRange() {
    this.handleSetRanges(this.state.ranges.concat([{}]));
  }
  handleDelItem(index: number) {
    this.handleSetRanges(
      this.state.ranges.filter((it: any, idx: number) => {
        return index !== idx;
      })
    );
  }
  render() {
    const {btnText} = this.props;
    return (
      <div className='editrow-box'>
        {this.state.ranges.map((it: any, idx: number) => (
          <div className='editrow-item'>
            {this.props.renderItem(
              it,
              idx,
              this.handleChangeItem.bind(this, idx)
            )}
            <Button
              onClick={this.handleDelItem.bind(this, idx)}
              className='editrow-item-del'>
              {btnText?.delete || '删除'}
            </Button>
          </div>
        ))}
        <Button
          onClick={this.handleAddRange.bind(this)}
          className='editrow-item-add'>
          {btnText?.add || '添加'}
        </Button>
      </div>
    );
  }
}