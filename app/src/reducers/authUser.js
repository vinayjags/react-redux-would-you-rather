import { SET_AUTH_USER } from "../actions/authUser"

export default function users(state = null, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return null
        default:
            return state
    }
}