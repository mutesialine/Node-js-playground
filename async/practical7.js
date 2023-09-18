async function getJokeById(apiUrl, jokeId) {
    try {

      const response = await fetch(apiUrl);
      const data = await response.json();
      const joke = data.find((joke) => joke.id === jokeId);
  
      if (!joke) {
        throw new Error(`No jokes found id: ${jokeId}`);
      }
      console.log( joke)
    } catch (error) {
      throw error;
    }
  }

 console.log(getJokeById("https://my-json-server.typicode.com/IbrahimBagalwa/test-json-placeholder/jokes",2)) 