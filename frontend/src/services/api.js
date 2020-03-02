import axios from "axios";

class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  async getCars() {
    const result = await axios.get(this.baseURL + "/cars", {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return result.data;
  }
}

export { API };
