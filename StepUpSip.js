import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  Grid,
  TableContainer,
  Table,
  IconButton,
  DialogTitle,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import InputField from "./Components/textFields";
import CalcButton from "./Components/CalcButton";
import ResultSection from "./Components/ResultSection";
import ReactApexChart from "react-apexcharts";

const StepUpSipCalc = () => {
  const [open, setOpen] = useState(false);
  const [iconHovered, setIconHovered] = useState(false);
  const [sipAmount, setSipAmount] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [tenure, setTenure] = useState("");
  const [AnnualInc, setAnnualInc] = useState("");
  const [chartData, setchartData] = useState(null);
  const [showOutput, setShowOutput] = useState(false);
  const [Result, setResult] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSipAmount("");
    setExpectedReturn("");
    setTenure("");
    setResult("");
    setAnnualInc("");
    setShowOutput(false);
  };

  const handleClear = () => {
    setSipAmount("");
    setExpectedReturn("");
    setTenure("");
    setAnnualInc("");
  };

  const handleCardClick = () => {
    handleClickOpen();
  };

  const generateChartData = (arr) => {
    return {
      series: [
        {
          name: "Annual Amount",
          data: arr.map((value) => Math.floor(Math.round(value))),
          // data: arr.slice(startindex, endindex).map((value) => Math.floor(Math.round(value))),
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 500,
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          title: {},
          categories: Array.from(
            { length: arr.length },
            (_, index) => index + 1
          ),
        },
        yaxis: {
          title: {},
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          offsetY: -20,
        },
        fill: {
          opacity: 1,
        },
        dataLabels: {
          enabled: false,
        },
      },
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let arr = [];
    let sip = sipAmount;
    let annual = sip * 12;
    let totalvalues = annual * (1 + expectedReturn / 100);

    for (let i = 0; i < tenure; i++) {
      arr.push(annual);
      sip = sip * (1 + AnnualInc / 100);
      annual = totalvalues + sip * 12;
      totalvalues = annual * (1 + expectedReturn / 100);
    }
    setResult({ annual: Math.round(arr[tenure - 1]) });
    setShowOutput(true);

    const chartData = generateChartData(arr);
    setchartData(chartData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap-reverse",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <Card className="completed">
        <CardContent onClick={handleCardClick}>
          <h3>Step Up Sip Calculator</h3>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Step Up Sip</DialogTitle>
        <DialogContent>
          {!showOutput ? (
            <form onSubmit={handleSubmit}>
              <TextField
                name="sipAmount"
                label="Sip Amount(Per Month)"
                fullWidth
                margin="normal"
                required
                type="number"
                step="0.01"
                value={sipAmount}
                onChange={(e) => setSipAmount(e.target.value)}
              />
              <TextField
                name="expectedReturn"
                label="Expected Return Per Year(%)"
                fullWidth
                margin="normal"
                required
                type="number"
                step="0.01"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(e.target.value)}
              />
              <TextField
                name="tenure"
                label="Tenure(Years)"
                fullWidth
                margin="normal"
                required
                type="number"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
              <TextField
                name="AnnualInc"
                label="Annual Increase in Sip(%)"
                fullWidth
                margin="normal"
                required
                type="number"
                step="1"
                value={AnnualInc}
                onChange={(e) => setAnnualInc(e.target.value)}
              />
              <DialogActions>
                <Button variant="contained" color="primary" type="submit">
                  Calculate
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  color="primary"
                >
                  Close
                </Button>
              </DialogActions>
            </form>
          ) : (
            <Dialog
              open={open}
              onClose={handleClose}
              maxWidth={false}
              style={{
                margin: "auto",
                maxWidth: "1250px",
                maxHeight: "750px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DialogTitle style={{ marginBottom: "-40px", fontSize: "22px" }}>
                {" "}
                Step Up Sip Calculator
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <CloseIcon
                  color={iconHovered ? "error" : "primary"}
                  onMouseEnter={() => setIconHovered(true)}
                  onMouseLeave={() => setIconHovered(false)}
                />
              </IconButton>
              <DialogContent
                style={{
                  width: "100%",
                  maxWidth: "1100px",
                  maxHeight: "750px",
                }}
              >
                <Grid container style={{ height: "100%" }}>
                  {/* Left Side (Input Fields) */}
                  <Grid
                    item
                    xs={12}
                    md={4}
                    style={{ height: "100%", overflowY: "auto" }}
                  >
                    <Card style={{ height: "100%" }}>
                      <CardContent>
                        <form onSubmit={handleSubmit}>
                          <Grid container spacing={1}>
                            <InputField
                              label="Sip Amount(Per Month)"
                              value={sipAmount}
                              onChange={(e) => setSipAmount(e.target.value)}
                            />
                            <InputField
                              label="Expected Return Per Year(%)"
                              value={expectedReturn}
                              onChange={(e) =>
                                setExpectedReturn(e.target.value)
                              }
                            />
                            <InputField
                              label="Tenure(Years)"
                              value={tenure}
                              onChange={(e) => setTenure(e.target.value)}
                            />
                            <InputField
                              label="Annual Increase in Sip(%)"
                              value={AnnualInc}
                              onChange={(e) => setAnnualInc(e.target.value)}
                            />
                            <CalcButton
                              onClear={handleClear}
                              onClose={handleClose}
                            />
                          </Grid>
                        </form>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={8} style={{ height: "100%" }}>
                    <Card
                      style={{
                        height: "15%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardContent style={{ flex: 1 }}>
                        <Typography variant="h4">Result</Typography>
                        <TableContainer>
                          <Table>
                            <ResultSection
                              title="Final Amount"
                              copyValue={`₹${Result.annual}`}
                            />
                          </Table>
                        </TableContainer>
                      </CardContent>
                      <Card
                        style={{
                          height: "100%",
                          overflowY: "auto",
                          marginTop: "1rem",
                        }}
                      >
                        <CardContent>
                          {chartData && (
                            <ReactApexChart
                              options={chartData.options}
                              series={chartData.series}
                              type="bar"
                              height={400}
                            />
                          )}
                        </CardContent>
                      </Card>
                    </Card>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StepUpSipCalc;
