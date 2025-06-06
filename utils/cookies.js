export const setToken = (token) => {
  document.cookie = `token=${token}; path = "/"; max-age={30 * 24 * 60 * 60}`;
};

export const getTokenFromClient = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((item) => item.startsWith("token="));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

export const getTokenFromServer = (cookieHeader = "") => {
  const cookie = cookieHeader.split("; ");
  const tokenCookie = cookie.find((item) => item.startsWith("token="));
  return tokenCookie ? tokenCookie.split("=")[1] : null
};

export const deleteCookie = () => {
  document.cookie = `token=; path="/"; max-age=0`;
};
