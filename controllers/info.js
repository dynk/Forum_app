const info = `Welcome to forum app!`;

async function get(req, res) {
    return res.json(info);
}

module.exports = {
    get
};