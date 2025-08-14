import officerModel from "../../model/officer.js";

// create officer by Admin
export const createOfficer = async (req, res) => {
    try {
        const { userName, email, gander, age, phoneNumber, desigination, profilePhoto } = req.body;

        // Validate required fields
        if (!userName || !email || !gander || !age || !phoneNumber || !desigination) {
            return res.status(400).json({
                success: false,
                message: "All fields are required except profilePhoto"
            });
        }

        const officerObj = new officerModel({
            userName: userName,
            email: email,
            gander: gander,
            age: age,
            phoneNumber: phoneNumber,
            desigination: desigination,
            profilePhoto: profilePhoto || ""
        });

        const saveOfficer = await officerObj.save();

        // checking user created
        if (saveOfficer) {
            return res.status(201).json({
                success: true,
                message: "Officer Onboarding successful",
                data: saveOfficer
            });
        }
        return res.status(400).json({
            success: false,
            message: "Unable to create officer"
        });
    } catch (error) {
        console.error("Error creating officer:", error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
};

// Get All Officers
export const getAllOfficers = async (req, res) => {
    try {
        const officers = await officerModel.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            data: officers,
            count: officers.length
        });
    } catch (error) {
        console.error("Error fetching officers:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch officers"
        });
    }
};