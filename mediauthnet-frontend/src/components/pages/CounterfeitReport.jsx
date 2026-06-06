import {
  Box,
  Paper,
  Typography,
  Button,
} from "@mui/material";

import WarningIcon from "@mui/icons-material/Warning";

import { useNavigate } from "react-router-dom";

import bgImg from "../../img/bg.png";

const CounterfeitReports = () => {

  const navigate = useNavigate();

  const alerts = [
    {
      id: 1,
      product: "Calpol 650",
      alert: "Duplicate Verification",
      severity: "Medium",
    },
    {
      id: 2,
      product: "Dolo 650",
      alert: "Inactive Product",
      severity: "High",
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
          width: "90%",
          margin: "auto",
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            color: "#d32f2f",
          }}
        >
          <WarningIcon sx={{ mr: 1 }} />
          Counterfeit Alerts
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>

          <Typography
            variant="h6"
            sx={{ mb: 2 }}
          >
            Total Alerts: {alerts.length}
          </Typography>

          {alerts.map((item) => (

            <Paper
              key={item.id}
              sx={{
                p: 2,
                mb: 2,
                borderLeft:
                  item.severity === "High"
                    ? "6px solid red"
                    : "6px solid orange",
              }}
            >
              <Typography>
                <strong>Product:</strong> {item.product}
              </Typography>

              <Typography>
                <strong>Alert:</strong> {item.alert}
              </Typography>

              <Typography
                sx={{
                  color:
                    item.severity === "High"
                      ? "red"
                      : "orange",
                  fontWeight: "bold",
                }}
              >
                Severity: {item.severity}
              </Typography>

            </Paper>

          ))}

        </Paper>

        <Button
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>

      </Paper>
    </Box>
  );
};

export default CounterfeitReports;