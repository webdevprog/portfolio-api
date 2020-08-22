const { Router } = require('express');
const router = Router();
const { default: ProjectController } = require("../controller/projectController");
const project = new ProjectController();

router.get('/', project.getAll);
router.get('/:projectID', project.getOne);
router.delete('/:projectID', project.delete);
router.post('/', project.create);

module.exports = router;