import axios from 'axios';

let baseUrl = '';
if(process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:4200';
}
class Api {
  saveFighterAction(data){
    return axios.post(`${baseUrl}/${data.type}`, {data: data.fields})
  }

  deleteFighterAction(data){
    return axios.delete(`${baseUrl}/${data.type}/${data.id}`)
  }

  saveCompletedAction(data){
    return axios.put(`${baseUrl}/${data.type}/${data.id}`, {data: data.fields})
  }

  getFightersList(){
    return axios.get(`${baseUrl}/fighters`)
  }

  createNewFighter(data){
    return axios.post(`${baseUrl}/fighters`, {data: data})
  }
}


export default new Api();
