import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { vote, sorted } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => sorted(state.anecdotes))
    const filteredAnecdotes = anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    const handleClick = anecdote => {
      dispatch(vote(anecdote))
      dispatch(setNotification(`you voted for ${anecdote.content}`, 10))
    }
    return (
        <>
        {filteredAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => handleClick(anecdote)}>vote</button>
              </div>
            </div>
        )}
        </>
    )
}

export default AnecdoteList