export const getGifs = async (category) => {
  const apiKey = "MbX8fXoiZXWSyIc2JDwkscIszSu4w1E2";
  const limit = 6;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&rating=g&limit=${limit}&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  // console.log(gifs);
  return gifs;
};
