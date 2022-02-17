import rootReducers from './reducers/'
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
const store = createStore(rootReducers, applyMiddleware(ReduxThunk))
// store.subscribe(() => 
//     console.log('Updated state', store.getState())
// )

export { store };