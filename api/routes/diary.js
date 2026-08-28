const { Router } = require('express');

const entryController = require('../controllers/diary.js');

const entryRouter = Router();

entryRouter.get("/", entryController.index);
entryRouter.get('/date/:date', entryController.getByDate)
entryRouter.post("/", entryController.create);
entryRouter.get("/:id", entryController.show);
entryRouter.delete("/:id", entryController.destroy);
entryRouter.patch('/:id', entryController.update)

module.exports = entryRouter;