const developement = true;
export const API_ENDPOINT = developement
  ? process.env.REACT_APP_API_DEVELOPEMENT
  : process.env.REACT_APP_API_PRODUCTION;
