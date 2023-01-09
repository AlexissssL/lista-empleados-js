import { Router } from "express";
import { getEmployees, postEmployees } from '../controllers/employees.controller.js';

const router = Router();

router.get("/employees", getEmployees);

router.post("/employees", postEmployees);

export default router