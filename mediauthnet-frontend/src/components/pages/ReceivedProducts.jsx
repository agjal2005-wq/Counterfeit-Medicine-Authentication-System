import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  Chip,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Inventory2Icon from "@mui/icons-material/Inventory2";

import bgImage from "../../img/bg.png";

import { connectWallet } from "../../blockchain/connectWallet";

const ReceivedProducts = () => {

  const [serialNumber, setSerialNumber] = useState("");

  const [shipmentData, setShipmentData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // =========================
  // FETCH SHIPMENT DETAILS
  // =========================
  const fetchShipment = async () => {

    try {

      setError("");

      if (!serialNumber) {

        alert("Please enter serial number");

        return;
      }

      setLoading(true);

      const contract =
        await connectWallet();

      if (!contract) {

        alert("Wallet connection failed");

        setLoading(false);

        return;
      }

      // GET SHIPMENT
      const shipment =
        await contract.getShipment(serialNumber);
        console.log("Shipment:", shipment);


      // GET PRODUCT
      const product =
        await contract.getProduct(serialNumber);
        console.log("Product:", product);

      setShipmentData({

        name: product[0],

        serial: product[1],

        manufacturer: product[2],

        timestamp: Number(product[3]),

        status: shipment[0],

        location: shipment[1],

        updatedBy: shipment[2],

        updatedAt: Number(shipment[3]),
      });

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

      setError("No shipment data found");
    }
  };

  return (

    <Box
      sx={{
        minHeight: "100vh",

        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: "30px",
      }}
    >

      <Paper
        elevation={8}
        sx={{
          width: "550px",

          padding: "35px",

          borderRadius: "20px",

          backgroundColor: "rgba(255,255,255,0.94)",

          backdropFilter: "blur(10px)",
        }}
      >

        {/* TITLE */}
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            fontWeight: "900",
            color: "#0F1B4C",
            mb: 1,
          }}
        >
          Verified Medicines
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            color: "#555",
            mb: 4,
          }}
        >
          View blockchain verified medicine shipment details.
        </Typography>

        {/* SEARCH */}
        <TextField
          fullWidth
          label="Enter Serial Number"
          value={serialNumber}
          onChange={(e) =>
            setSerialNumber(e.target.value)
          }
          sx={{ mb: 3 }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={fetchShipment}
          sx={{
            mb: 3,
            padding: "12px",
            fontWeight: "700",
            borderRadius: "10px",
            textTransform: "none",
          }}
        >
          Search Verified Medicine
        </Button>

        {loading && (
          <Typography textAlign="center">
            Loading blockchain data...
          </Typography>
        )}

        {error && (
          <Typography
            textAlign="center"
            color="error"
          >
            {error}
          </Typography>
        )}

        {/* RESULT */}
        {shipmentData && (

          <Paper
            elevation={3}
            sx={{
              padding: "25px",
              borderRadius: "15px",
              mt: 2,
            }}
          >

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
              }}
            >

              <Chip
                icon={<CheckCircleIcon />}
                label="Blockchain Verified"
                color="success"
                sx={{
                  fontWeight: "700",
                  padding: "18px 8px",
                }}
              />

            </Box>

            <Divider sx={{ mb: 2 }} />

            <Typography sx={{ mb: 1 }}>
              <strong>Medicine Name:</strong>
              {" "}
              {shipmentData.name}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Serial Number:</strong>
              {" "}
              {shipmentData.serial}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Shipment Status:</strong>
              {" "}
              {shipmentData.status}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Current Location:</strong>
              {" "}
              {shipmentData.location}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Manufacturer Wallet:</strong>
              {" "}
              {shipmentData.manufacturer}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Updated By:</strong>
              {" "}
              {shipmentData.updatedBy}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Created At:</strong>
              {" "}
              {
                shipmentData.timestamp
                  ? new Date(
                      shipmentData.timestamp * 1000
                    ).toLocaleString()
                  : "N/A"
              }
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Shipment Updated At:</strong>
              {" "}
              {
                shipmentData.updatedAt
                  ? new Date(
                      shipmentData.updatedAt * 1000
                    ).toLocaleString()
                  : "N/A"
              }
            </Typography>

            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "center",
              }}
            >

              <LocalShippingIcon
                sx={{
                  fontSize: "40px",
                  color: "#1976d2",
                  mr: 1,
                }}
              />

              <Inventory2Icon
                sx={{
                  fontSize: "40px",
                  color: "#2e7d32",
                }}
              />

            </Box>

          </Paper>
        )}

      </Paper>

    </Box>
  );
};

export default ReceivedProducts;
