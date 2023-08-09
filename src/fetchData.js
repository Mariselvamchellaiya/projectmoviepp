export const fetchtrendingmovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=07da2eaeeb1b1cb5154bcf3f5259bc8d`
    );
    const data = await response.json();

    return data;
  } catch (e) {
    throw new Error(`API error:${e?.message}`);
  }
};
