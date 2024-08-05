function is_prime(){
    n=10;
for(i=2;i<n;i++){
    if(n%i==0)
    {
        console.log("not prime")
    }
    if(i+1==n){
        console.log("prime")
        
    }
}
}
is_prime();