import axios from "axios";

class Connect {
    constructor() {
        this.axios = axios;
        this.devUrl = "http://127.0.0.1:8000/";
        this.prodUrl = "https://kabanb.evilcode.space/";

        this.ax = this.axios.create({
            baseURL: this.prodUrl,
            timeout: 5000,
            headers: {
                'X-Requested-Width': 'XMLHttpRequest',
            },
            withCredentials: true,
        });
    }
    login(log, pas, cb = ()=>{}, cb2 = ()=>{}){
        this.ax.get('sanctum/csrf-cookie')
            .then(res => {
                this.ax.post('api/login', {email: log, password: pas})
                    .then(res =>{
                        console.log(res);
                        cb(res.data.user);
                        cb2(res.data.token);
                    })
            });
    }
    get(token){
        this.ax.get('sanctum/csrf-cookie')
            .then(res => {
                this.ax.get('api/get'
                    , {
                    headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer '+token
                        },})
                    .then(res =>{
                        console.log(res);
                    })
            });
    }
    get2(){
        this.ax.get('sanctum/csrf-cookie')
            .then(res => {
                this.ax.post('api/get2')
                    .then(res =>{
                        console.log(res);
                    })
            });
    }
}
export default Connect;