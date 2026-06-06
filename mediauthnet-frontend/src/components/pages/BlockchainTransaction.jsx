import {
  Box,
  Paper,
  Typography,
  Button,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import bgImg from "../../img/bg.png";

const BlockchainTransactions = () => {

  const [rows, setRows] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {

    try {

      const token =
        JSON.parse(
          localStorage.getItem("auth")
        )?.token;

      const res =
        await axios.get(
          "http://localhost:5000/api/products",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      const data =
        res.data.map((item, index) => ({
          id: item._id,

          sl: index + 1,

          name: item.name,

          serialNumber:
            item.serialNumber,

          batchNumber:
            item.batchNumber,

          manufacturer:
            item.manufacturer?.name,

          manufactureDate:
            item.manufactureDate,

          expiryDate:
            item.expiryDate,

          status:
            item.status || "Verified",
        }));

      setRows(data);

    } catch (error) {

      console.log(error);
    }
  };

  const columns = [

    {
      field: "sl",
      headerName: "SL",
      width: 80,
    },

    {
      field: "name",
      headerName: "Medicine",
      width: 200,
    },

    {
      field: "serialNumber",
      headerName: "Serial No",
      width: 180,
    },

    {
      field: "batchNumber",
      headerName: "Batch No",
      width: 180,
    },

    {
      field: "manufacturer",
      headerName: "Manufacturer",
      width: 220,
    },

    {
      field: "status",
      headerName: "Blockchain Status",
      width: 180,
    },
  ];

  return (

    <Box
      sx={{
        minHeight: "100vh",

        backgroundImage: `url(${bgImg})`,

        backgroundSize: "cover",

        backgroundPosition: "center",

        padding: "40px",
      }}
    >

      <Paper
        sx={{
          width: "95%",

          margin: "auto",

          padding: "25px",

          borderRadius: "20px",

          backgroundColor:
            "rgba(255,255,255,0.9)",
        }}
      >

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",

            fontWeight: "bold",

            mb: 3,
          }}
        >
          Blockchain Transactions
        </Typography>

        <Paper
          sx={{
            height: 500,
            width: "100%",
          }}
        >

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />

        </Paper>

        <Button
          variant="contained"

          sx={{ mt: 3 }}

          onClick={() =>
            navigate(-1)
          }
        >
          Back
        </Button>

      </Paper>

    </Box>
  );
};

export default BlockchainTransactions;