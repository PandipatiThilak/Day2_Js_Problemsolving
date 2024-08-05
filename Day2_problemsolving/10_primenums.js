n=1000;

k=0;
for(i=2;i<n;i++)
{ c=0;
    for(j=0;j<=i;j++){
        if(i%j==0){
            c=c+1;
        }
    }
    if(c==2){
        if(k<10){
            console.log(i);
            k=k+1;
        }
    }
}