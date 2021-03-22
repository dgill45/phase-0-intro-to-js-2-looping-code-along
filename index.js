// Code your solutions in this file

const friends = ["Lisa", "Kaitlin", "Jan",];
    
function writeCards(friends,event){

    let event = "surprise";
    let birthday = [];
    for (let i = 0; i < friends.length; i++){
        
        birthday[i] = ("Thank you" + friends + "for the wonderful" + event + "gift!");
        debugger;
    }
    return birthday;
}
console.log("Thank you" + ${friends} + "for the wonderful" + ${event} + "gift!");
writeCards();

console.log(writeCards);

 let num = 10;

function countDown(num){
   
    while (num >= 0)
    console.log(num--);
    debugger;
    

}

countDown();