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



document.getElementById('copyButton').addEventListener('click', function() {
  // Get the HTML content from the result container
  var htmlContent = document.getElementById('result').innerHTML;

  // Copy the HTML to the clipboard
  if (!navigator.clipboard) {
    // Clipboard API not available
    return;
  }

  navigator.clipboard.write([
    new ClipboardItem({
      "text/html": new Blob([htmlContent], { type: "text/html" })
    })
  ]).then(function() {
    console.log('Copying to clipboard was successful!');
    // Optionally, alert the user that the copy was successful
    
  }, function(err) {
    console.error('Could not copy text: ', err);
    // Optionally, alert the user that the copy failed
    alert('Failed to copy results. Please try again.');
  });
});