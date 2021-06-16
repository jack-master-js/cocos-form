import queryString from "query-string";
// import store from "store";

export default (url: string, data?: any, method = "GET", headers = {}) => {
  let options: any = {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json",
      //   Authorization: store.get("access_token") || "",
      ...headers,
    },
  };

  if (data) {
    if (options.method === "GET") {
      url = `${url}?${queryString.stringify(data)}`;
    } else {
      options.body = JSON.stringify(data);
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(async (res) => {
        let json = await res.json();
        resolve(json);
      })
      .catch((e) => {
        reject(e.message);
      });
  });
};
