import { useMutation, useQueryClient } from 'react-query'
import { useNotificationDispatch } from '../NotificationContext'
import { createAnecdote } from '../services/requests'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
      dispatch({
        type: 'showNotification',
        payload: {
          value: 'new anecdote is created'
        }
      })
      setTimeout(() => {
        dispatch({ type: 'resetNotification' })
      }, 5000)
    },
    onError: () => {
      dispatch({
        type: 'showNotification',
        payload: {
          value: 'there was an error creating the anecdote'
        }
      })
      setTimeout(() => {
        dispatch({ type: 'resetNotification' })
      }, 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')

    newAnecdoteMutation.mutate( {
      content,
      votes: 0
    })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
