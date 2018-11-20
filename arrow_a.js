setTimeout(() => {
    console.log("settimeout");
  }, 1000);
  
  let arrA = [1,2].map((v,i,o) => {
    // console.log(v,i,o); 
    return v * 3;
  });
  
  console.log(arrA);
  /*
  let arrA = [1,2].map(function(value, index, object) {
    console.log(value, index, object);
    return value * 2;
  });
  
  console.log(arrA);
  */