const fs = require('fs');
const argv = process.argv;

function cat(path){
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
          // handle possible error
          console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        // otherwise success
        console.log(`file contents: ${data}`);
      });
    }

    cat(process.argv[2]);