const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// set up GET, PUT and DELETE a thought by its id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// set up POST to create a reaction stored in a single thought's reactions array
// set up DELETE to pull and remove a rection by the reaction's reactionId value
router.route('/:thoughtId/reactions/')
    .post(addReaction)
    .delete(deleteReaction)

module.exports = router;