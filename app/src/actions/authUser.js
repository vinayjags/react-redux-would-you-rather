export const SET_AUTH_USER = "SET_AUTH_USER"

export function setAuthUser(authedUser) {
    return {
        type: SET_AUTH_USER,
        authedUser
    }
}