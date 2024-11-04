export const fetchDataSpoty = async (endpoint, query) => {
  const url = `https://api-zenn.vercel.app/api/me/spotify/${endpoint}?${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
