import UserModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password, mobileNumber } = req.body;

    // validate data here
    if (!name || !email || !password || !mobileNumber) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await UserModel.create({
      name,
      email,
      password,
      mobileNumber,
    });

    res.status(201).json({
      success: true,
      message: "user created succcessfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while creating the post",
      error: error.message,
    });
  }
};

export const userDelete = async (req, res) => {
  try {
    let id = req.params.id;

    const deleteUser = await UserModel.findByIdAndDelete({ _id: id });

    if (!deleteUser) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while deleting user",
      error: error.message,
    });
  }
};