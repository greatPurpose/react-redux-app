import {Action} from 'redux'
import {sendMessage} from './store/chat/actions'
import {RootState} from './store'
import {ThunkAction} from 'redux-thunk'

export const thunkSendMessage = (message: string) : ThunkAction<void, RootState, unknown, Action<string>> => async dispatch=>{
    const asyncResp = await exampleAPI()
    dispatch(
        sendMessage({
            message,
            user: asyncResp,
            timestamp: new Date().getTime()
        })
    )
}

function exampleAPI() {
    return Promise.resolve('Async Chat Bot')
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState, unknown, Action<string>>