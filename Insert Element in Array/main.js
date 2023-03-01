// let data = [60,30,3,9,10,50];

// let num = 70, position = 2;


// // Reverse Loop
// for (let i = data.length-1; i>= position; i--){
//     console.log(data[i]);

//     if(i >= position){
//         data[i+1] = data[i];
//         if(i == position){
//             data[i] = num;
//         }
//     }

// }

// console.log(data);


let data = [60,30,10,67,40]


const insertNewEl = () => {

    let num = document.getElementById("num").value
    let pos = document.getElementById("pos").value

    console.log("Old Array", data);
    
    for (let i = data.length-1; i>= pos; i--){
        console.log(data[i]);
    
        if(i >= pos){
            data[i+1] = data[i];
            if(i == pos){
                data[i] = num;
            }
        }
    
    }

    console.log("New Array",data);

}


// splice 

