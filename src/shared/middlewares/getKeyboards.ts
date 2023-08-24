import axios from "axios";

export const getKeyboards = async () => {
  let _data = await axios.get(`${import.meta.env.VITE_URL_MISO_BACK}`);

  return _data;
};
