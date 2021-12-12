import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { vote, sorted } from "../reducers/anecdoteReducer"
import { notificationOnVote, notificationRemove } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => sorted(state.anecdotes))
    const filteredAnecdotes = anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    const handleClick = anecdote => {
      dispatch(vote(anecdote))
      dispatch(notificationOnVote(anecdote))
      setTimeout(() => dispatch(notificationRemove()), 5000)
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