const clients = [
    {
    name: "Jack",
    email: "jsii@gmail.com",
    phone: "0502631584",
    balance: 5231,
    id: 1
    },
    { name: "Emily",
     email: "dkiwi@gmail.com",
     phone: "0532648751",
     balance: -326,
     id: 2
     },
    { name: "Shir",
     email: "uyo@gmail.com",
     phone: "0542013659",
     balance: 1205,
     id: 3
     },
    { name: "Snoop",
     email: "amer@gmail.com",
     phone: "055251879",
     balance: 8015,
     id: 4
     },
];


function addClient(client){
    clients.push(client);
    return clients;
}

addClient({
    name : "avi",
    email : "abc@abc.abc",
    phone : "055623754",
    balance : 250,
    id : 5
}); 


// function clientById(id){
//     for(let i = 0; i<clients.length; i++){
//         if(clients[i].id == id ){
//             return clients[i];
//         }
//     }
// }
// console.log(clientById(2));

// function deleteClient(deleteUser){
//     for(let i = 0; i<clients.length; i++){
//         if(clients[i].id == deleteUser){
//             clients.splice([i],1);
//             return clients;
//         }
//     }
// }
// console.log(deleteClient(2));

// function withDraw(id, amount){
//     for (let i = 0; i<clients.length; i++){
//         if(clients[i].id == id){
//             clients[i].balance = clients[i].balance - amount;
//             return clients[i];
//         }
//     }
// }

// console.log(withDraw(1, 200));


// function deposit(id, amount){
//     for (let i = 0; i<clients.length; i++){
//         if(clients[i].id == id){
//             clients[i].balance = clients[i].balance - amount;
//             return clients[i];
//         }
//     }
// }

// console.log(deposit(2, 200));




//task 5 

// function ifYoureBroke() {
//     for (let i = 0; i < bankClients.length; i++) {
//         if (bankClients[i].balance < 200) {
//             console.log(bankClients[i]);
//         };
//     };
// };

// ifYoureBroke();


//app 

// const clientName = document.getElementById("clientName");
// const amount1 = document.getElementById("amount");
// const submit = document.getElementById("submitButton");
// const balanceButton = document.getElementById("balanceBtn");



// submit.addEventListener("click", function() {
//     for (let i = 0; i < bankClients.length; i++) {
//         if (clientName.value == bankClients[i].fullName) {
//             if(bankClients[i].balance - amount1.value > 0){
//                 alert("ok");
//                 bankClients[i].balance -= amount1.value;
//             }
//             else {
//                 alert("you are blocked");
//             };   
//         };
//     };
// });

// balanceButton.addEventListener("click", function() {
//     for(let i = 0; i < bankClients.length; i++){
//         if (clientName.value == bankClients[i].fullName){
//             alert(bankClients[i].balance);
//         };
//     };
// });





