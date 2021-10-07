const router = require('express').Router();
const contactController = require('./contactsController');

router.get('/', (req, res) => {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to First - API REST!',
  });
});

router.route('/contacts')
  .get(contactController.index)
  .post(contactController.new);
router.route('/contacts/:contact_id')
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = router;
