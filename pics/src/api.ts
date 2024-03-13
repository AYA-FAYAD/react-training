import axios from "axios";

const searchImage = async (term: any) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID BjRd5lhmPaNBUDRcMOwlLMIEx6CNZsDFnNWNL_QsYJM",
    },
    params: {
      query: term,
    },
  });

  // console.log(response);

  return response.data.results;
};

export default searchImage;
