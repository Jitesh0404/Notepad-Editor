const User = require("../models/userModal");

const addMember = async (req, res,next) => {
    const {userName,members} = req.body;
    if(!userName || !members){
        return res.status(403).json({success:false,message:"Please provide both user and members"});
    }
    try {
        // Checking whether member exists in database or not
        const userMember = await User.findOne({userName:members});
        if(!userMember){
            return res.status(403).json({success:false,message:"Member does not exists"});
        }
        // Checking wether member is already added with user or not
        const isMemberPresent = await User.aggregate([
            {$match:{userName:userName}},
            {$match:{members:{$in:[members]}}}
        ])
        if(isMemberPresent.length>0){
            return res.status(403).json({success:false,message:"Member already added."});
        }   
        const user = await User.findOneAndUpdate({userName},{$push:{members}});
        if(!user){
            return res.status(403).json({success:false,message:"User does not exists"});
        }
        return res.status(200).json({success:true,message:"Member added successfully."});
    } catch (error) {
        console.log("Error in addMember : ",error.message);
        next(error)
    }
}

module.exports = {
    addMember
}