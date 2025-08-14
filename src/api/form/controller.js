// import formModel from "../../model/form.js";

// // Create Form
// export const createForm = async (req, res) => {
//     try {
//         const { title, fields, officerId } = req.body;

//         const formObj = new formModel({
//             title,
//             fields,
//             officerId
//         });

//         const savedForm = await formObj.save();

//         if (savedForm) {
//             return res.status(201).json({
//                 success: true,
//                 message: "Form created successfully",
//                 data: savedForm
//             });
//         }

//         return res.status(400).json({
//             success: false,
//             message: "Unable to create form"
//         });
//     } catch (error) {
//         console.error("Error creating form:", error);
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };

// // Get All Forms
// export const getAllForms = async (req, res) => {
//     try {
//         const forms = await formModel.find().populate('officerId', 'userName email');
//         res.status(200).json({
//             success: true,
//             data: forms
//         });
//     } catch (error) {
//         console.error("Error fetching forms:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to fetch forms"
//         });
//     }
// };

// // Get Form by ID
// export const getFormById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const form = await formModel.findById(id).populate('officerId', 'userName email');
        
//         if (!form) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Form not found"
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: form
//         });
//     } catch (error) {
//         console.error("Error fetching form:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to fetch form"
//         });
//     }
// };

// // Update Form
// export const updateForm = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updateData = { ...req.body, updatedAt: Date.now() };

//         const updatedForm = await formModel.findByIdAndUpdate(
//             id,
//             updateData,
//             { new: true, runValidators: true }
//         );

//         if (!updatedForm) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Form not found"
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Form updated successfully",
//             data: updatedForm
//         });
//     } catch (error) {
//         console.error("Error updating form:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to update form"
//         });
//     }
// };

// // Delete Form
// export const deleteForm = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedForm = await formModel.findByIdAndDelete(id);

//         if (!deletedForm) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Form not found"
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Form deleted successfully"
//         });
//     } catch (error) {
//         console.error("Error deleting form:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to delete form"
//         });
//     }
// };
