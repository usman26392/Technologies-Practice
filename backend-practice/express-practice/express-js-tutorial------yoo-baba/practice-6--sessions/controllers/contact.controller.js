import mongoose from "mongoose";
// import Contact from "../models/contact.model.js";



export async function getContacts(req, res) {
  try {
    // const contactsProfiles = await Contact.find();
    // res.render("home", {
    //   contacts: contactsProfiles,
    // });

    // pagination implementation
    const { page} = req.query;
    const options = {
      page: parseInt(page),
      limit: 3
    }
    const paginationResult = await Contact.paginate({}, options);
    // res.send(paginationResult)
    res.render("home", {
      contacts: paginationResult.docs,
      totalDocs: paginationResult.totalDocs,	
      limit: paginationResult.limit,
      totalPages: paginationResult.totalPages,
      currentPage: paginationResult.page,
      pagingCounter:paginationResult.pagingCounter,
      hasPrevPage: paginationResult.hasPrevPage,
      hasNextPage:	paginationResult.hasNextPage,
      prevPage:	paginationResult.prevPage,
      nextPage: paginationResult.nextPage
    });
  } catch (error) {
    // console.log("Error fetching contacts:", error);
    // return res.status(500).send("Internal Server Error!");
    // OR
    return res.render("500", {
      message: error.message,
    });
  }
}


