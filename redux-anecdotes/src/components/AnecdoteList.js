import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { vote, sorted } from "../reducers/anecdoteReducer"
import { notificationOnVote, notificationRemove } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => sorted(state.anecdotes))
    const handleClick = anecdote => {
      dispatch(vote(anecdote.id))
      dispatch(notificationOnVote(anecdote))
      setTimeout(() => dispatch(notificationRemove()), 5000)
    }
    return (
        <>
        {anecdotes.map(anecdote =>
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