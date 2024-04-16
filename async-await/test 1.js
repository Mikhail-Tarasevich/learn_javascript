function loadJson_old(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

async function loadJson(url) {
  return await (await fetch(url)).json()
}

let res2 = loadJson(`https://api.github.com/users/mike`)
  .catch(alert); 
res2.then(result=>console.log(result));