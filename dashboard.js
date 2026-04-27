const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h1>🪖 Military Bot Dashboard</h1>
        <form action="/announce" method="POST">
            <input name="message" placeholder="Enter announcement" required />
            <button type="submit">Send Announcement</button>
        </form>
    `);
});

app.post('/announce', (req, res) => {
    const message = req.body.message;

    console.log("📢 Dashboard Announcement:", message);

    res.send("✅ Message sent (check console)");
});

app.listen(PORT, () => {
    console.log(`🌐 Dashboard running at http://localhost:${PORT}`);
});
