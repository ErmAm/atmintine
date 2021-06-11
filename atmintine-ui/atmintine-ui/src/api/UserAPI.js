import HTTP from "."

const createUser = (newUser) => HTTP.post('/users', newUser)

export {createUser}