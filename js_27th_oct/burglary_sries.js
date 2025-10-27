// Burglary Series (04): Add its Name
// Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
// Notes
// The value argument will be a number.
function addName(obj_of_stolen_items,pet_name,value){
    let obj_name_with_value={};
   
    for(let i in obj_of_stolen_items){
        obj_name_with_value[i]=obj_of_stolen_items[i];
       
    }
    obj_name_with_value[pet_name]=value;
    return obj_name_with_value;

}
console.log(addName({ piano: 500 }, "Brutus", 400));
//Time Complexity:O(n)
//Space Complexity:O(n)