let data = [5,4,9,7,6,3,44,72,15,83];

// for(let i=0; i<data.length;i++){
//     document.write(`Array ${i} is ${data[i]} <br>`)
// }

// let x = 3;

// document.write(data[x])

const getElement = () => {
    let el = document.getElementById('element').value

    if(el<data.length && typeof(parseInt(el)) === "number" && el>=0){
        alert(data[el])
    } else{
        alert(`Please enter valid input upto ${data.length-1}`)
    }
    
}