import request from "../utils/fetcher";

const host = (<any>window)._config?.api_host || "";

export const fetchData = (data?: any) => {
  return request(`${host}/anything`, data);
};
