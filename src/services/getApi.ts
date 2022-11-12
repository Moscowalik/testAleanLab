async function fetchData() {
  return fetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error("No Data"));
  });
}

const api = {
  fetchData,
};

export default api;
