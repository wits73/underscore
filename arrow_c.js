function checkNum(...argArray){
    const result = argArray.every((v) => typeof v === "number");
    console.log(result);
  }
  
  /*
  function checkNum(){
    const argArray = Array.from(arguments);
    //const argArray = Array.prototype.slice.call(arguments);
    console.log(toString.call(argArray));
    const result = argArray.every((v) => typeof v === "number");
    console.log(result);
  }
  */
  
  const result = checkNum(10,2,6,7,"test");
  
  const el = document.querySelector('p');
  
  const myObj = {
    register() {
      this.printData();
    },
    printData(){
      console.log('This is printData');
    }
  }
  
  el.addEventListener("click", function(evt){
    myObj.register(); 
  });