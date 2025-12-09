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