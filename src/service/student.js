import { http } from "./config";

var config = { headers: {  
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'}
}

export default {

  loginStudent: (object) => {
    return http.post('student', object, config)
  }
}