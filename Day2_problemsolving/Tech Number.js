function tech(n){
    if(n.length%2!=0){
        console.log("It is a tech number");
       
    }
    else{
        first=Math.floor(n/(10**(n.length/2)));
        second=n-(first*(10**(n.length/2)));
        sum=first+second;
        b=sum**2;
        if(b==n){
            console.log("It is Tech number"+n);
        }
        else{
            console.log("It is not a tech number");
        }
        
    }
}
tech(a);