const { Router } = require('express');

const entryController = require('../controllers/diary');

const entryRouter = Router();

entryRouter.get("/", postController.index);
entryRouter.post("/", postController.create);
entryRouter.get("/:id", postController.show);
entryRouter.delete("/:id", postController.destroy);

module.exports = entryRouter;