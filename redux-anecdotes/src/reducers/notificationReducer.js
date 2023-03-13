import { createSlice } from '@reduxjs/toolkit'


const initialState = ''
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationAction(state, action) {
      return action.payload
    },
    removeNotificationAction() {
      return ''
    }
  },
})

const { setNotificationAction, removeNotificationAction } = notificationSlice.actions

export const setNotification = (notification, duration_in_seconds) => {
  return async dispatch => {
    dispatch(setNotificationAction(notification))
    setTimeout(() => {
      dispatch(removeNotificationAction())
    }, duration_in_seconds * 1000)
  }
}


export default notificationSlice.reducer