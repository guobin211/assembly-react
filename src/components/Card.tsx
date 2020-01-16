import React from 'react'
import './card.css'

export default class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="card-warp">{this.props.children}</div>
      </div>
    )
  }
}
