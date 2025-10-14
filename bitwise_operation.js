/*Bitwise Operations
A decimal number can be represented as a sequence of bits. To illustrate:

6 = 00000110
23 = 00010111
From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001
Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

Examples
bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11
*/
function bitwiseAND(a,b){
    var binary_a=a.toString(2);
    var binary_b=b.toString(2);
    var arr_a=[];
    var arr_b=[];
    for(let i=0;i<binary_a.length;i++)
    {
      arr_a.push(binary_a[i]);
    }
    for(let i=0;i<binary_b.length;i++)
    {
      arr_b.push(binary_b[i]);
    }
    console.log(arr_a);
    console.log(arr_b);
    if(binary_a.length>binary_b.length)
    {
      var diff=(binary_a.length-binary_b.length);
      for(let i=0;i<diff;i++){
        arr_b.unshift(0);
      }
    }
    else if(binary_a.length<binary_b.length)
    {
      var diff=(binary_b.length-binary_a.length);
      for(let i=0;i<diff;i++){
        arr_a.unshift("0");
      }
    }
    var new_arr=[];
    for(let i=(arr_a.length-1);i>=0;i--)
    {
      if((arr_a[i]==="1")&&(arr_b[i]==="0")){
        new_arr.unshift(0);
      }
      else if((arr_a[i]==="0")&&(arr_b[i]==="1")){
        new_arr.unshift(0);
      }
      else if((arr_a[i]==="0")&&(arr_b[i]==="0")){
        new_arr.unshift(0);
      }
      else if((arr_a[i]==="1")&&(arr_b[i]==="1")){
        new_arr.unshift(1);
      }
    }
    console.log(new_arr);
    var sum=0;
    var k=0;
    
    for(let i=(new_arr.length-1);i>=0;i--)
    {
      sum+=new_arr[i]*(2**k);
      k++;

    }
    console.log(sum);
}
bitwiseAND(6,23);
function bitwiseOR(a,b){
    var binary_a=a.toString(2);
    var binary_b=b.toString(2);
    var arr_a=[];
    var arr_b=[];
    for(let i=0;i<binary_a.length;i++)
    {
      arr_a.push(binary_a[i]);
    }
    for(let i=0;i<binary_b.length;i++)
    {
      arr_b.push(binary_b[i]);
    }
    console.log(arr_a);
    console.log(arr_b);
    if(binary_a.length>binary_b.length)
    {
      var diff=(binary_a.length-binary_b.length);
      for(let i=0;i<diff;i++){
        arr_b.unshift(0);
      }
    }
    else if(binary_a.length<binary_b.length)
    {
      var diff=(binary_b.length-binary_a.length);
      for(let i=0;i<diff;i++){
        arr_a.unshift("0");
      }
    }
    var new_arr=[];
    for(let i=(arr_a.length-1);i>=0;i--)
    {
      if((arr_a[i]==="1")&&(arr_b[i]==="0")){
        new_arr.unshift(1);
      }
      else if((arr_a[i]==="0")&&(arr_b[i]==="1")){
        new_arr.unshift(1);
      }
      else if((arr_a[i]==="0")&&(arr_b[i]==="0")){
        new_arr.unshift(0);
      }
      else if((arr_a[i]==="1")&&(arr_b[i]==="1")){
        new_arr.unshift(1);
      }
    }
    console.log(new_arr);
    var sum=0;
    var k=0;
    
    for(let i=(new_arr.length-1);i>=0;i--)
    {
      sum+=new_arr[i]*(2**k);
      k++;

    }
    console.log(sum);
}
bitwiseOR(7,12);
function bitwiseXOR(a,b){
    var binary_a=a.toString(2);
    var binary_b=b.toString(2);
    var arr_a=[];
    var arr_b=[];
    for(let i=0;i<binary_a.length;i++)
    {
      arr_a.push(binary_a[i]);
    }
    for(let i=0;i<binary_b.length;i++)
    {
      arr_b.push(binary_b[i]);
    }
    console.log(arr_a);
    console.log(arr_b);
    if(binary_a.length>binary_b.length)
    {
      var diff=(binary_a.length-binary_b.length);
      for(let i=0;i<diff;i++){
        arr_b.unshift(0);
      }
    }
    else if(binary_a.length<binary_b.length)
    {
      var diff=(binary_b.length-binary_a.length);
      for(let i=0;i<diff;i++){
        arr_a.unshift("0");
      }
    }
    var new_arr=[];
    for(let i=(arr_a.length-1);i>=0;i--)
    {
      if((arr_a[i]==="1")&&(arr_b[i]==="0")){
        new_arr.unshift(1);
      }
      else if((arr_a[i]==="0")&&(arr_b[i]==="1")){
        new_arr.unshift(1);
      }
      else if((arr_a[i]==="0")&&(arr_b[i]==="0")){
        new_arr.unshift(0);
      }
      else if((arr_a[i]==="1")&&(arr_b[i]==="1")){
        new_arr.unshift(0);
      }
    }
    console.log(new_arr);
    var sum=0;
    var k=0;
    
    for(let i=(new_arr.length-1);i>=0;i--)
    {
      sum+=new_arr[i]*(2**k);
      k++;

    }
    console.log(sum);
}
bitwiseXOR(7,12);