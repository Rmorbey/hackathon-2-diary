const { Router } = require('express');

const entryController = require('../controllers/diary.js');

const entryRouter = Router();

entryRouter.get("/", entryController.index);
entryRouter.post("/", entryController.create);
entryRouter.get("/:id", entryController.show);
entryRouter.get('/', entryController.getByDate)
entryRouter.delete("/:id", entryController.destroy);

module.exports = entryRouter;