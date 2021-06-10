import HTTP from "."

const fetchGpsTags = () => HTTP.get('/tags')

export {fetchGpsTags}