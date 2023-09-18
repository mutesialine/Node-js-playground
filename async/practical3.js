const performFastAsync = (url, ms) => {
  const controller = new AbortController();
  const { signal } = controller;

  const data = fetch(url)
  .then((response) => {
    return response.json();
  },{signal});

  const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        controller.abort();
      resolve([])
    }, ms);
  });


  return Promise.race([data, timerPromise])
    .then((result) => {
      clearTimeout(timerPromise);
      return result;
    })
    .catch((error) => {
        if(error.name === "AbortError"){
            console.log("Timer expired!")
        }else{
            console.log(error.message)
        }
      return [];
    });
};

performFastAsync("https://jsonplaceholder.typicode.com/todos/1", 2000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
