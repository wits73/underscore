const list = document.querySelectorAll("li");
for(let i = 0; i < list.length; i++){
  list[i].addEventListener("click", function(){
    console.log(i + " list!");
  });
}

let listArray = Array.from(list);
let result = [];

let eArray = listArray.filter(function(v) {
  return v.innerText.includes("J");
})
/*
let eArray = listArray.filter((v) =>{
  if(v.innerText.includes("J")){
    result.push(v.innerText);
  }
  console.log(result);
  return result;
});
*/
console.log(eArray);


function home(){
  const arrA = [1,2];
  const arrB = [].concat(arrA, 3);
  const arrC = [].concat(arrB, 4);
  // arrC = 'test';
  console.log(arrA, arrB, arrC);
}

function addMark(){
  let newData = Array.from(arguments)
  newData = newData.map(function(value){
    return value + "!";
  });
  console.log(newData);
}
//addMark(1,2,3,4,5);