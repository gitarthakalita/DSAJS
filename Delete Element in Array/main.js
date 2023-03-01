let data = [ 30,2,40,45,12,80,76,20]

let pos = 4;

for (let i =pos; i<data.length-1;i++){
     data[i] = data[i+1]
}

data.length= data.length-1;

console.log(data);