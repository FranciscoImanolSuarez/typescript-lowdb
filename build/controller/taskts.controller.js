"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.count = exports.getTask = exports.createTask = exports.getTasks = void 0;
const db_1 = require("../db");
const nanoid_1 = require("nanoid");
const getTasks = (req, res) => {
    const data = (0, db_1.getConnection)().get("tasks").value();
    return res.json(data);
};
exports.getTasks = getTasks;
const createTask = (req, res) => {
    const { name, description } = req.body;
    const newTask = {
        name,
        description,
        id: (0, nanoid_1.nanoid)(),
    };
    try {
        (0, db_1.getConnection)().get("tasks").push(newTask).write();
        res.json(newTask);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.createTask = createTask;
const getTask = (req, res) => {
    const taskFound = (0, db_1.getConnection)()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!taskFound)
        return res.status(404).json({ msg: "Task was not Found" });
    res.json(taskFound);
};
exports.getTask = getTask;
const count = (req, res) => {
    const taskLength = (0, db_1.getConnection)().get('tasks').value().length;
    res.json(taskLength);
};
exports.count = count;
const deleteTask = (req, res) => {
    const taskFound = (0, db_1.getConnection)()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!taskFound)
        return res.status(404).json({ msg: "Task was not Found" });
    const deletedTask = (0, db_1.getConnection)()
        .get("tasks")
        .remove({ id: req.params.id })
        .write();
    res.json(deletedTask[0]);
};
exports.deleteTask = deleteTask;
const updateTask = (req, res) => {
    const taskFound = (0, db_1.getConnection)()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!taskFound)
        return res.status(404).json({ msg: "Task was not Found" });
    const updatedTask = (0, db_1.getConnection)()
        .get("tasks")
        .find({ id: req.params.id })
        .assign(req.body)
        .write();
    res.json(updatedTask);
};
exports.updateTask = updateTask;
