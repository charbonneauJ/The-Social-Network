const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// Delete Route for reactions

// router.route("/:userId/reactions/:reactionId").delete(removeReaction);

// Post Route for reactions

// router.route("/:userId/reactions").post(addReaction);

// /api/thoughts/:thoughtId

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
