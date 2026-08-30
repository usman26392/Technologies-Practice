
import express from "express";
import { addContact, addContactForm, deleteContact, editContactForm, getContacts, showSingleContact, updateContactForm } from "../controllers/contact.controller.js";



const router = express.Router();

router.get("/", getContacts);
router.get("/show-contact/:id", showSingleContact);
router.get("/add-contact", addContactForm);
router.post("/api/add-contact", addContact);
router.get("/edit-contact/:id", editContactForm);
router.post("/update-contact/:id", updateContactForm);
router.get("/delete-contact/:id", deleteContact);



export default router