import { createStore } from 'redux';
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'

// action function
const incrementCount = () => {
    return {
        type: INCREMENT_COUNT,
        info: 'temp redux increment'
    }
}

const decrementCount = () => {
    return {
        type: DECREMENT_COUNT
    }
}

// reducer
const initState = {
    count: 0
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case INCREMENT_COUNT: return {
            // ...state, // To make copy of state
            count: state.count + 1
        }

        case DECREMENT_COUNT: return {
            count: state.count - 1
        }
        default:return state
    }
}

const store = createStore(reducer)
// store.subscribe(() => console.log('Updated state', store.getState())
// )

export { store, incrementCount, decrementCount} ;