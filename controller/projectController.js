import ProjectModel from "../model/projectModel";
class ProjectController {
    getOne(req, res) {
        ProjectModel.find({ _id: req.params.projectID }, function (err, project) {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).json({...project, id: req.params.projectID});
            }
        });
    }

    getAll(req, res) {
        ProjectModel.find({}, function (err, project) {
            try {
                res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
                res.setHeader('Content-Range', 'project 0-9/9');
                res.send(project);
            } catch (e) {
                console.log(e);
            }
        });
    }

    create(req, res) {
        let data = req.body;

        const project = new ProjectModel({
            title: data.title,
            description: data.description
        });

        project.save((err, project) => {
            if (err) {
                return res.status(400).send(err);
            }
            res.status(200).send('Send Data');
        });

    }

    update(req, res) {
        let data = req.body;

        ProjectModel.update(
            { _id: req.params.projectID },
            {
                $set: {
                    title: data.title,
                    description: data.description,
                }
            },
            function (err, result) {
                if (err) { res.status(400).send(err); return; }
                if (result) {
                    res.status(200).send({ resultCode: 0 });
                } else {
                    res.send({ resultCode: 1 });
                }
            }
        )
    }

    delete(req, res) {
        ProjectModel.deleteOne({ _id: req.params.projectID }, function (err) {
            if (err) return handleError(err)
            res.status(200).send('remove Data')
        });
    }
}

export default ProjectController;