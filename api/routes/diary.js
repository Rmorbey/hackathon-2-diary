const { Router } = require('express');

const entryController = require('../controllers/diary.js');

const entryRouter = Router();

entryRouter.get("/", authenticator, postController.index);
entryRouter.post("/", postController.create);
entryRouter.get("/:id", postController.show);
entryRouter.delete("/:id", postController.destroy);

module.exports = entryRouter;