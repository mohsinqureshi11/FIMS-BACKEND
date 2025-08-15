//index me api ka rout banta hai;
import express from 'express';
import {createOfficer,getAllOfficers,deleteOfficer} from './controller.js';

const router = express.Router();

router.post("/officerRegister", createOfficer)

router.get("/getAllOfficers", getAllOfficers);   // yeh naya list API

router.delete("/deleteOfficer/:id", deleteOfficer);

export default router;