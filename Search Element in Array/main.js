// Linear search Algorithm

let data = [20,40,30,60,5,10,87,12,84,78,45,32,50];

let num = 12;

let index;

for (let i=0; i<data.length; i++){

    if(data[i]=== num){
        index=i;
        break;
    }
}

console.log(index);