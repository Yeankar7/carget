const express = ('require')
const router = express.Router()

router.get ('/', (req, res) => {
    res.send ('from API routes')

    req.send('off')

})


module.exports = router