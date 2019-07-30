class AuthService {

    constructor(auth0Service) {
        this.auth0Service = auth0Service;
    }

    async login(username, password) {
        const result = await this.auth0Service.login(username, password);

        if(result) {
            return {status: 200}
        }else {
            return {status: 401}
        }
    }
}

module.exports = AuthService;