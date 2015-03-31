var compressor = require('node-minify');

// Using Google Closure
new compressor.minify({
    type: 'gcc',
    fileIn: 'laconic.js',
    fileOut: 'laconic.min.js',
    callback: function(err){
        console.log(err);
    }
});
