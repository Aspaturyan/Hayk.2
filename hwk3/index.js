
 //Task 1 

function separateNum (arr) {
  //let result = [] ;
  let res1 = [];
  let res2 = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      res1.push(arr[i]);
      //result.push(res1);
    } else {
        res2.push(arr[i]);
        //result.push(res2);
      }
  }
  //return result ;  
    return res1;    //erb vor hertov return em anum res1 kam res2 chisht  // a ashxatum Ete RESULT em anum sxal a ashxatum 
  //return res2;
}
console.log(separateNum ([45, 12, 3, 6, 17, 0]))
//console.log(separateNum ([1, 3, 5, 9]))


 //Task 2
 
function filterRange(arr, a, b) {
  let newArr = [];
  for( let i = 0; i < arr.length; i++){
    if(arr[i] >= a && arr[i] < b){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(filterRange([1, 10, 20, 30], 9, 23))
console.log(filterRange([100, 200, 300], 9, 23))
console.log(filterRange([-10, -8, 0, 10, 20], -100, 15))


 //Task 3

const frameworks = [
  { id: 1, title: "react" },
  { id: 2, title: "angular" },
  { id: 3, title: "vue" }];
function findById(frameworksr, index){
  return frameworks.filter(function(obj){
    if (obj.id === index){
      return obj;
    } //else{               //erb vor else em anum tpum a menak id: 1
        //return "No Data"
        //}               
  })[0];
}
console.log(findById(frameworks, 2))


 //Task 4

let arr = ["Godfather", "Whiplash", "Social Network"]; 
//let arr1 = ["Manchester City", "Liverpool"];         
function fn(el, index, array){
  let res = {
    title: el, 
    idx: index,
  }
  return res;
}
console.log(arr.map(fn))
//console.log(arr1.map(fn))