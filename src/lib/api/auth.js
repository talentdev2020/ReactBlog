export const login = ({ username, useremail }) => {
  return { username, useremail };
};

export const check = (user) => {
  return user;
};

export const logout = () => {
  return false;
};
