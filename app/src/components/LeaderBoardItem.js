import React from 'react'

const LeaderBoardItem = ({ user }) => {
  return (
    <div>
      <div className="user-name">
        <i className="fas fa-trophy" style={{ color: user.trophy }}></i>&nbsp;{user.name}
      </div>
      <div className="leaderboard-box">
        <div className="leaderboard-user-avatar">
          <img alt={user.id} src={`/images/avatars/${user.avatarURL}`} className="avatar" />
        </div>
        <div className="leaderboard-text">
          <div className="score-details">
            <div className="created-polls flex-body">
              <div className="bolder">Poll(s) created:</div>
              <div className="count">{user.questions.length}</div>
            </div>
            <div className="answered-polls flex-body">
              <div className="bolder">Poll(s) answered:</div>
              <div className="count">{Object.keys(user.answers).length}</div>
            </div>
          </div>
        </div>
        <div className="leaderboard-score">
          <h4>Score</h4>
          <div className="score">
            {user.total}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoardItem
