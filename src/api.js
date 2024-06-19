import axios from "axios";

const baseUrl = "https://api.jikan.moe/v4";

export const getTopAnime = async () => {
  const anime = await axios.get(`${baseUrl}/top/anime?filter=bypopularity&page=1`);
  console.log(anime.data.data);
  return anime.data.data;
};

export const getTopReviews = () => {
  const topReviews = axios.get(`${baseUrl}/top/reviews?page=1`);
  return topReviews;
};

export const getRecommendations = (id) => {
  const recommendations = axios.get(`${baseUrl}/anime/${id}/recommendations`);
  return recommendations;
};
