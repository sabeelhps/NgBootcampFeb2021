

// ----Bad way ------------------
// download the file
// function downloadFile(url,downloaded) {
//     console.log(`Starting the Download from ${url}`);
//     setTimeout(() => {
//         const path = url.split('/').pop();
//         downloaded(path);
//     },3000)
// }


// // perform the file compression
// function compressFile(path, compressed) {
    
//     console.log(`Starting the file compression for ${path}`);

//     setTimeout(() => {
//         const compressedPath = path.split('.')[0] + '.zip';
//         compressed(compressedPath);
//     },3000)
// }

// // upload the file
// function uploadFile(compressedPath, uploaded) {
    
//     console.log(`Starting to upload the file from ${compressedPath}`);

//     setTimeout(() => {
//         const uploadedPath = `http://localsystem/${compressedPath}`;
//         uploaded(uploadedPath);
//     },2000)

// }


// downloadFile('http://facebook.com/profile.jpg', function (path) {
//     console.log(`File Downloaded SuccesFully as ${path}`)
//     compressFile(path, function (compressedPath) {
//         console.log(`File compressed as ${compressedPath}`);
//         uploadFile(compressedPath, function (uploadedPath) {
//             console.log(`File uploaded successfully at ${uploadedPath}`);
//             console.log("Everything Done");
//         })
//     })
// });




// -------------------------Good Way Using Promise-----------

function downloadFile(url) {
    console.log(`Starting the Download from ${url}`);
    return new Promise(function (resolve, reject) {

        if (!url.startsWith('http')) {
            throw new Error("Something went wrong");
        }

        setTimeout(() => {
            const path = url.split('/').pop();
            resolve(path);
        },3000)
    }) 
}


// perform the file compression
function compressFile(path) {
    
    console.log(`Starting the file compression for ${path}`);

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const compressedPath = path.split('.')[0] + '.zip';
            resolve(compressedPath);
        },3000)
    }) 
}

// upload the file
function uploadFile(compressedPath) {
    
    console.log(`Starting to upload the file from ${compressedPath}`);

    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            const uploadedPath = `http://localsystem/${compressedPath}`;
            resolve(uploadedPath);
        },2000)
    }) 

}


// downloadFile('http://facebook.com/profile.jpg')
//     .then(function (path) {
//         console.log(`File downloaded SuccessFully as ${path}`);
//         compressFile(path)
//             .then(function (compressedPath) {
//                 console.log(`File compressed Successfully as ${compressedPath}`);
//                 uploadFile(compressedPath)
//                     .then(function (uploadedPath) {
//                         console.log(`File uploaded Successfully as ${uploadedPath}`);
//                         console.log(`Everything Done`);
//                 })
//         })
//     })


downloadFile('hp://facebook.com/profile.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then(function (uploadedPath) {
            console.log(`File uploaded Successfully as ${uploadedPath}`);
            console.log(`Everything Done`);
    })
    .catch(function (e) {
        console.log(e.message);
        console.log("Error");
    })
   

