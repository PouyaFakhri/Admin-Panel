export const setToken = (token) => {
  const maxAge = 30 * 24 * 60 * 60
  document.cookie = `token=${token}; path =/; Max-Age=${maxAge}`;
};

export const getTokenFromClient = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((item) => item.startsWith("token="));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

export const getTokenFromServer = (req) => {
  return req.cookies?.token || null
};

export const deleteCookie = () => {
  document.cookie = `token=; path="/"; Max-Age=0`;
};
