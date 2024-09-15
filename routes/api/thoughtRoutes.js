const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
// router.route("/").get(getThoughts);

router
  .route("/")
  .get(getThoughts)
  // .delete(deleteThought)
  // .put(updateThought)
  .post(createThought);

// Delete Route for reactions

router.route("/:thoughtId/reactions").delete(removeReaction);

// Post Route for reactions

router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
