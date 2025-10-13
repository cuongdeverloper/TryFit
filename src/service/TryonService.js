import axios from "./AxiosCustomize";

export const generateTryOn = async (personImage, clothImage) => {
  try {
    const formData = new FormData();
    formData.append("person_image", personImage);
    formData.append("cloth_image", clothImage);

    const response = await axios.post("tryon", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    });
    console.log(response)
    const imageUrl = URL.createObjectURL(response.data);
     console.log(imageUrl)
    return { image_url: imageUrl };
  } catch (err) {
    console.error("Try-on failed:", err);
    throw err;
  }
};
