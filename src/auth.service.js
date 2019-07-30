class AuthService {

    constructor(auth0Service) {
        this.auth0Service = auth0Service;
    }

    async login(username, password) {
        return await this.auth0Service.login(username, password);
    }
}

module.exports = AuthService;