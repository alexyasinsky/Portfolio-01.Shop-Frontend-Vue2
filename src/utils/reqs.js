export let get = url => fetch(url).then(data => data.json());

export let getItem = url => fetch(url).then(data => {
  return data.json();
});

export let post = (url, item) => {
  return fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
  })
  .then(status => status.json());
}

export let put = (url, amount) => { //('/', -1)
  return fetch(url, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount })
  })
  .then(status => status.json());
}

export let del = (url) => {
  return fetch(url, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
  })
  .then(status => status.json());
}
