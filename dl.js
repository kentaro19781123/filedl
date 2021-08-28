const fs = require('fs');
const request = require('request');

const download = function(uri, filename, callback) {
  if(!fs.existsSync(filename)) {
    // ファイルがなかったら
    console.log("ない");

    request.head(uri, function(err, res, body) {
      console.log('statusCode:', res && res.statusCode);
      if(res.statusCode === 200) {
        console.log(res.statusCode);
        request
        .get(uri)
        .pipe(fs.createWriteStream(filename))
        .on('close', callback);
      } else {
          console.log(res.statusCode);
      }
    });
  } else {
    console.log("ある");
  }
};

download('https://www.google.com/images/srpr/logo3w.png', './images/google.png', function() {
  console.log('download end');
});
