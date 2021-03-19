
function downloadFile(url,downloaded) {
    console.log(`Starting the Download from ${url}`);
    setTimeout(() => {
        const path = url.split('/').pop();
        downloaded(path);
    },3000)
}

function compressFile(path, compressed) {
    
    console.log(`Starting the file compression for ${path}`);

    setTimeout(() => {
        const compressedPath = path.split('.')[0] + '.zip';
        compressed(compressedPath);
    },3000)
}


function uploadFile(compressedPath, uploaded) {
    
    console.log(`Starting to upload the file from ${compressedPath}`);

    setTimeout(() => {
        const uploadedPath = `http://localsystem/${compressedPath}`;
        uploaded(uploadedPath);
    },2000)

}


downloadFile('http://facebook.com/profile.jpg', function (path) {
    console.log(`File Downloaded SuccesFully as ${path}`)
    compressFile(path, function (compressedPath) {
        console.log(`File compressed as ${compressedPath}`);
        uploadFile(compressedPath, function (uploadedPath) {
            console.log(`File uploaded successfully at ${uploadedPath}`);
            console.log("Everything Done");
        })
    })
});