import { Dispatch, SetStateAction } from "react";
import V1Api from "../../services/V1Api";

export const getImages = async (recordId: string, setImages: Dispatch<SetStateAction<Array<string>>>) => {
  try {
    const img = await V1Api.getAssetImages(recordId);
    setImages(img);
  } catch (err) {
    return;
  }
};
