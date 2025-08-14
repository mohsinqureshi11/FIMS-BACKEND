//index me api ka rout banta hai;
import express from 'express';
import {createOfficer,getAllOfficers} from './controller.js';

const router = express.Router();

router.post("/officerRegister", createOfficer)

router.get("/getAllOfficers", getAllOfficers);   // yeh naya list API


export default router;