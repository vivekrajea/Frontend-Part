import axios from "axios";

const DATAS_REST_API_URL = 'http://localhost:8080/data';

class DataService {
    getDatas(){
        return axios.get(DATAS_REST_API_URL);
    }
    createData(data){
        return axios.post(DATAS_REST_API_URL, data);
    }

    getDataById(id){
        return axios.get(DATAS_REST_API_URL + '/' + id);
    }

    updateData(data, id){
        return axios.put(DATAS_REST_API_URL + '/' + id, data);
    }

    deleteData(id){
        return axios.delete(DATAS_REST_API_URL + '/' + id);
    }
}

export default new DataService()