import React, { CSSProperties } from 'react'

export interface NativeVideoProps {
  src: string;
}

export default class NativeVideo extends React.Component<NativeVideoProps, any> {

  flex: CSSProperties = {
    display: 'flex'
  }

  center: CSSProperties = {
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  render() {
    return (
      <div style={this.flex}>
        <video src={this.props.src} style={this.center} controls muted height="350px"/>
      </div>
    )
  }
}
