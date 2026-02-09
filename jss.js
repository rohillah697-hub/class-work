//let arr = [1,3,3,"hello"];
//or(let i=0;i<arr.length;i++){
   // console.log(i,"-->",arr[i])

//}

//for(let val of arr){
  //  console.log(val)
//}



//0
//false
//""
//undefined
//null
//NaN


//and operataor=
//always search for falsey value and return it and it does not found any faley value then it give a last value as a result//
//or operator 
// always search for truthy value and return itand if it does not found any truthy value then it gives lats value as a result
//let obj = {a:1,b:2}

// let {a,b} = obj;

// console.log(a,b);

// const ans =!!undefined?"hello":"byy"
// console.log(ans)

// let arr =[1,2,3,1,2,3];

// let ans =arr.indexOf(1)
// let ans1 =arr.indexOf(100);

// console.log(ans,ans1)

// spread operator 

// let arr1 =[1,2,3];
// let arr2 =[3,4,5];
// let ans=[...arr1,...arr2,10,20]
// console.log(ans);


// let o1 ={a:1};
// let o2 ={b:2};

// let o3 ={...o1,...o2,b:3,c:4}
// console.log(o3);




// function add(a,b){
//   console.log(a);
//   console.log(b);
// }
// add(1,2)



// Hello Student,
// Sharing today class code for your reference.


// 1. Destructing in js


// let arr = [1,2,3];

// let [a,b,c] = arr
// console.log(a,b,c);


// let obj = {a:1,b:2}

// let {a,b} = obj;

// console.log(a,b);



// 2. Type conversion

// convert str data type value ---> num data type

// let str =  "123";

// let ans1 = Number(str);
// console.log(ans1, typeof ans1);


// let ans2 = +str;
// console.log(ans2, typeof ans2);

// let ans3 = parseInt(str);

// console.log(ans3, typeof ans3);






// convert num data ---> str data

// let num = 123;

// 












// 9. Rest and Spread Operator

// Spread Operator - merge/join/copy

// array

// let arr1 = [1,2,3];
// let arr2 = [3,4,5];

// let ans = [...arr1,...arr2,10,20]
// console.log(ans);


// let o1 = {a:1};
// let o2 = {b:2};

// let o3 = {...o1,...o2,b:3,c:4}
// console.log(o3);


// Rest operator - always return an arr


// function add(a,...b){
//     console.log(a);
//     console.log(b);
    
// }


// add(1,2)
// add(1)
// add(1,2,3)


// let arr =[1,2,3]
// let ans=arr.join("");
// console.log(ans,typeof ans)

let str ="hello world";
let reversed =str.split(" ").reverse().join("");
console.log(reversed)




