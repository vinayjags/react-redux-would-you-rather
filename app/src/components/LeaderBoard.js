import React from 'react'
import { connect } from 'react-redux'
import LearderBoardItem from './LeaderBoardItem'

const LearderBoard = ({ leaderBoard }) => {
  return (
    <div>
      <ul className="leadboard-list">
        {leaderBoard.map((user) => (
          <li key={user.id}>
            <LearderBoardItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps ({ users }) {
  const leaderBoard = users.length === 0 ? [] : Object.keys(users).sort((a, b) => {
    return (Object.keys(users[b].answers).length + users[b].questions.length) -
            (Object.keys(users[a].answers).length + users[a].questions.length)
  }).map((Id, index) => {
    return {
      ...users[Id],
      trophy: index === 0 ? 'gold' : (index === 1 ? 'silver' : '#cd7f32'),
      total: Object.keys(users[Id].answers).length + users[Id].questions.length
    }
  })

  return {
    leaderBoard
  }
}

export default connect(mapStateToProps)(LearderBoard)
