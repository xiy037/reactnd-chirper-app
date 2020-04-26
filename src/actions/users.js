export const RECEIVE_USERS = "RECEIVE_USERS";

export const getUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})