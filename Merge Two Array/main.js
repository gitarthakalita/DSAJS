let a=[1,2,3], b=[4,5,6];

let data=[];


// Using For loop

for (let i=0; i<a.length; i++){
    data[i]=a[i];
}

for( let i=0; i<b.length; i++ ){
    data[a.length+i]= b[i]
}


console.log(data); 