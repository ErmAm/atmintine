import HTTP from "."

const fetchGpsTags = () => HTTP.get('/tags')

const addGpsTag = (newTag) =>HTTP.post("/tags",newTag)

export {fetchGpsTags,addGpsTag}