export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
          // return { friends: state.friends + 1 };
          return {...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
          // return { friends: state.friends - 1 };
          const newFriends = state.friends.filter(friend => friend.id !== action.id)
          return {...state, friends: newFriends}
        default:
          return state;
    }
}
