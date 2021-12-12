import React from "react"
import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { notificationRemove } from "../reducers/notificationReducer"
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    anecdotesService.addNew(content)
    dispatch(createAnecdote(content)) 
    setTimeout(() => dispatch(notificationRemove()), 5000)
  }


    return (
        <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
        </>
    )
}

export default AnecdoteForm