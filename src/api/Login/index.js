import axios from 'axios'

const Login = (url, data) => axios.post(url, data)


export default Login