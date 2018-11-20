const data = [
    {
      name : 'coffee-bean',
      order : true,
      items : ['americano', 'milk', 'green-tea']
    },
    {
      name : 'starbucks',
      order : false,
    },
    {
      name : 'coffee-king',
      order : true,
      items : ['latte', 'ksu-special', 'green-tea']
    },
  ]
  
  // responsed by json and turned to javascript.
  // added dom the javascript
  
  function fn(tags, name, items) {
    // console.log(tags);
    if(typeof items === 'undefined'){
      items = "<span style='style:red'>No list for order</span>";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
  }
    
  
  data.forEach((v) => {
    const template = 
        fn`<h1> welcome ${v.name} !!</h1>
        <h2>Order list</h2>
        <div>${v.items}</div>`;
    
    document.querySelector('#message').innerHTML += template;
  })
  