// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="nav">
      <div className="nav-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji"
        />
        <p>Emoji Game</p>
      </div>
      <div className="nav-item">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
