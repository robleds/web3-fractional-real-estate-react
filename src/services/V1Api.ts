import axios from "axios";
import { InitialLogin } from "../components/auth/types";
import jwt from "jsonwebtoken";
import { getToken } from "../helpers/getToken";
import { createConfig } from "../helpers/createConfig";

class V1Api {
  async getAssetImages(recordId: string) {
    const res = await axios.get(`https://bricks.rioblocks.io/v1/public/getAssetImages/${recordId}`);
    return res.data;
  };

  async login(fields: InitialLogin) {
    const res = await axios.post('https://bricks.rioblocks.io/v1/login', fields);
    const token = res.data.token;
    return token;
  }

  async recoverPassword(email: string) {
    const res = await axios.post("https://bricks.rioblocks.io/v1/requestPasswordReset", { email });
    return res.data;
  }

  async resetPassword(token: string, new_password: string) {
    const res = await axios.post("https://bricks.rioblocks.io/v1/resetPassword", { token, new_password });
    return res.data;
  }

  async updatePassword(old_password: string, new_password: string) {
    const token = getToken();
    const config = createConfig(token);
    const res = await axios.post("https://bricks.rioblocks.io/v1/updatePassword", { old_password, new_password }, config);
    return res.data;
  }

  async startSMSValidation(phone: string) {
    const token = getToken();
    const config = createConfig(token);
    const res = await axios.post("https://bricks.rioblocks.io/v1/startSMSValidation", { phone }, config);
    return res.data;
  }

  async submitSMSValidation(code: string) {
    const token = getToken();
    const config = createConfig(token);
    const res = await axios.post("https://bricks.rioblocks.io/v1/startSMSValidation", { code }, config);
    return res.data;
  }

  async getUserData(token: string = getToken()) {
    const config = createConfig(token);
    const res = await axios.get("https://bricks.rioblocks.io/v1/getUserData", config);
    return res.data;
  }

  async getUserDocs() {
    const token = getToken();
    const config = createConfig(token);
    const res = await axios.get("https://bricks.rioblocks.io/v1/getDocuments", config);
    return res.data;
  }

  async submitUserData(data: any) {
    const token = getToken();
    const config = createConfig(token);
    const res = await axios.post("https://bricks.rioblocks.io/v1/submitUserData", data, config);
    return res.data;
  }

  async uploadDocument(data: any, category: string) {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        type: 2,
        'private-document': true,
        category: `${category}:0`,
        unique: true
      }
    } as any;

    const res = await axios.post('https://bricks.rioblocks.io/v1/uploadDocument', data, config);
    return res.data;
  }

  async submitDocs(bankRefs: any) {
    const {bank, type, agency, account} = bankRefs;
    const token = getToken();
    const config = createConfig(token);
    const data = {
      docs: {
        photoId: [],
        proofOfResidence: [],
        maritalStatus: []
      },
      bankRefs: {
        bank,
        branch: agency,
        account,
        joint: "individual",
        otherOwner: "",
        type
      }
    }

    const res = await axios.post('https://bricks.rioblocks.io/v1/submitDocs', data, config);
    return res.data;
  }
};

export default new V1Api;