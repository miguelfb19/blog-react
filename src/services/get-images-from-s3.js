import Global from "../components/Global";
import axios from "axios";

const url = Global.url;

export const getImagesFromDS3 = async (articleImg) => {
  const imgUrl = await axios.get(url + "get-image/" + articleImg);
  return imgUrl.data;
};
