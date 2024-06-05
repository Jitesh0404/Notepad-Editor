const User = require("../models/userModal");
const errorHandler = require("../utils/errorHandler");

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
        // Extracting members from user
        const {profileImg} = userMember;
        // Checking wether member is already added with user or not
        const isMemberPresent = await User.aggregate([
            {
              $match: {
                "members": {
                  "$elemMatch": {
                    "members": members
                  }
                }
              }
            }
          ])
          console.log("isMemberPresent : ",isMemberPresent);
        if(isMemberPresent.length>0){
            return res.status(403).json({success:false,message:"Member already added."});
        }   
        const user = await User.findOneAndUpdate({userName},{$push:{members:{profileImg,members}}});
        if(!user){
            return res.status(403).json({success:false,message:"User does not exists"});
        }
        return res.status(200).json({success:true,message:"Member added successfully."});
    } catch (error) {
        console.log("Error in addMember : ",error.message);
        next(error)
    }
}

const listMembers = async(req,res,next)=>{
    const {userName} = req.query;
    if(!userName){
        return res.status(403).json({success:false,message:"Please provide username"});
    }
    try {
        const user = await User.findOne({userName});
        if(!user){
            return res.status(403).json({success:false,message:"User does not exists"});
        }
        const {password,...rest} = user._doc;
        return res.status(200).json({success:true,data:rest.members});
    } catch (error) {
        next(errorHandler(403,error.message))
    }
}
module.exports = {
    addMember,
    listMembers
}