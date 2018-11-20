const healthObj = {
    showHealth : function(){
      console.log('hi~ ' + this.name);
    }
  }
  
  // Object assign method.
  const myHealth = Object.assign(Object.create(healthObj), {
    name : 'woo',
    age: 20
  });
  /*
  // Object .
  const myHealth = Object.create(healthObj);
  myHealth.name = 'woo';
  myHealth.age = 20;
  */
  console.log(myHealth);
  
  
  class Health {
    constructor (name, lastTime) {
      this.name = name;
      this.lastTime = lastTime;
    }
    
    showHealth() {
      console.log('hi !' + this.name);
    }
  }
  
  const h = new Health('woo');
  h.showHealth();
  
  /* perfect same above.
  function Health(name) {
    this.name = name;
  }
  
  Health.prototype.showHealth = function() {
    console.log('Hi~ ' + this.name);
  }
  
  const h = new Health('woo');
  h.showHealth();
  */