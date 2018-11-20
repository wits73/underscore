const SETTING = {
    name : "LUCKY LOTTO!",
    count : 6,
    maxNumber: 45
}

function getRandomNumber(){
    const numSet = new Set();
    while(true){
        let temp = Math.floor((Math.random() * 45) + 1 );
        
        numSet.add(temp);
        if(numSet.size > 5)
            break;
    }
    return numSet;
}

console.log(getRandomNumber());