import officerModel from "../../model/officer.js";

// create officer by Admin
export const createOfficer = async (req ,res) =>{
    try{
        const {userName,email,gander,age,phoneNumber,desigination} = req.body

        const officerObj = new officerModel({
            userName:userName,
            email:email,
            gander:gander,
            age:age,
            phoneNumber:phoneNumber,
            desigination:desigination,
            profilePhoto:null
        })
        
        const saveOfficer = await officerObj.save();
        
        //checking user created
        if(saveOfficer){
            return res.status(200).send({
                status:true,
                message: "Officer Onboarding succeesss"
            })
        }
        return res.status(400).send({
            status: false,
            message:"unable to create officer"
        })
    }
    catch(error){
        return res.send({
            status:false,
            message:error.message
        })
    }
}


// Get All Officers
export const getAllOfficers = async (req, res) => {
  try {
    const officers = await officerModel.find();
    res.status(200).json({
      success: true,
      data: officers
    });
  } catch (error) {
    console.error("Error fetching officers:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch officers"
    });
  }
};

// Delete Officer by Name
export const deleteOfficer = async (req, res) => {
    try {
        const { name } = req.params;

        if(!name){
            return res.status(400).send({
                status: false,
                message: "Officer name is required"
            })
        }

        const deleted = await officerModel.findOneAndDelete({ userName: name });

        if(!deleted){
            return res.status(404).send({
                status: false,
                message: "Officer not found"
            })
        }

        return res.status(200).send({
            status: true,
            message: "Officer deleted successfully"
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}