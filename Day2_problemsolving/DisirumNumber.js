a=prompt("Enter the number to check whether the number is  Disirtum number or not:");
//console.log(a.length);
function disirum(n){
    c=n.length;
    b=n;
    sum=0;
    while(n>0){
        r=n%10;
        n=Math.floor(n/10);
        sum=sum+r**c;
        c=c-1;
        
    }
    if(b==sum){
        console.log("This is the Disirum Number:"+b);
        
    }
    else{
        console.log("This is not a Disirum Number");
    }
}
disirum(a);