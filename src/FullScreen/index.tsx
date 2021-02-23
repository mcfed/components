import React, {Component} from 'react';
import fscreen from 'fscreen';
import {any} from 'prop-types';

interface IFullScreenProps {
  children: any;
  fullscreen: boolean;
  onChange?: Function;
  className?: string;
}

export default class FullScreen extends Component<IFullScreenProps> {
  element: any;
  constructor(props: IFullScreenProps) {
    super(props);

    this.element = React.createRef();
  }

  componentWillReceiveProps(nextProps: IFullScreenProps) {
    if (this.props.fullscreen !== nextProps.fullscreen) {
      // const { fullscreen } = nextProps;
      this.toggleFullscreen(nextProps.fullscreen);
    }
  }

  componentDidMount() {
    fscreen.addEventListener(
      'fullscreenchange',
      () => {
        if (!fscreen.fullscreenElement) {
          this.handlerExitFull();
        }
      },
      false
    );
  }

  handlerExitFull = () => {
    const {onChange} = this.props;
    onChange && onChange(fscreen.fullscreenElement);
  };

  toggleFullscreen(isFull: boolean) {
    if (isFull) {
      fscreen.requestFullscreen(this.element);
    } else {
      if (fscreen.fullscreenElement) {
        fscreen.exitFullscreen();
      }
    }
  }

  render() {
    const {className, children} = this.props;

    return (
      <div
        className={className}
        ref={elm => {
          this.element = elm;
        }}>
        {children}
      </div>
    );
  }
}
