import React from 'react'
import { connect } from 'react-redux'
import { fetchFriends, deleteFriend } from '../actions/'
import Friend from '../components/Friend'

class FriendsList extends React.Component {
  componentDidMount () {
    this.props.fetchFriends()
  }
  render () {
    return (
      <div className='App'>
        {this.props.api.fetching ? (
          <div>Loading ....</div>
        ) : (
          <div>
            {this.props.friends.map((friend) => {
              return (
                <Friend
                  key={friend.id}
                  friend={friend}
                  deleteFriend={deleteFriend}
                />
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('in map state', state)
  return {
    friends: state.friends,
    api: state.api
  }
}
export default connect(mapStateToProps, { fetchFriends, deleteFriend })(
  FriendsList
)
