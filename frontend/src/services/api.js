import axios from "axios";

class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  async getObjects() {
    const result = await axios.get(this.baseURL + "/objects", {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return result.data;
  }
}

export {
  API
};