// import express from "express";
// import { auth } from "../middleware/auth.js";
// import {
//   createProduct,
//   verifyQR,
//   getProduct,
//   getAllProducts,
//   updateProduct,
//   deleteProduct
// } from "../controllers/productController.js";

// const router = express.Router();

// // POST → Create product (manufacturer only)
// router.post("/", auth, createProduct);

// // GET → Verify product by QR token (public route)
// router.get("/verify/:qrToken", verifyQR);

// // GET → Get single product details
// router.get("/:id", auth, getProduct);

// // GET → Get all products (admin or manufacturer)
// router.get("/", auth, getAllProducts);

// // PUT → Update product
// router.put("/:id", auth, updateProduct);

// // DELETE → Delete product
// router.delete("/:id", auth, deleteProduct);

// export default router;


// import express from "express";
// import { auth } from "../middleware/auth.js";
// import {
//   createProduct,
//   verifyQR,
//   getProduct,
//   getAllProducts,
//   updateProduct,
//   deleteProduct,
//   getProductBySerial
// } from "../controllers/productController.js";

// const router = express.Router();

// // POST → Create product (manufacturer only)
// router.post("/", auth, createProduct);

// // GET → Verify product by QR token (public route)
// router.get("/verify/:qrToken", verifyQR);

// //  NEW → Find product using serial number
// router.get("/serial/:serialNumber", auth, getProductBySerial);

// // GET → Get single product details
// router.get("/:id", auth, getProduct);

// // GET → Get all products (admin or manufacturer)
// router.get("/", auth, getAllProducts);

// // PUT → Update product
// router.put("/:id", auth, updateProduct);

// // DELETE → Delete product
// router.delete("/:id", auth, deleteProduct);

// export default router;



import express from "express";
import multer from "multer";
import path from "path";

import { auth } from "../middleware/auth.js";

import {
  createProduct,
  verifyQR,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductBySerial,
} from "../controllers/productController.js";

const router = express.Router();

/* =========================
   MULTER STORAGE
========================= */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

/* =========================
   ROUTES
========================= */

// CREATE PRODUCT
router.post(
  "/",
  auth,
  upload.single("image"),
  createProduct
);

// VERIFY QR
router.get("/verify/:qrToken", verifyQR);

// GET BY SERIAL
router.get(
  "/serial/:serialNumber",
  auth,
  getProductBySerial
);

// GET SINGLE PRODUCT
router.get("/:id", auth, getProduct);

// GET ALL PRODUCTS
router.get("/", auth, getAllProducts);

// UPDATE PRODUCT
router.put("/:id", auth, updateProduct);

// DELETE PRODUCT
router.delete("/:id", auth, deleteProduct);

export default router;
