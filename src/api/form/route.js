import express from 'express';
import { 
    createForm, 
    getAllForms, 
    getFormById, 
    updateForm, 
    deleteForm 
} from './controller.js';

const router = express.Router();

// Form routes
router.post("/createForm", createForm);
router.get("/getAllForms", getAllForms);
router.get("/getForm/:id", getFormById);
router.put("/updateForm/:id", updateForm);
router.delete("/deleteForm/:id", deleteForm);

export default router;
