// import express from "express";
// import { registerUser, loginUser } from "../controllers/authController.js";

// const router = express.Router();

// // Register
// router.post("/register", registerUser);

// // Login
// router.post("/login", loginUser);

// export default router;



// import express from "express";
// import {
//   registerUser,
//   loginUser,
//   verifyOTP,
//   resendOTP
// } from "../controllers/authController.js";

// const router = express.Router();

// // Register (send OTP)
// router.post("/register", registerUser);

// // Verify OTP
// router.post("/verify-otp", verifyOTP);

// // Resend OTP
// router.post("/resend-otp", resendOTP);

// // Login (only after verification)
// router.post("/login", loginUser);

// export default router;





import express from "express";
import User from "../models/User.js";

import {
  registerUser,
  loginUser,
  verifyOTP,
  resendOTP
} from "../controllers/authController.js";

const router = express.Router();

// Register (send OTP)
router.post("/register", registerUser);

// Verify OTP
router.post("/verify-otp", verifyOTP);

// Resend OTP
router.post("/resend-otp", resendOTP);

// Login
router.post("/login", loginUser);

// =========================
// GET ALL USERS FOR ADMIN
// =========================
router.get("/users", async (req, res) => {

  try {

    const users = await User.find()
      .select("-password");

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
});
// =========================
// UPDATE USER ROLE
// =========================
router.put("/users/:id", async (req, res) => {

  try {

    const updatedUser =
      await User.findByIdAndUpdate(

        req.params.id,

        {
          role: req.body.role
        },

        {
          new: true
        }
      );

    res.status(200).json(updatedUser);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
});

export default router;