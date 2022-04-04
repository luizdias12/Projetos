import { Router } from 'express';
var router = Router();

/* GET application page. */
router.get('/', (req, res, next) => {
    res.render('home', {
        title: 'Home'
    });
});

export default router;