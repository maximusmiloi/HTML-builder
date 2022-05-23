const fs = require('fs');
const path = require('path');
const process = require('process');

const writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');

process.stdout.write('Привет! Вводи свой текст :) ');

process.stdin.on('data', (chunk) => {
    writeableStream.write(chunk.toString());
    if (chunk.toString().trim() === 'exit') {
        process.exit();
    }
})
process.on('SIGINT', () => {
    process.exit();
})

process.on('exit', () => {
    console.log('\n\nПока пока :)');
})
