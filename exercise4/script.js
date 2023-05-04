fetch('https://jsonplaceholder.typicode.com/photos?albumId=2')
  .then((response) => response.json())
  .then((json) => console.log(json.map(myFunction)));

  function myFunction(object){

    return object.id
  }