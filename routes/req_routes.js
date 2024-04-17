import express from 'express';
import { getData, getYourData, getNewData, addMyData,postData } from "../controllers/reqController";

const router = express.Router();

router.get('/myData', getData);
router.get('/yourData', getYourData);
router.get('/newData', getNewData);

// Post requests 
// router.route("/addMyData").post(addMyData);
router.post("/addMyData",addMyData)
router.post("/postData",postData)

export default router;
