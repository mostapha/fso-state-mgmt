import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getAnecdotes, updateAnecdote } from './services/requests'
import { useNotificationDispatch } from './NotificationContext'



const App = () => {
  const queryClient = useQueryClient()
  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })

  const dispatch = useNotificationDispatch()

  const handleVote = (anecdote) => {
    console.log('vote', anecdote)
    updateAnecdoteMutation.mutate({
      ...anecdote,
      votes: anecdote.votes + 1
    })

    dispatch({
      type: 'showNotification',
      payload: {
        value: 'you voted "'+anecdote.content+'"'
      }
    })
    setTimeout(() => {
      dispatch({ type: 'resetNotification' })
    }, 5000)
  }

  const result = useQuery(
    'anecdotes',
    getAnecdotes,
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  )
  console.log(result)

  if ( result.isError ) {
    return <div>anecdote service is not available due to problemes in the server</div>
  }

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }



  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification/>
      <AnecdoteForm />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
