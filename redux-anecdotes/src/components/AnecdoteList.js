import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { vote, sorted } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => sorted(state))
    return (
        <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
              </div>
            </div>
        )}
        </>
    )
}

export default AnecdoteList