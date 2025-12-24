import axios from "axios";

class AssetsApi {
  async getAssets() {
    const res = await axios.get("https://bricks.rioblocks.io/api/assets/");
    return res.data.data;
  }
};

export default new AssetsApi;