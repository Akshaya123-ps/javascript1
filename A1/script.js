let i;
let array=[1,2,3,6,4,5]
function sumsfsquares(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i]*arr[i];
    }
    return sum;
}
const result=sumsfsquares(array);
console.log(result);