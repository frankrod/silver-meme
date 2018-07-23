function parseJSON(response) {
  return new Promise((resolve) =>
    response.json().then((json) =>
      resolve({
        status: response.status,
        ok: response.ok,
        json
      })
    )
  );
}

export const apiURL = 'http://localhost:8000';

export function request(url: string, options?: Object) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(parseJSON)
      .then((response) => {
        if (response.ok) {
          return resolve(response.json);
        }
        return reject(response);
      })
  });
}
