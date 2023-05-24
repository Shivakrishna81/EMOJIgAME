/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle 
the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore} = this.state
    const getShuffle = this.shuffledEmojisList()

    return (
      <div className="container">
        <NavBar score={score} topScore={topScore} />
        <ul className="unorder">
          {getShuffle.map(each => (
            <EmojiCard details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
