// import { Box, Paper, Typography, Autocomplete } from "@mui/material";
// import bgImg from "../../img/bg.png";
// import { TextField, Button } from "@mui/material";
// import { useEffect, useState } from "react";
// import dayjs from "dayjs";
// import { useLocation, useNavigate } from "react-router-dom";
// import api from "../../api/axios";
// import useAuth from "../../hooks/useAuth";

// const saleOptions = ["true", "false"];

// export default function UpdateProductDetails() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { auth } = useAuth();

//   // Product forwarded from UpdateProduct.jsx
//   const product = location.state?.product;

//   const [currentDate, setCurrentDate] = useState(Date.now());
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [fullLocation, setFullLocation] = useState("");
//   const [isSold, setIsSold] = useState(
//     product?.metadata?.isSold ? "true" : "false"
//   );
//   const [loading, setLoading] = useState("");

//   // ----------------------------
//   // Fetch location + time
//   // ----------------------------
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((pos) => {
//       setLatitude(pos.coords.latitude);
//       setLongitude(pos.coords.longitude);
//     });

//     setCurrentDate(Date.now());
//   }, []);

//   // Convert GPS → readable address
//   useEffect(() => {
//     if (!latitude || !longitude) return;

//     fetch(
//       `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setFullLocation(data?.display_name || "Unknown Location");
//       })
//       .catch((err) => console.log(err));
//   }, [latitude, longitude]);

//   // ----------------------------
//   // UPDATE PRODUCT API
//   // ----------------------------
//   const handleSubmit = async () => {
//     setLoading("Updating product...");

//     try {
//       const updated = await api.put(
//         `/products/${product._id}`,
//         {
//           metadata: {
//             ...product.metadata, // merge old metadata
//             lastUpdated: new Date(),
//             location: fullLocation,
//             latitude,
//             longitude,
//             isSold: isSold === "true",
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${auth.token}`,
//           },
//         }
//       );

//       setLoading("Product updated successfully!");

//       setTimeout(() => navigate("/profile"), 1200);
//     } catch (error) {
//       console.log(error);
//       setLoading("Failed to update product.");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${bgImg})`,
//         minHeight: "100vh",
//         paddingTop: "50px",
//         backgroundSize: "cover",
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           width: "450px",
//           margin: "auto",
//           padding: "25px",
//           backgroundColor: "#e3eefc",
//           borderRadius: "10px",
//         }}
//       >
//         <Typography variant="h4" textAlign="center" mb={3}>
//           Update Product
//         </Typography>

//         <TextField
//           fullWidth
//           label="Product Name"
//           disabled
//           value={product?.name}
//           sx={{ mb: 2 }}
//         />

//         <TextField
//           fullWidth
//           label="Serial Number"
//           disabled
//           value={product?.serialNumber}
//           sx={{ mb: 2 }}
//         />

//         <TextField
//           fullWidth
//           label="Current Location"
//           disabled
//           multiline
//           minRows={2}
//           value={fullLocation}
//           sx={{ mb: 2 }}
//         />

//         <TextField
//           fullWidth
//           label="Date & Time"
//           disabled
//           value={dayjs(currentDate).format("MMMM D, YYYY h:mm A")}
//           sx={{ mb: 2 }}
//         />

//         {/* Only retailers NOT suppliers should see this */}
//         {auth.role !== "supplier" && (
//           <Autocomplete
//             disablePortal
//             options={saleOptions}
//             value={isSold}
//             onChange={(e, val) => setIsSold(val)}
//             renderInput={(params) => (
//               <TextField {...params} label="Is Sold?" sx={{ mb: 2 }} />
//             )}
//           />
//         )}

//         {loading && (
//           <Typography textAlign="center" sx={{ mt: 1 }}>
//             {loading}
//           </Typography>
//         )}

//         <Button
//           variant="contained"
//           fullWidth
//           onClick={handleSubmit}
//           sx={{ mt: 2 }}
//         >
//           Save Changes
//         </Button>

//         <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate(-1)}>
//           Back
//         </Button>
//       </Paper>
//     </Box>
//   );
// }




import {
  Box,
  Paper,
  Typography,
  Autocomplete,
  Divider,
} from "@mui/material";

import bgImg from "../../img/bg.png";

import {
  TextField,
  Button,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

import dayjs from "dayjs";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import api from "../../api/axios";

import useAuth from "../../hooks/useAuth";

// BLOCKCHAIN
import { connectWallet }
from "../../blockchain/connectWallet";

const saleOptions = [
  "true",
  "false"
];

export default function UpdateProductDetails() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const { auth } =
    useAuth();

  // PRODUCT FROM PREVIOUS PAGE
  const product =
    location.state?.product;

  const [currentDate,
    setCurrentDate] =
      useState(Date.now());

  const [latitude,
    setLatitude] =
      useState("");

  const [longitude,
    setLongitude] =
      useState("");

  const [fullLocation,
    setFullLocation] =
      useState("");

  const [isSold,
    setIsSold] =
      useState(
        product?.metadata?.isSold
          ? "true"
          : "false"
      );

  const [loading,
    setLoading] =
      useState("");

  // BLOCKCHAIN SHIPMENT
  const [shipmentData,
    setShipmentData] =
      useState(null);

  // =========================
  // FETCH BLOCKCHAIN SHIPMENT
  // =========================
  useEffect(() => {

    const fetchShipment =
      async () => {

      try {

        const contract =
          await connectWallet();

        if (!contract) return;

        const shipment =
          await contract.getShipment(
            product?.serialNumber
          );

        setShipmentData({

          status:
            shipment[0],

          location:
            shipment[1],

          updatedBy:
            shipment[2],

          updatedAt:
            shipment[3].toString(),
        });

      } catch (error) {

        console.log(error);
      }
    };

    if (product?.serialNumber) {

      fetchShipment();
    }

  }, [product]);

  // =========================
  // GET LOCATION
  // =========================
  useEffect(() => {

    navigator.geolocation
      .getCurrentPosition((pos) => {

        setLatitude(
          pos.coords.latitude
        );

        setLongitude(
          pos.coords.longitude
        );
      });

    setCurrentDate(Date.now());

  }, []);

  // =========================
  // GPS TO ADDRESS
  // =========================
  useEffect(() => {

    if (!latitude || !longitude)
      return;

    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    )
      .then((res) => res.json())

      .then((data) => {

        setFullLocation(
          data?.display_name
          || "Unknown Location"
        );
      })

      .catch((err) =>
        console.log(err)
      );

  }, [latitude, longitude]);

  // =========================
// UPDATE PRODUCT
// =========================
const handleSubmit =
  async () => {

  setLoading(
    "Updating product..."
  );

  try {

    // =====================
    // UPDATE MONGODB
    // =====================
    await api.put(

      `/products/${product._id}`,

      {
        metadata: {

          ...product.metadata,

          lastUpdated:
            new Date(),

          location:
            fullLocation,

          latitude,

          longitude,

          isSold:
            isSold === "true",

          // =====================
          // DYNAMIC HISTORY FLOW
          // =====================
          history: [

            ...(product.metadata
              ?.history || []),

            {

              actor:
                auth.role,

              actorName:
                auth.name
                || "Unknown User",

              location:
                fullLocation,

              timestamp:
                new Date(),

              shipmentStatus:

                auth.role === "supplier"

                  ? "Shipment Updated"

                  : auth.role === "retailer"

                  ? "Retailer Verified"

                  : "Manufacturer Added Product",
            },
          ],
        },
      },

      {
        headers: {

          Authorization:
            `Bearer ${auth.token}`,
        },
      }
    );

    // =====================
    // BLOCKCHAIN UPDATE
    // =====================
    const contract =
      await connectWallet();

    if (contract) {

      const tx =
        await contract.updateShipment(

          product.serialNumber,

          auth.role === "supplier"

            ? "In Transit"

            : auth.role === "retailer"

            ? "Delivered"

            : "Created",

          fullLocation
        );

      await tx.wait();
    }

    setLoading(
      "Product updated successfully!"
    );

    setTimeout(() => {

      navigate("/profile");

    }, 1200);

  } catch (error) {

    console.log(error);

    setLoading(
      "Failed to update product."
    );
  }
};
  return (

    <Box
      sx={{
        backgroundImage:
          `url(${bgImg})`,

        minHeight: "100vh",

        paddingTop: "50px",

        backgroundSize: "cover",
      }}
    >

      <Paper
        elevation={3}
        sx={{
          width: "500px",

          margin: "auto",

          padding: "25px",

          backgroundColor:
            "#e3eefc",

          borderRadius: "10px",
        }}
      >

        {/* TITLE */}
        <Typography
          variant="h4"

          textAlign="center"

          mb={3}
        >
          Product Details
        </Typography>

        {/* PRODUCT INFO */}
        <TextField
          fullWidth

          label="Product Name"

          disabled

          value={product?.name}

          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth

          label="Serial Number"

          disabled

          value={
            product?.serialNumber
          }

          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth

          label="Current Location"

          disabled

          multiline

          minRows={2}

          value={fullLocation}

          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth

          label="Date & Time"

          disabled

          value={dayjs(
            currentDate
          ).format(
            "MMMM D, YYYY h:mm A"
          )}

          sx={{ mb: 2 }}
        />

        {/* RETAILER ONLY */}
        {auth.role !== "supplier" && (

          <Autocomplete

            disablePortal

            options={saleOptions}

            value={isSold}

            onChange={(e, val) =>
              setIsSold(val)
            }

            renderInput={(params) => (

              <TextField
                {...params}

                label="Is Sold?"

                sx={{ mb: 2 }}
              />
            )}
          />
        )}

        {/* =========================
            BLOCKCHAIN SHIPMENT
        ========================== */}
        {shipmentData && (

          <Paper
            elevation={2}

            sx={{
              p: 2,

              mt: 3,

              borderRadius: "10px",

              backgroundColor:
                "#ffffff",
            }}
          >

            <Typography
              variant="h6"

              sx={{
                fontWeight: "700",

                mb: 2,

                color: "#0F1B4C",
              }}
            >
              Blockchain Shipment Flow
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography sx={{ mb: 1 }}>
              <strong>
                Manufacturer:
              </strong>

              {" "}

              {product?.manufacturer?.name
                || "Manufacturer"}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>
                Shipment Status:
              </strong>

              {" "}

              {shipmentData.status
                || "Not Updated"}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>
                Current Location:
              </strong>

              {" "}

              {shipmentData.location
                || "N/A"}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>
                Supplier Wallet:
              </strong>

              {" "}

              {shipmentData.updatedBy}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>
                Updated At:
              </strong>

              {" "}

              {
                shipmentData.updatedAt !== "0"

                  ? dayjs(
                      Number(
                        shipmentData.updatedAt
                      ) * 1000
                    ).format(
                      "MMMM D, YYYY h:mm A"
                    )

                  : "N/A"
              }
            </Typography>

            <Typography
              sx={{
                mt: 2,

                color: "green",

                fontWeight: "700",
              }}
            >
              Blockchain Verified ✅
            </Typography>

          </Paper>
        )}

        {/* LOADING */}
        {loading && (

          <Typography
            textAlign="center"

            sx={{ mt: 1 }}
          >
            {loading}
          </Typography>
        )}

        {/* BUTTONS */}
        <Button
          variant="contained"

          fullWidth

          onClick={handleSubmit}

          sx={{ mt: 3 }}
        >
          Save Changes
        </Button>

        <Button
          fullWidth

          sx={{ mt: 1 }}

          onClick={() =>
            navigate(-1)
          }
        >
          Back
        </Button>

      </Paper>

    </Box>
  );
}
