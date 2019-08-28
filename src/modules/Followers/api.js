export const getFollowersInfo = (apiKey, user) => {
  const response = fetch(
    `https://api.github.com/users/${user}/followers?pages=1&per_page=100?access_token=${apiKey}`
  );

  return response
    .then(response => {
      if (response.status === 401) {
        throw new Error("Нет доступа или страница не найдена");
      }

      return response.json();
    })
    // .then(response => response.json())
    .catch(error => {
      console.log(error);
      return Promise.reject(error);
    });
};
