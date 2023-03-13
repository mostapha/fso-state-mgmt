import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
import { setNotification } from './notificationReducer'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    addAnecdoteAction(state, action) {
      state.push(action.payload)
    },
    voteAnecdoteAction(state, action) {
      const { id, votes } = action.payload
      const anecdote = state.find(anecdote => anecdote.id === id)
      anecdote.votes = votes
    },
    initializeAnecdotesAction(state, action) {
      return action.payload
    }
  },
})

export const { addAnecdoteAction, voteAnecdoteAction, initializeAnecdotesAction } = anecdoteSlice.actions


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(initializeAnecdotesAction(anecdotes))
  }
}

export const addAnecdote = content => {
  return async dispatch => {
    const createdAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdoteAction(createdAnecdote))
    dispatch(setNotification('an anecdote is created: \'' + createdAnecdote.content + '\'', 10))
  }
}

export const voteAnecdote = id => {
  return async (dispatch, getState) => {
    const { anecdotes } = getState()
    const anecdoteToUpdate = anecdotes.find(anecdote => anecdote.id === id)
    const updated = await anecdoteService.update(id, {
      ...anecdoteToUpdate,
      votes: anecdoteToUpdate.votes + 1
    })
    dispatch(voteAnecdoteAction({
      id, votes: updated.votes
    }))
  }
}

export default anecdoteSlice.reducer