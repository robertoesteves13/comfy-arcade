import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.json({ title: 'Games' });
});

router.get('/:id', (req, res) => {
	res.json({ title: `Game ${req.params.id}` });
});

export default router;