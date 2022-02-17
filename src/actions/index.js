const INCREMENT_COUNT   = 'INCREMENT_COUNT'
const DECREMENT_COUNT   = 'DECREMENT_COUNT'
const TIMESTAMP         = 'TIMESTAMP'

// action creator
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

// redux-thunk action creator
const getTimestamp = () => {
    console.log(new Date().toLocaleTimeString())
    return async (dispatch, getState) => {
        const value = await sleep()
        dispatch(setTime(value));
    }
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() =>resolve(new Date().toLocaleTimeString()) , 5000)
    })
}

const setTime = (time = 0) => {
    return {
        type: TIMESTAMP,
        payload: time
    }
}

export { incrementCount, decrementCount, getTimestamp} ;