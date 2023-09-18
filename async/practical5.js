async function fetchManufacturers() {
    const apiUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2";
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const usManufacturers = data.Results.filter(
        (manufacturer) => manufacturer.Country === "UNITED STATES (USA)"
      );
      console.log(usManufacturers,"======")
      
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  console.log(fetchManufacturers())