export const SET_AUTH_USER = "SET_AUTH_USER"

export function setAuthUser(Id) {
    return {
        type: SET_AUTH_USER,
        Id
    }
}