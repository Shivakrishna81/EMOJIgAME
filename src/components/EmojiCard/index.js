// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details} = props
  const {emojiName, emojiUrl} = details

  return (
    <div className="card">
      <img src={emojiUrl} alt={emojiName} className="emo-img" />
    </div>
  )
}

export default EmojiCard
