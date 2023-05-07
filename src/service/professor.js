import { http } from "./config";

var config = { headers: {  
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'}
}

export default {

  loginProfessor: (object) => {
    return http.post('professor', object, config)
  }
}