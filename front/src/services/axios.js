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
            withCredentials: false,
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
    register(log, pas){
        this.ax.get('sanctum/csrf-cookie')
            .then(res => {
                this.ax.post('api/register',
                    {name: 'HR0N', email: log, password: pas, password_confirmation: pas})
                    .then(res =>{
                        console.log(res);
                    })
            });
    }
    get_safety(token){
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
    get(link){
        return this.ax.get('sanctum/csrf-cookie')
            .then(res => {
                return this.ax.get(`api/${link}`)
                    .then(res =>{
                        // console.log(JSON.parse(res.data[0].categories));
                        // console.log(res);
                        return res;
                    })
            });
    }
    new_group(title, group, watch = 'empty', city = 'all'){
        this.ax.get('sanctum/csrf-cookie')
            .then(res => {
                this.ax.post('api/new_kabanchik_group',
                    {title: title, group: group, watch: watch, city: city})
                    .then(res =>{
                        console.log(res);
                    })
            });
    }
    update_group_watch(watch, id){
        if(watch.length<1){watch = 'empty'}
        this.ax.get('sanctum/csrf-cookie')
            .then(res => {
                this.ax.post('api/set_kabanchik_group_watched/'+id,
                    {watch: watch})
                    .then(res =>{
                        console.log(res);
                    })
            });
    }
    update_group_city(city, id){
        if(city.length<1){city = 'all'}
        this.ax.get('sanctum/csrf-cookie')
            .then(res => {
                this.ax.post('api/set_kabanchik_group_city/'+id,
                    {city: city})
                    .then(res =>{
                        console.log(res);
                    })
            });
    }
}
export default Connect;