export const getFollowersInfo = (apiKey, user) => {
  const response = fetch(
    `https://api.github.com/users/${user}/followers?pages=1&per_page=100?access_token=${apiKey}`
  );

  return response
    .then(response => response.json())
    .catch(error => Promise.reject(error));
};
