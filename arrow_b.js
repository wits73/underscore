const myArrow = {
    register(evt) {
      this.printData();
    },
    
    printData () {
      console.log('Print is good!!');
    }
  }
  
  const elArrow = document.querySelector("p");
  elArrow.addEventListener("click", function() {
    console.log(this.innerText);
  });
  /*
  const el = document.querySelector("p");
  el.addEventListener("click", function(ent){
    console.log(this.innerText);
  })
  */
  
  // this keywords is AOT (Access Object Time?)
  // this context of Arrow function
  const myObj = {
    runTimeout() {
      setTimeout(() => {
        console.log(this === window);
        this.printData();
      }, 200);
    },
    
    printData(){
      console.log('print data');
    }
  }
  
  myObj.runTimeout();
  
  /*
  const myObj = {
    runTimeout() {
      setTimeout(function(){
        console.log(this === window);
        this.printData();
      }.bind(this), 200);
    },
    
    printData(){
      console.log('print data');
    }
  }
  
  myObj.runTimeout();
  */