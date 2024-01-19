/** Command-line tool to generate Markov text. */

const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

function markovFile(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`${err}: Cannot read file(${path})`);
            process.exit(1);
        }
        else {
            let m = new MarkovMachine(data);
            console.log(m.makeText(20));
        }
    })
}

async function markovUrl(path) {
    try {
        res = await axios.get(path);
        let m = new MarkovMachine(res.data);
            console.log(m.makeText(20));
    }
    catch (err) {
        console.log(`${err}: Cannot read url(${path})`);
    }
}

let [method, path] = process.argv.slice(2); 

if (method == 'file') {
    markovFile(path);
}
else if (method == 'url') {
    markovUrl(path);
}
else {
    console.error(`Unknown method: ${method}`);
    process.exit(1);
  }