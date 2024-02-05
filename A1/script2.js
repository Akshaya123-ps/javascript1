var arr=[2,2,5,8,5,4,6,8,2];
var d=1,i,j;
var e=0;
var item;
for(i=0;i<arr.length;i++){
    for(j=i;j<arr.length;j++)
    {
        if(arr[i]==arr[j])e++;
        if(d<e){
            d=e;
            item=arr[i];
        }
    }
    e=0;
}
console.log(item+" ("+d+" times)");