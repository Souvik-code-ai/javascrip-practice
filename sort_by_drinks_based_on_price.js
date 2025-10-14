/*Drink Sorting
You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
Assume that the following array of drink objects needs to be sorted:
drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
The output of the sorted drinks object will be:
Examples
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
Notes
N/A*/
var drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
function ascendingSortOfDrinksOnPrice(drinks){
    var temp;
    for(let i=0;i<(drinks.length-1);i++){
        for(let j=(i+1);j<drinks.length;j++){
            if(drinks[i].price>drinks[j].price){
                temp=drinks[i];
                drinks[i]=drinks[j];
                drinks[j]=temp;
            }
        }
    }
    return drinks;
} 
console.log(ascendingSortOfDrinksOnPrice(drinks));
