import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/features/user/userSlice'
import { eventsApi } from '@/services/eventListService'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const store = configureStore({
  reducer: { user: userReducer, [eventsApi.reducerPath]: eventsApi.reducer },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(eventsApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
