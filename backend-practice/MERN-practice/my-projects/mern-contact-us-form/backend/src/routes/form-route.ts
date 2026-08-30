
import express from "express";
import createContactForm from "../controllers/form-controller.ts";


// intialise express router
const formRouter = express.Router();

// for creating new form
formRouter.post("/form", createContactForm);



export default formRouter;
