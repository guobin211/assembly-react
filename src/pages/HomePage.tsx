import React, { CSSProperties } from 'react'
import Card from '../components/Card'
import NativeVideo from '../components/NativeVideo'

const VIDEO_PATH = '/database/video.mp4'

export interface HomePageProps {}

export interface HomePageState {}

export default class HomePage extends React.Component<HomePageProps, HomePageState> {

  Row: CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
  }

  render() {
    return (
      <div style={this.Row}>
        <Card>
          <NativeVideo src={VIDEO_PATH}/>
        </Card>
        <Card />
      </div>
    )
  }
}
