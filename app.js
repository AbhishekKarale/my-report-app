console.log('Hello world!');

import { diffWords } from 'diff';

document.getElementById('compare').addEventListener('click', function() {
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var diff = diffWords(text1, text2);

    var display = diff.map(part => {
        const color = part.added ? 'green' :
                      part.removed ? 'red' : 'grey';
        return `<span style="color:${color};">${part.value}</span>`;
    }).join('');

    document.getElementById('result').innerHTML = display;
});