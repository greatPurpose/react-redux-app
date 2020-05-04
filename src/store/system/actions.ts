import {SystemState, UPDATE_SESSION, SystemActionTypes} from './types'

export function updateSession(newsession: SystemState): SystemActionTypes {
    return {
        type: UPDATE_SESSION,
        payload: newsession
    }
}