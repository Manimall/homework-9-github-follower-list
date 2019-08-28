export const getUserInfo = (apiKey, user) => {
  const response = fetch(
    `https://api.github.com/users/${user}?access_token=${apiKey}`
  );

  return response
    .then(response => response.json())
    .catch(error => Promise.reject(error));
};
