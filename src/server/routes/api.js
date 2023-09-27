const express = ('require')
const router = express.Router()

const mongoose = require ('mongoose')

const db = "mongodb+srv://uservishwas:pwvishwas@cargetdb.nesitbh.mongodb.net/test"

mongoose.connect =(db, err=> {
    if (err){
        console.error( 'Error!' + err)
    } else { console.log  ('connected to mongodb')

    }
})

router.get ('/', (req, res) => {
    res.send ('from API routes')

    req.send('off')

})


module.exports = router