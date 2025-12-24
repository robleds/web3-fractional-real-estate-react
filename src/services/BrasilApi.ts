import axios from "axios";

class BrasilApi {
  async getCEPInfo(cep: string) {
    const formattedCEP = cep.replace(/[-_]/g, "");

    if(formattedCEP.length === 8) {
      const res = await axios.get(`https://brasilapi.com.br/api/cep/v1/${formattedCEP}`);
      return res.data;
    }

    return false;
  }
};

export default new BrasilApi;