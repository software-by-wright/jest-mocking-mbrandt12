class Auth0Service {
    login(username, password) {
        return Promise.resolve(username === 'test@test.com' && password === 'qwertyu1');
    }
}

module.exports = Auth0Service;