import axios from 'axios';
let userServices = {
    loginPost(username, password){
        return new Promise((resolve, reject)=>{
            axios.post('http://localhost:5000/login', {
                username: username,
                password: password
            })
            .then(response =>{
                resolve(response.data);
            })
            .catch(error =>{
                reject(error);
            })
        })
    }
}

export default userServices;