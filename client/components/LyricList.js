import React, {Component} from 'react'

class LyricList extends Component {
  onLike(id) {
    
  }

  renderLyrics() {
    return this.props.lyrics.map(({id, content}) => {
      return (
        <li key={id} className='collection-item'>
          {content}
          <i onClick={() => this.onLike(id)} className='material-icons'>thumbs_up</i>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className='collection'>{this.renderLyrics()}</ul>
    )
  }
}

export default LyricList