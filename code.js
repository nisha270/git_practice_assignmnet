let arr=[1,2,3,4,5,6];
let sum=0;
let count=0;
for(let i=0;i<=arr.length-1;i++){
    sum=sum+arr[i];
    count++
}
console.log(Math.ceil(sum/count))