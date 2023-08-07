const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);

// console.log('') 
// console.log('Base name')
// console.log('---------------------');
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log('')
// console.log('Ext name')
// console.log('---------------------');
// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log('')
// console.log('Parse')
// console.log('---------------------');
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));

// console.log('')
// console.log('Parse')
// console.log('---------------------');
// console.log(path.format(path.parse(__filename)));
// console.log(path.parse(__filename));

// console.log('')
// console.log('is Absolute')
// console.log('---------------------');
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./data.json'));

// console.log('')
// console.log('Join')
// console.log('---------------------');
// console.log(path.join('foler1','folder2', 'index.html'));
// console.log(path.join('/foler1','folder2', 'index.html'));
// console.log(path.join('/foler1','//folder2', 'index.html'));
// console.log(path.join('/foler1','//folder2', '../index.html'));
// console.log(path.join(__dirname, 'data.json'));

console.log('')
console.log('Resolve')
console.log('---------------------');
console.log(path.resolve('foler1','folder2', 'index.html'));
console.log(path.resolve('/foler1','folder2', 'index.html'));
console.log(path.resolve('/foler1','//folder2', 'index.html'));
console.log(path.resolve('/foler1','//folder2', '../index.html'));
console.log(path.resolve(__dirname, 'data.json'));