"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskts_controller_1 = require("../controller/taskts.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: The auto generated id of task
 *        name:
 *          type: string
 *          description: The name of task
 *        description:
 *          type: string
 *          description: The description of the task
 *      required:
 *          - name
 *          - description
 *      example:
 *          id: dmIcTv4SFvyiSwmyql58D
 *          name: My first task
 *          description: I have to do something
 *    TaskNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found task
 *      example:
 *        msg: Task was not found
 *
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: The Task id
 */
/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 *
 */
/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: Return a Tasks list
 *   tags: [Task]
 *   responses:
 *     200:
 *      description: The list of tasks
 *      content:
 *        application/json:
 *          schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Task'
 */
router.get("/tasks", taskts_controller_1.getTasks);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get total task counter
 *      tags: [Task]
 *      responses:
 *          200:
 *            description: The total number of Task
 *            content:
 *                text/plain:
 *                    schema:
 *                      type: integer
 *                      example: 15
 */
router.get("/tasks/count", taskts_controller_1.count);
/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: create a new task
 *    tags: [Task]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: the tasks was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Some server error
 *
 */
router.post("/tasks", taskts_controller_1.createTask);
/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: get a task by Id
 *    tags: [Task]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: The Found Task
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 */
router.get("/tasks/:id", taskts_controller_1.getTask);
/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete a task by id
 *    tags: [Task]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: the task was deleted
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
router.delete("/tasks/:id", taskts_controller_1.deleteTask);
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update a task by id
 *    tags: [Task]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The updated task
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
router.put("/tasks/:id", taskts_controller_1.updateTask);
exports.default = router;
