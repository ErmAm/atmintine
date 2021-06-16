import HTTP from "."

const fetchGpsTags = () => HTTP.get('/tags')

const fetchGPSTagById = (id) => HTTP.get("/tags/" + id)

const addGpsTag = (newTag) => HTTP.post("/tags",newTag)

const updateGpsTag = (updatedGpsTag) => HTTP.put("/tags", updatedGpsTag)

const deleteGpsTag = (id) => HTTP.delete("/tags/" + id)

export {fetchGpsTags,fetchGPSTagById,addGpsTag,deleteGpsTag,updateGpsTag}