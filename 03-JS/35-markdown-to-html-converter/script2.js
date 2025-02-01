// Function to convert Markdown to HTML
function convertMarkdown() {
    const markdownInput = document.getElementById('markdown-input').value;

    // Convert headings (h1, h2, h3)
    let html = markdownInput
        .replace(/^### (.*$)/gm, '<h3>$1</h3>') // h3
        .replace(/^## (.*$)/gm, '<h2>$1</h2>') // h2
        .replace(/^# (.*$)/gm, '<h1>$1</h1>'); // h1

    // Convert bold text (double asterisks or underscores)
    html = html
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **bold**
        .replace(/__(.*?)__/g, '<strong>$1</strong>'); // __bold__

    // Convert italic text (single asterisks or underscores)
    html = html
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // *italic*
        .replace(/_(.*?)_/g, '<em>$1</em>'); // _italic_

    // Convert images
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

    // Convert links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Convert blockquotes
    html = html.replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>');

    return html;
}

// Function to update the HTML output and preview
function updateOutput() {
    const htmlOutput = document.getElementById('html-output');
    const preview = document.getElementById('preview');
    const convertedHTML = convertMarkdown();

    // Display raw HTML in #html-output
    htmlOutput.textContent = convertedHTML;

    // Render HTML in #preview
    preview.innerHTML = convertedHTML;
}

// Add event listener to the textarea
document.getElementById('markdown-input').addEventListener('input', updateOutput);