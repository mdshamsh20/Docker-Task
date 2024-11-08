const GREETING = 'Add your task here !';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
