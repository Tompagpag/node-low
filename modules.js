/****************
 * module path
 *****************/
// const path = require("path");
// const filename1 = path.join(__dirname, "./data/test.txt");

//console.log(__filename);
//console.log(__dirname);

/****************
 * module url
 *****************/
//const url = require('url');
// const newUrl = new URL("https://nodejs.org/api/url.html");
//console.log(newUrl.hostname);
//console.log(newUrl.pathname);

/**********
 * module os
 **********/

/* const os = require('os');
const { username } = os.userInfo()
cpus = os.cpus().length;
console.log(
    `Cet ordinateur appartient à ${username} il a ${cpus} CPU.`
); */

/****************
 * module process
 *****************/

//console.log(process.argv);
//const [,,...args]= process.argv

//console.log(args);
//console.log(`Bonjour ${args[0]}`);

/****************
 * module fs
 *****************/

// Chargement du module dans votre code
// const fs = require("fs");

//async
/* fs.readFile('./data/titanic.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}); */
/*
//sync
try {
    const data = fs.readFileSync('/data/titanic.txt', 'utf8')
    console.log(data)
} catch (err) {
    console.error(err)
}; */

/* const { writeFile} = fs; // assignation par décomposition

const data = "Hello Node.js";

writeFile('myFile.txt', data, (err) => {
  if (err) throw err;
  console.log('Saved!');
}); */

/****************
 * module Buffer
 *****************/
//const buffer = Buffer.alloc(10)
//console.log(buffer);
/* const buffer = Buffer.from('é')
console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toString('hex'))
console.log(buffer.toString('base64')) */

/****************
 * module event
 *****************/

/* const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('date', (date) => {
    console.log('Année: %d', date.getFullYear());
});

//myEmitter.emit('date', new Date('2020-04-06'));
//myEmitter.emit('date', new Date('2014-05-06'));

const jeu = new EventEmitter();
jeu.on('GameOver',(player)=> {
    console.log(player+ ' a perdu ');
})
jeu.emit('GameOver','player2555'); */

/****************
 * module child_process
 *****************/
// const { exec } = require("child_process");
// const [, , ...args] = process.argv;
// // node index.js npm -v
// //const n='node -v'
// exec("node -v", (err, stdin, stdout) => {
//   console.log(`Version ${stdin.trim()}`);
// });

//exec(args.join(' '), (err, stdin, stdout) => {
//    console.log(`Version ${stdin.trim()}`);
//})

/****************
 * module path
 *****************/
// const path = require('path');
// const filename1 = path.join(__dirname, './data/test.txt')

//console.log(__filename);
//console.log(__dirname);

/****************
 * module url
 *****************/
//const url = require('url');
// const newUrl = new URL('https://nodejs.org/api/url.html')
//console.log(newUrl.hostname);
//console.log(newUrl.pathname);


/**********
 * module os
 **********/


/* const os = require('os');
const { username } = os.userInfo()
cpus = os.cpus().length;
console.log(
    `Cet ordinateur appartient à ${username} il a ${cpus} CPU.`
); */

/****************
 * module process
 *****************/

//console.log(process.argv);
//const [,,...args]= process.argv

//console.log(args);
//console.log(`Bonjour ${args[0]}`);


/****************
 * module fs
 *****************/

// Chargement du module dans votre code
// const fs = require('fs');

//async
/* fs.readFile('./data/titanic.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}); */
/*
//sync
try {
    const data = fs.readFileSync('/data/titanic.txt', 'utf8')
    console.log(data)
} catch (err) {
    console.error(err)
}; */

/* const { writeFile} = fs; // assignation par décomposition

const data = "Hello Node.js";

writeFile('myFile.txt', data, (err) => {
  if (err) throw err;
  console.log('Saved!');
}); */

/****************
 * module Buffer
 *****************/
//const buffer = Buffer.alloc(10)
//console.log(buffer);
/* const buffer = Buffer.from('é')
console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toString('hex'))
console.log(buffer.toString('base64')) */

/****************
 * module event
 *****************/

/* const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('date', (date) => {
    console.log('Année: %d', date.getFullYear());
});

//myEmitter.emit('date', new Date('2020-04-06'));
//myEmitter.emit('date', new Date('2014-05-06'));

const jeu = new EventEmitter();
jeu.on('GameOver',(player)=> {
    console.log(player+ ' a perdu ');
})
jeu.emit('GameOver','player2555'); */

/****************
 * module child_process
 *****************/
// const { exec } = require('child_process');
// const [,,...args]= process.argv
// // node index.js npm -v
// //const n='node -v'
// exec('node -v', (err, stdin, stdout) => {
//     console.log(`Version ${stdin.trim()}`);
// })

//exec(args.join(' '), (err, stdin, stdout) => {
//    console.log(`Version ${stdin.trim()}`);
//})

/****************
 * module stream
 *****************/

/* const fs = require("fs");
const file= fs.createWriteStream('./bigfile.txt');

for (let i=0; i<1e6;i++){
    file.write('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n')
}
file.end()

const server = require('http').createServer();
server.on('request', (req, res) => {
    fs.readFile('./bigfile.txt', (err, data) => {
        if(err) throw err;
        res.end(data)
    })

    //const src = fs.createReadStream('./bigfile.txt');
    //src.pipe(res)


})

server.listen(3001) */

// ZIP

// const fs = require('fs');
// const zlib = require('zlib');

// const source = fs.createReadStream('bigfile.txt');
// const gzip = zlib.createGzip();
// const destination = fs.createWriteStream('bigfile.txt.gz');

// source.pipe(gzip).pipe(destination)
