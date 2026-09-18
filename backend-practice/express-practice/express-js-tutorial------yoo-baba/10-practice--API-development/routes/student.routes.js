
import express from "express";
import Student from "../models/student.model.js";
import multer from "multer";
import path from "path";
import fs from 'fs'; // Standard synchronous/callback version

// sample
// const router = express.Router();
// router.get("/", getContacts);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    const newFileName = `abc${Date.now()}${path.extname(file.originalname)}`;
    cb(null, newFileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(new Error("File type not supported"), false);
  }
};

const upload = multer({
  storage, // mandatory
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 3, // 3MB
  },
});


const router = express.Router();

// get all students
router.get("/students", async (req, res)=> {
    try {
        const students = await Student.find();
        res.status(200).json({
            message: "All students fetched successfully!",
            data: students
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


// get single student
router.get("/students/:id", async (req, res)=> {
    try {
        const student = await Student.findById(req.params.id);
        if(!student) {
            return res.status(404).json({
                message: "student not found"
            })
        }
        res.status(200).json({
            message: "student fetched successfully!",
            data: student
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


// add new student
router.post("/students", upload.single("profilePicture"), async (req, res)=> {
    try {
        // const { firstName, lastName, email, phone, gender, profilePicture } = await Student.create(req.body);
        // const newStudent = await Student.create(req.body);
        const studentObj = new Student(req.body);
        if(req.file) {
            studentObj.profilePicture = req.file.filename;
        }

        const newStudent = await studentObj.save();

        res.status(201).json({
            message: "student created successfully!",
            data: newStudent
        });
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});


// update a student
router.put("/students/:id", upload.single("profilePicture")  , async (req, res)=> {
    try {
        const existingStudent = await Student.findById(req.params.id)
        if(!existingStudent) {
            if(req.file.filename) {
                const filePath = path.join("./public/uploads/", req.file.filename);
                fs.unlink(filePath, (err)=> {
                    if(err) console.log("Failed to delete", err);
                });

            }
            return res.status(404).json({
                message: "Student not found!"
            })
        }

        if(req.file) {
            if(existingStudent.profilePicture) {
                const filePath = path.join("./public/uploads/", existingStudent.profilePicture);
                fs.unlink(filePath, (err)=> {
                    if(err) console.log("Failed to delete", err);
                });

            }
            req.body.profilePicture = req.file.filename;
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true, runValidators: true}
        );

        // if(!updatedStudent) {
        //     return res.status(404).json({
        //         message: "Student not found!"
        //     })
        // }
        res.status(201).json({
            message: "student updated successfully!",
            data: updatedStudent
        })

        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});


// delete a student
router.delete("/students/:id", async (req, res)=> {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if(!deletedStudent) {
            return res.status(404).json({
                message: "Student did not delete!"
            });
        }
        if(deletedStudent.profilePicture) {
            const filePath = path.join("./public/uploads/", deletedStudent.profilePicture);
            fs.unlink(filePath, (err)=> {
                if(err) console.log("Failed to delete", err);
            });
        }
        res.status(201).json({
            message: "Student has been deleted!"
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});





// export default router; // default export
export { router as studentRoutes }; // named export
