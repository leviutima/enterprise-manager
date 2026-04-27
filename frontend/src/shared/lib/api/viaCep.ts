import axios from "axios";

export const viaCep = async (cep: string) => {
  try {
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return res.data;
  } catch (err: any) {
    console.log("erro ao buscar cep", err);
  }
};
