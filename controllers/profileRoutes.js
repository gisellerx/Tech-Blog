const router = require('express').Router();

//http://localhost:3001/profile/admin
router.get('/admin', (req, res) => {
    res.render('',{})
})

//http://localhost:3001/profile/admin
router.get('/user', (req, res) => {

})

module.exports = router;