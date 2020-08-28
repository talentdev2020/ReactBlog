export const writePost = ({ title, body }) => ({ title, body });

export const listPosts = ({ page, username, replies }) => {
  return { page, username, replies };
};
