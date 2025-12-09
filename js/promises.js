// // fetch("https://something .com").then().catch.finally()
// // how ot make promises

// // promise 1 is an obect repesenting the completion of the task
// //creation plus consumption

// const promiseOne = new Promise(function (resolve, reject) {
//     // Simulate an async task (e.g., database call, network request)
//     setTimeout(function () {
//         console.log("Async task is completed");
//         resolve(); // Corrected spelling from 'resolove' to 'resolve'
//     }, 1000);
// });

// promiseOne.then(function () {
//     console.log("Promise Consumed");
// });


// // promise two

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is completed")
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed")
})



new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Promise 2 async task 2")
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved")
})


const promisethree = new Promise(function (resolve, reject){


        setTimeout(function(){4
            resolve({
                username: "shayns", email: "sam@gmail.com"
            })

        },1000)
})

promisethree.then(function(user){
    console.log(user)

})

const promisefour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({ username: "sam", password: 1234 }); 
        } else {
            reject("Error: something went wrong");
        }
    }, 1000);
});


const username = promisefour
    .then((user) =>{
    console.log(user)
    return user.username
})
    .then((username) =>{
    console.log(username)
})
    .catch(function(error){
    console.log(error)
})
.finally(() =>{
    console.log("finally bocked isrunned")
})

const promisefive = new Promise(function(resolve, reject) {
    let error = true;

    if (!error) {
        resolve({ username: "sjs", password: 1234 });
    } else {
        reject("Error: something went wrong");
    }
});
 

async function consumePromiseFive() {
  try {
     const response = await promisefive
   console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive();
