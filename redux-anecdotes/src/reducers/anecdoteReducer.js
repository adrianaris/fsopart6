const getId = () => (100000 * Math.random()).toFixed(0)

const anecdotesReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      console.log(changedAnecdote)
      return state.map(a => a.id !== id ? a : changedAnecdote)
    }
    case 'CREATE': {
      return state.concat(action.data)
    }
    default:
      return state
  }
}

export const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'CREATE',
    data: {
      content: content,
      votes: 0,
      id: getId()
    }
  }
}

export const sorted = (obj) => {
  return obj.sort((a, b) => (a.votes>b.votes) ? -1 : 1)
}

export default anecdotesReducer