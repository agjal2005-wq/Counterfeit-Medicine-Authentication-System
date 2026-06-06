// import { Box, Paper, Avatar, Typography, Button } from "@mui/material";
// import bgImg from "../../img/bg.png";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import TimelineOppositeContent, {
//   timelineOppositeContentClasses,
// } from "@mui/lab/TimelineOppositeContent";
// import dayjs from "dayjs";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../../api/axios";

// export default function Product() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // qrToken comes from ScannerPage
//   const qrToken = location.state?.qrData;

//   const [product, setProduct] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [isSold, setIsSold] = useState(false);

//   useEffect(() => {
//     if (!qrToken) return;

//     verifyProduct();
//   }, [qrToken]);

//   // -------------------------------
//   // VERIFY PRODUCT USING BACKEND
//   // -------------------------------
//   const verifyProduct = async () => {
//     try {
//       const response = await api.get(`/products/verify/${qrToken}`);

//       if (!response.data.verified) {
//         navigate("/fake-product");
//         return;
//       }

//       const productData = response.data.product;

//       setProduct(productData);
//       setIsSold(productData.metadata?.isSold || false);

//       // If backend provides history:
//       if (productData.metadata?.history) {
//         setHistory(productData.metadata.history);
//       }

//     } catch (err) {
//       console.log(err);
//       navigate("/fake-product");
//     }
//   };

//   const handleBack = () => navigate(-1);

//   const renderHistory = () => {
//     if (!history.length)
//       return (
//         <Typography sx={{ textAlign: "center", mt: 2 }}>
//           No history available.
//         </Typography>
//       );

//     return history.map((item, i) => (
//       <TimelineItem key={i}>
//         <TimelineOppositeContent color="textSecondary">
//           {dayjs(item.timestamp).format("HH:mm A")}{" "}
//           {dayjs(item.timestamp).format("MM/DD/YYYY")}
//         </TimelineOppositeContent>

//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>

//         <TimelineContent sx={{ py: "12px", px: 2 }}>
//           <Typography>Actor: {item.actor}</Typography>
//           <Typography>Location: {item.location}</Typography>
//         </TimelineContent>
//       </TimelineItem>
//     ));
//   };

//   if (!product)
//     return (
//       <Typography sx={{ color: "white", textAlign: "center", mt: 10 }}>
//         Loading product...
//       </Typography>
//     );

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${bgImg})`,
//         minHeight: "80vh",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         paddingTop: "50px",
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           width: "420px",
//           margin: "auto",
//           padding: "25px",
//           backgroundColor: "#e3eefc",
//           borderRadius: "10px",
//         }}
//       >
//         <Typography
//           variant="h5"
//           sx={{
//             textAlign: "center",
//             fontWeight: "bold",
//             mb: 2,
//           }}
//         >
//           ✅ Authentic Product
//         </Typography>

//         {/* Basic product details */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             mb: 3,
//           }}
//         >
//           <Avatar
//             alt={product.name}
//             sx={{
//               width: 90,
//               height: 90,
//               backgroundColor: "#3f51b5",
//               mr: 2,
//             }}
//           >
//             {product.name[0]}
//           </Avatar>

//           <Box>
//             <Typography variant="h6">{product.name}</Typography>
//             <Typography variant="body2">
//               Serial: {product.serialNumber}
//             </Typography>
//             <Typography variant="body2">
//               Batch: {product.batchNumber || "Not Available"}
//             </Typography>
//             <Typography variant="body2">
//               Status: {product.status}
//             </Typography>
//           </Box>
//         </Box>

//         {/* Metadata */}
//         <Typography variant="body1" sx={{ mb: 1 }}>
//           <strong>Manufacture Date:</strong>{" "}
//           {product.manufactureDate
//             ? dayjs(product.manufactureDate).format("MMM DD, YYYY")
//             : "Unknown"}
//         </Typography>

//         <Typography variant="body1" sx={{ mb: 1 }}>
//           <strong>Expiry Date:</strong>{" "}
//           {product.expiryDate
//             ? dayjs(product.expiryDate).format("MMM DD, YYYY")
//             : "Unknown"}
//         </Typography>

//         <Typography variant="body1" sx={{ mb: 1 }}>
//           <strong>Last Location:</strong>{" "}
//           {product.metadata?.location || "Unknown"}
//         </Typography>

//         {/* Timeline */}
//         <Typography
//           variant="h6"
//           sx={{
//             textAlign: "center",
//             mt: 3,
//             mb: 1,
//           }}
//         >
//           Product History
//         </Typography>

//         <Timeline
//           sx={{
//             [`& .${timelineOppositeContentClasses.root}`]: {
//               flex: 0.2,
//             },
//           }}
//         >
//           {renderHistory()}

//           <TimelineItem>
//             <TimelineOppositeContent color="textSecondary">
//               {dayjs().format("HH:mm A")} {dayjs().format("MM/DD/YYYY")}
//             </TimelineOppositeContent>

//             <TimelineSeparator>
//               <TimelineDot />
//             </TimelineSeparator>

//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography>IsSold: {isSold.toString()}</Typography>
//             </TimelineContent>
//           </TimelineItem>
//         </Timeline>

//         {/* Back Button */}
//         <Button fullWidth sx={{ mt: 2 }} onClick={handleBack}>
//           Back
//         </Button>
//       </Paper>
//     </Box>
//   );
// }




import {
  Box,
  Paper,
  Avatar,
  Typography,
  Button,
} from "@mui/material";

import bgImg from "../../img/bg.png";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import useAuth from "../../hooks/useAuth";

import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import dayjs from "dayjs";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import api from "../../api/axios";

// BLOCKCHAIN
import { connectWallet }
  from "../../blockchain/connectWallet";

export default function Product() {


  const { auth } =
    useAuth();

  const navigate =
    useNavigate();

  const location =
    useLocation();


   const allowRetailerEdit =
  location.state?.allowRetailerEdit || false;



 // PRODUCT FROM SCANNER
const scannedProduct =
  location.state?.product;

  const [product,
    setProduct] =
    useState(null);

  const [history,
    setHistory] =
    useState([]);

  const [isSold,
    setIsSold] =
    useState(false);

  // BLOCKCHAIN SHIPMENT
  const [shipmentData,
    setShipmentData] =
    useState(null);

    const [scanHistory, setScanHistory] = useState([]);

  // =========================
// VERIFY PRODUCT
// =========================
useEffect(() => {

  if (!scannedProduct) {

    navigate("/scanner");

    return;
  }

  const loadProduct = async () => {

    try {

      setProduct(scannedProduct);

      setIsSold(
        scannedProduct.metadata?.isSold || false
      );

      if (scannedProduct.metadata?.history) {

        setHistory(
          scannedProduct.metadata.history
        );
      }

      if (scannedProduct.scanHistory) {

  setScanHistory(
    scannedProduct.scanHistory
  );

}

      // FETCH BLOCKCHAIN SHIPMENT
      const contract =
        await connectWallet();

      if (contract) {

        const shipment =
          await contract.getShipment(
            scannedProduct.serialNumber
          );

        setShipmentData({

          status: shipment[0],

          location: shipment[1],

          updatedBy: shipment[2],

          updatedAt:
            shipment[3].toString(),
        });
      }

    } catch (err) {

      console.log(
        "Shipment Fetch Error:",
        err
      );
    }
  };

  loadProduct();

 }, [scannedProduct, navigate]);

const handleBack =
  () => navigate(-1);

  // =========================
  // PRODUCT HISTORY
  // =========================
  const renderHistory =
    () => {

      if (!history.length)

        return (
          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
            }}
          >
            No history available.
          </Typography>
        );

      return history.map(
        (item, i) => (

          <TimelineItem key={i}>

            <TimelineOppositeContent
              color="textSecondary"
            >
              {
                dayjs(
                  item.timestamp
                ).format("HH:mm A")
              }

              {" "}

              {
                dayjs(
                  item.timestamp
                ).format("MM/DD/YYYY")
              }

            </TimelineOppositeContent>

            <TimelineSeparator>

              <TimelineDot />

              <TimelineConnector />

            </TimelineSeparator>

            <TimelineContent
              sx={{
                py: "12px",
                px: 2,
              }}
            >

              <Typography>
                Actor:
                {" "}
                {item.actor}
              </Typography>

              <Typography>
                Location:
                {" "}
                {item.location}
              </Typography>

            </TimelineContent>

          </TimelineItem>
        ));
    };

  // =========================
  // LOADING
  // =========================
  if (!product)

    return (
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          mt: 10,
        }}
      >
        Loading product...
      </Typography>
    );

  return (

    <Box
      sx={{
        backgroundImage:
          `url(${bgImg})`,

        minHeight: "80vh",

        backgroundSize: "cover",

        backgroundRepeat:
          "no-repeat",

        paddingTop: "50px",
      }}
    >

      <Paper
        elevation={3}
        sx={{
          width: "450px",

          margin: "auto",

          padding: "25px",

          backgroundColor:
            "#e3eefc",

          borderRadius: "10px",
        }}
      >

        {/* TITLE */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",

            fontWeight: "bold",

            mb: 2,
          }}
        >
          ✅ Authentic Product
        </Typography>

        {/* PRODUCT DETAILS */}
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            mb: 3,
          }}
        >

          <Avatar
            alt={product.name}

            sx={{
              width: 90,

              height: 90,

              backgroundColor:
                "#3f51b5",

              mr: 2,
            }}
          >
            {product.name[0]}
          </Avatar>

          <Box>

            <Typography
              variant="h6"
            >
              {product.name}
            </Typography>

            <Typography
              variant="body2"
            >
              Serial:
              {" "}
              {product.serialNumber}
            </Typography>

            <Typography
              variant="body2"
            >
              Batch:
              {" "}
              {
                product.batchNumber
                || "Not Available"
              }
            </Typography>

            <Typography
              variant="body2"
            >
              Status:
              {" "}
              {product.status}
            </Typography>

          </Box>

        </Box>

        {/* DATES */}
        <Typography
          variant="body1"
          sx={{ mb: 1 }}
        >

          <strong>
            Manufacture Date:
          </strong>

          {" "}

          {
            product.manufactureDate

              ? dayjs(
                product.manufactureDate
              ).format(
                "MMM DD, YYYY"
              )

              : "Unknown"
          }

        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 1 }}
        >

          <strong>
            Expiry Date:
          </strong>

          {" "}

          {
            product.expiryDate

              ? dayjs(
                product.expiryDate
              ).format(
                "MMM DD, YYYY"
              )

              : "Unknown"
          }

        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 1 }}
        >

          <strong>
            Last Location:
          </strong>

          {" "}

          {
            product.metadata?.location
            || "Unknown"
          }

        </Typography>

        {/* =========================
    BLOCKCHAIN FLOW
========================= */}
        {shipmentData && (

          <Paper
            elevation={2}
            sx={{
              p: 2,
              mt: 3,
              mb: 2,
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          >

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#0F1B4C",
              }}
            >
              Medicine Supply Chain
            </Typography>

            {/* =====================
        MANUFACTURER
    ===================== */}
            <Box sx={{ mb: 3 }}>

              <Typography
                sx={{
                  fontWeight: "700",
                  color: "#1565c0",
                  fontSize: "18px",
                }}
              >
                🏭 Manufacturer
              </Typography>

              <Typography sx={{ mt: 1 }}>

                {
                  product.manufacturer?.name
                  || product.createdBy?.name
                  || "Unknown Manufacturer"
                }

              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Product Created Successfully
              </Typography>

            </Box>

            {/* ARROW */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "24px",
                mb: 2,
              }}
            >
              ↓
            </Typography>

            {/* =====================
        SUPPLIER
    ===================== */}
            <Box sx={{ mb: 3 }}>

              <Typography
                sx={{
                  fontWeight: "700",
                  color: "#ef6c00",
                  fontSize: "18px",
                }}
              >
                🚚 Supplier
              </Typography>

              <Typography sx={{ mt: 1 }}>

                Shipment Status:

                {" "}

                {
                  shipmentData.status
                  || "Not Updated"
                }

              </Typography>

              <Typography>

                Current Location:

                {" "}

                {
                  shipmentData.location
                  || "Unknown"
                }

              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >

                Wallet:

                {" "}

                {
                  shipmentData.updatedBy
                    ?.slice(0, 10)
                }

                ...

              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >

                Updated At:

                {" "}

                {
                  shipmentData.updatedAt
                    ? dayjs.unix(
                      Number(
                        shipmentData.updatedAt
                      )
                    ).format(
                      "MMM DD, YYYY h:mm A"
                    )
                    : "N/A"
                }

              </Typography>

            </Box>

            {/* ARROW */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "24px",
                mb: 2,
              }}
            >
              ↓
            </Typography>

            {/* =====================
        RETAILER
    ===================== */}
            <Box>

              <Typography
                sx={{
                  fontWeight: "700",
                  color: "#2e7d32",
                  fontSize: "18px",
                }}
              >
                🏪 Retailer Verification
              </Typography>

              <Typography sx={{ mt: 1 }}>
                QR Code Verified Successfully
              </Typography>

              <Typography>
                Medicine Authentic ✅
              </Typography>

            </Box>

            {/* VERIFIED */}
            <Typography
              sx={{
                mt: 3,
                color: "green",
                fontWeight: "700",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              Blockchain Verified ✅
            </Typography>

          </Paper>
        )}
        {/* HISTORY */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",

            mt: 3,

            mb: 1,
          }}
        >
          Product History
        </Typography>

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]:
            {
              flex: 0.2,
            },
          }}
        >

          {renderHistory()}

          <TimelineItem>

            <TimelineOppositeContent
              color="textSecondary"
            >

              {dayjs().format("HH:mm A")}

              {" "}

              {dayjs().format("MM/DD/YYYY")}

            </TimelineOppositeContent>

            <TimelineSeparator>

              <TimelineDot />

            </TimelineSeparator>

            <TimelineContent
              sx={{
                py: "12px",
                px: 2,
              }}
            >

              {/* <Box sx={{ mt: 2 }}>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  Retailer Sale Status
                </Typography>

                {
                  allowRetailerEdit
                  ?(

                      <select

                        value={
                          product.metadata?.isSold
                            ? "true"
                            : "false"
                        }

                        onChange={async (e) => {

                          try {

                            const updatedValue =
                              e.target.value === "true";

                            // =====================
                            // UPDATE DATABASE
                            // =====================
                            await api.put(

                              `/products/${product._id}`,

                              {
                                metadata: {

                                  ...product.metadata,

                                  isSold:
                                    updatedValue,
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
                            // UPDATE UI
                            // =====================
                            setProduct({

                              ...product,

                              metadata: {

                                ...product.metadata,

                                isSold:
                                  updatedValue,
                              },
                            });

                            

                          } catch (err) {

                            console.log(err);
                          }
                        }}

                        style={{

                          width: "100%",

                          padding: "10px",

                          borderRadius: "8px",

                          border:
                            "1px solid #ccc",
                        }}
                      >

                        <option value="false">
                          false
                        </option>

                        <option value="true">
                          true
                        </option>

                      </select>

                    )

                    : (

                      <Typography
                        sx={{
                          color:
                            product.metadata?.isSold
                              ? "green"
                              : "red",

                          fontWeight: "bold",
                        }}
                      >

                        {
                          product.metadata?.isSold
                            ? "true"
                            : "false"
                        }

                      </Typography>
                    )
                }

              </Box>

              <Typography>
                Current Role: {auth?.role}
              </Typography> */}


{auth?.role === "retailer" ? (

  <Box sx={{ mt: 2 }}>

    <Typography
      sx={{
        fontWeight: "bold",
        mb: 1,
      }}
    >
      Retailer Sale Status
    </Typography>

    {
      allowRetailerEdit ? (

        <select
          value={
            product.metadata?.isSold
              ? "true"
              : "false"
          }

          onChange={async (e) => {

            try {

              const updatedValue =
                e.target.value === "true";

              await api.put(

                `/products/${product._id}`,

                {
                  metadata: {
                    ...product.metadata,
                    isSold: updatedValue,
                  },
                },

                {
                  headers: {
                    Authorization:
                      `Bearer ${auth.token}`,
                  },
                }
              );

              setProduct({

                ...product,

                metadata: {

                  ...product.metadata,

                  isSold:
                    updatedValue,
                },
              });

            } catch (err) {

              console.log(err);
            }
          }}

          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >

          <option value="false">
            false
          </option>

          <option value="true">
            true
          </option>

        </select>

      ) : (

        <Typography
          sx={{
            color:
              product.metadata?.isSold
                ? "green"
                : "red",

            fontWeight: "bold",
          }}
        >
          {
            product.metadata?.isSold
              ? "true"
              : "false"
          }
        </Typography>

      )
    }

    <Typography sx={{ mt: 1 }}>
      Current Role: {auth?.role}
    </Typography>

  </Box>

) : (

  <Box sx={{ mt: 2 }}>

  <Typography
    sx={{
      color:
        product.metadata?.isSold
          ? "green"
          : "red",

      fontWeight: "bold",
      fontSize: "18px",
    }}
  >

    {
      product.metadata?.isSold
        ? "✅ Medicine Sold by Retailer"
        : "⚠️ Medicine Not Yet Released for Sale"
    }

  </Typography>

  <Typography sx={{ mt: 1 }}>

    {
      product.metadata?.isSold
        ? "This medicine is authentic and available to customers."
        : "This medicine is authentic but has not yet been marked as sold by the retailer."
    }

  </Typography>

  <Typography sx={{ mt: 1 }}>
    Blockchain Verified ✅
  </Typography>

</Box>

)}



            </TimelineContent>

          </TimelineItem>

        </Timeline>


        {/* =========================
    USER SCAN HISTORY
========================= */}

<Paper
  elevation={2}
  sx={{
    p: 2,
    mt: 3,
    mb: 2,
    borderRadius: "10px",
    backgroundColor: "#fff",
  }}
>

  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      mb: 2,
      color: "#0F1B4C",
    }}
  >
    User Scan History
  </Typography>

  {
    scanHistory.length === 0 ? (

      <Typography>
        No user scans available.
      </Typography>

    ) : (

      scanHistory.map((scan, index) => (

        <Paper
          key={index}
          sx={{
            p: 2,
            mb: 1,
            backgroundColor: "#f5f5f5",
          }}
        >

          <Typography>
            <strong>User:</strong>
            {" "}
            {scan.userId}
          </Typography>

          <Typography>
            <strong>Location:</strong>
            {" "}
            {scan.location}
          </Typography>

          <Typography>
            <strong>Time:</strong>
            {" "}
            {
              dayjs(scan.timestamp)
              .format(
                "MMM DD, YYYY h:mm A"
              )
            }
          </Typography>

        </Paper>

      ))
    )
  }

</Paper>

        {/* BACK BUTTON */}
        <Button
          fullWidth

          sx={{ mt: 2 }}

          onClick={handleBack}
        >
          Back
        </Button>

      </Paper>

    </Box>
  );
}