// const getData = async (apiUrl) => {
//   try {
//     const respnse = await fetch(apiUrl);
//     const data = await respnse.json();
//     console.log(data);
//   } catch (error) {
//     console.log([]);
//   }
// };
// getDataUsing("https://jsonplaceholder.typicode.com/todos/1");



//using Promise
const getDataPromises = (apiUrl) => {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((response) => {
        if(response.statusText === "Ok"){
            const data = response.json();
            resolve(data)
        }
       reject([])
      })
      .catch((error) => {
        reject([]);
      });
  });
};

getDataPromises("https://jsonplaceholder.typicode.com/todoSs/")
  .then((data) => {
    console.log(data);
    
  })
  .catch((data) => {
    console.log([]);
  });
