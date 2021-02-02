var fs = require('fs');

fs.readFile('./firstApps/writeToConsole.js', 'utf-8', function OnFileRead(err, data){
    if (err) {
        console.log('ERROR');    }
    console.log('File content is:')
    console.log(data);
});