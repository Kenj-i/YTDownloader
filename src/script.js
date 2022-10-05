const downloadButton = document.getElementById('download');
const URL = document.getElementById('url')

downloadButton.addEventListener('click', () => {
    sendURL(URL.value)
})

function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}