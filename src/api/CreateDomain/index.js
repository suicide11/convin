import axios from 'axios'
const CreateDomain = (url, data) => axios.post(url, data)
export default CreateDomain