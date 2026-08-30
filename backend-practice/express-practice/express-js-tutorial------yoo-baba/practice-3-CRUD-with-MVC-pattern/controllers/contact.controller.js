import mongoose from "mongoose";
import Contact from "../models/contact.model.js";



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

export async function showSingleContact(req, res) {
  // find a specific contact on base of database _id
  // const singleContact = await Contact.findOne({
  //   _id: req.params.id
  // });
  // OR by Mongoose
  // const singleContact = await Contact.findById(req.params.id);
  // res.render("show-contacts", { singleContact });
  let paramsId = mongoose.Types.ObjectId.isValid(req.params.id);
  // console.log(paramsId)
  if (!paramsId) {
    return res.render("404", {
      message: "Invalid Id",
    });
  } else {
    try {
      const singleContact = await Contact.findById(req.params.id);
      if (!singleContact) {
        return res.render("404", {
          message: "Contact not found!",
        });
      }
      res.render("show-contacts", { singleContact });
    } catch (error) {
      return res.render("500", {
        message: error.message,
      });
    }
  }
}

export function addContactForm(req, res) {
  res.render("add-contact");
}

export async function addContact(req, res) {
  // const { first_name, last_name, email, phone, address } = req.body;
  // Contact.insertOne({first_name, last_name, email, phone, address});
  // OR Mongoose method
  // await Contact.create(req.body);
  // res.redirect("/");
  try {
    await Contact.create(req.body);
    res.redirect("/");
  } catch (error) {
    return res.render("500", {
      message: error.message,
    });
  }
}

export async function editContactForm(req, res) {
  let paramsId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramsId) {
    return res.render("404", {
      message: "Invalid Id",
    });
  } else {
    try {
      const singleContact = await Contact.findById(req.params.id);
      if (!singleContact) {
        return res.render("404", {
          message: "Contact not found!",
        });
      }
      res.render("update-contact", { singleContact });
    } catch (error) {
      return res.render("500", {
        message: error.message,
      });
    }
  }
}

// This time post() method we are using for put purpose
// because of we dont have a PUT method in html form
export async function updateContactForm(req, res) {
  let paramsId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramsId) {
    return res.render("404", {
      message: "Invalid Id",
    });
  } else {
    try {
      await Contact.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/");
    } catch (error) {
      return res.render("500", {
        message: error.message,
      });
    }
  }
}

// This time get() method we are using for the delete purpose
// because of we dont have a Delete methos in html form
export async function deleteContact(req, res) {
  let paramsId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramsId) {
    return res.render("404", {
      message: "Invalid Id",
    });
  } else {
    try {
      await Contact.findByIdAndDelete(req.params.id);
      res.redirect("/");
    } catch (error) {
      return res.render("500", {
        message: error.message,
      });
    }
  }
}
