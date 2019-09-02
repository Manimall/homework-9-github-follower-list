export const getUserInfo = (apiKey, user) => {
  const response = fetch(
    `https://api.github.com/users/${user}?access_token=${apiKey}`
  );

  return response
    .then(response => {
      if (response.status === 401) {
        throw new Error("Нет доступа или страница не найдена");
      }

      return response.json();
    })
    .catch(error => {
      console.log(error);
      return Promise.reject(error);
    });
};
