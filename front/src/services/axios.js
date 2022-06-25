class Connect {
    constructor() {
        this.token = null;
        this.axios = require('axios');
        this.devUrl = "http://127.0.0.1:8000/";
        this.prodUrl = "https://fuck-you-back.anakim.space/";
    }
    ax = this.axios.create({
        baseURL: this.prodUrl,
        timeout: 5000,
        headers: {
            'X-Requested-Width': 'XMLHttpRequest',
        },
        withCredentials: true,
    });
    login(log, pas){
        this.ax.get('sanctum/csrf-cookie')
            .then(res => {
                this.ax.post('api/login', {email: log, password: pas})
                    .then(res =>{
                        console.log(res);
                    })
            });
    }
}
export default Connect;