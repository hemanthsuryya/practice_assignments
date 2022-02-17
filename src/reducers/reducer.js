const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'
const TIMESTAMP         = 'TIMESTAMP'

const initState = {
    count: 0,
    timestamp: 'wait 5 secs'
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case INCREMENT_COUNT: return {
            ...state, // To make copy of state
            count: state.count + 1
        }

        case DECREMENT_COUNT: return {
            ...state,
            count: state.count - 1
        }

        case TIMESTAMP: return {
            ...state,
            timestamp: action.payload
        }
         
        default:return state
    }
}

export { reducer };