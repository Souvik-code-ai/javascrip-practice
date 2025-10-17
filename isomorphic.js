// Input: "egg", "add" => true // Input: "foo", "bar" => false function areIsomorphic(s1, s2) { }
let str1="foo";
let str2="bar";
function isomorphic(str1,str2){
    let length;
    let j;
    let sub_arr1=[];
    let sub_arr2=[];
    if(str1.length!==str2.length){
        return false;
    }
    for(let i=0;i<str1.length;i++){
        if(str1[i]===str1[i+1]){
            j=i;
            length=1;
            while(str1[j]===str1[j+1]){
                length++;
                j++;
            }
        }
        else if(str1[i]!==str1[i+1]){
            length=1;
        }
        sub_arr1.push(length);
    }
    for(let i=0;i<str2.length;i++){
        if(str2[i]===str2[i+1]){
            let j=i;
            length=1;
            while(str2[j]===str2[j+1]){
                length++;
                j++;
            }
        }
        else if(str2[i]!==str2[i+1]){
            length=1;
        }
        sub_arr2.push(length);
    }
    console.log(sub_arr1,sub_arr2);
    if(sub_arr1.length!==sub_arr2.length){
        return false;
    }
    let flag;
    for(let i=0;i<sub_arr1.length;i++){
        if(sub_arr1[i]===sub_arr2[i]){
            flag=1;
        }
        else if(sub_arr1[i]!==sub_arr2[i]){
            flag=0;
            return false;
        }
    }
    if(flag===1){
        return true;
    }
}
console.log(isomorphic(str1,str2));
