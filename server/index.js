const express = require('express');
const app = express();
const cors = require('cors');
const ytdl = require('ytdl-core');

app.use(cors());
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

app.get('/download', (req, res) => {
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(req.query.URL, { quality: 'highest', format: 'mp4', filter: 'videoandaudio' }).pipe(res)
});