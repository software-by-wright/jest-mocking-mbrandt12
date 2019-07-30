const AuthService = require('./auth.service');
const Auth0Service = require('./auth0.service');

jest.mock('./auth0.service.js');






describe("Auth Service Tests", () => {

    let classUnderTest;
    let auth0Service;

    beforeEach(()=>{
        auth0Service = new Auth0Service;
        classUnderTest = new AuthService(auth0Service);
    });

    afterEach(()=> {
        jest.clearAllMocks();
    });
    it("Should login with correct credentials return 200", async () => {
        auth0Service.login.mockReturnValue(Promise.resolve(true));
        //below it doesn't matter what parameters you pass in. the test is based on what you're telling the mock service to do. Here we are testing what it does with true.
        const result = await classUnderTest.login('test@test.com', 'qwertyu1');
        expect(result).toEqual({status: 200});
        expect(auth0Service.login).toHaveBeenCalled();
        expect(auth0Service.login).toHaveBeenCalledWith('test@test.com', 'qwertyu1');
    });
    it("Should NOT login with invalid credentials- return 401", async () =>{
        auth0Service.login.mockReturnValue(Promise.resolve(false));
        const result = await classUnderTest.login('testtest.com', 'qwertyu1');
        expect(result).toEqual({status: 401});
    })

});