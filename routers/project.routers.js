const { Router } = require('express');
const router = Router();
const { default: ProjectController } = require("../controller/projectController");
const project = new ProjectController();

router.get('/', project.getAll);
router.get('/:projectID', project.getOne);
router.post('/', project.create);
router.put('/:projectID', project.update);
router.delete('/:projectID', project.delete);

module.exports = router;