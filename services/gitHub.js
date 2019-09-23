
const axios = require('axios')

class GithubService {
  async getToken(oauthToken) {
    try {
      const response = await axios.post(`https://github.com/login/oauth/access_token?client_id=59e2eb0fba1f774b5c2e&client_secret=fadba40e98ae3bdf917c81032cc76fc2fb8f6b6e&code=${oauthToken}`);  
      console.log(response.data)
      return response.data;
    } catch (e) {
      return null;
    }
  }
}

module.exports = GithubService;
