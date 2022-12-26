import axios from "axios";

export const baseUrl = 'https://api.themoviedb.org/3/movie/550?api_key=d8e4774e3a32c70b57548a8243ab6f55';

export const fetchApi = async (url) => {
  const options = {
      method: 'GET',
      url: baseUrl,
    };
  const { data } = await axios.get((url), options);
  
return data;
}