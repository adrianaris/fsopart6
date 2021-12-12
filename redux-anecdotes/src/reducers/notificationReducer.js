const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'CREATE':
            return action.data.content
        case 'ON_VOTE':
            return action.data.content
        case 'REMOVE_NOTIFICATION': 
            return null
        default:
            return state 
    }   
}

export const notificationOnVote = anecdote => {
    return {
        type: 'ON_VOTE',
        data: {
            content: `voted for ${anecdote.content}`
        }
    }
}

export const notificationRemove = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer