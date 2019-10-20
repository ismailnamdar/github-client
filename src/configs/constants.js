export const LANGUAGE_KEYS = {
  EN: "en",
  TR: "tr"
};

export const GRAPHQL_API_BASE_URL = "https://api.github.com/graphql";

export const DEFAULT_OWNER = "reactjs";

const GITHUB_CLIENT_OWNER = "GITHUB_CLIENT_OWNER";
export const setOwner = (owner) => {
  localStorage.setItem(GITHUB_CLIENT_OWNER, owner);
};

export const getOwner = () => {
  return localStorage.getItem(GITHUB_CLIENT_OWNER) || DEFAULT_OWNER;
};
