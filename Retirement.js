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

const RetirementCalc = () => {
  const [open, setOpen] = useState(false);
  const [iconHovered, setIconHovered] = useState(false);
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [retirementTillAge, setRetirementTillAge] = useState("");
  const [inflation, setInflation] = useState("");
  const [returns, setReturns] = useState("");
  const [currentInvestment, setCurrentInvestment] = useState("");
  const [monthlyExpensesat, setmonthlyExpensesat] = useState("");
  const [corpusNeeded, setcorpusNeeded] = useState("");
  const [monthlyNeeded, setmonthlyNeeded] = useState("");
  const [showOutput, setShowOutput] = useState(false); // New state variable for output visibility

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentAge("");
    setRetirementAge("");
    setRetirementTillAge("");
    setInflation("");
    setReturns("");
    setCurrentInvestment("");
    setmonthlyExpensesat("");
    setcorpusNeeded("");
    setmonthlyNeeded("");
    setShowOutput(false);
  };

  const handleClear = () => {
    setCurrentAge("");
    setRetirementAge("");
    setRetirementTillAge("");
    setInflation("");
    setReturns("");
    setCurrentInvestment("");
  };

  const handleCardClick = () => {
    handleClickOpen();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expensesValue = parseFloat(monthlyExpenses);
    const currentAgeValue = parseFloat(currentAge);
    const retirementAgeValue = parseFloat(retirementAge);
    const retirementTillAgeValue = parseFloat(retirementTillAge);
    const inflationValue = parseFloat(inflation) / 100;
    const returnsValue = parseFloat(returns) / 100;
    const currentInvestmentValue = parseFloat(currentInvestment);

    const yearsToRetirement = retirementAgeValue - currentAgeValue;
    const yearsAfterRetirement = retirementTillAgeValue - retirementAgeValue;

    const monthlyExpenseatValue =
      expensesValue * Math.pow(1 + inflationValue, yearsToRetirement);
    console.log("monthlyExpenseatValue", monthlyExpenseatValue);

    const corpusNeededValue =
      monthlyExpenseatValue *
        12 *
        ((1 -
          Math.pow(
            1 + (1 + returnsValue) / (1 + inflationValue) - 1,
            -yearsAfterRetirement
          )) /
          ((1 + returnsValue) / (1 + inflationValue) - 1)) -
      currentInvestmentValue;
    console.log("corpusNeededValue", corpusNeededValue);

    const monthlyNeededValue =
      (corpusNeededValue * (returnsValue / 12)) /
      (Math.pow(1 + returnsValue / 12, yearsToRetirement * 12) - 1);
    console.log("monthlyNeededValue", monthlyNeededValue);

    setmonthlyExpensesat(Math.round(monthlyExpenseatValue));
    setcorpusNeeded(Math.floor(Math.round(corpusNeededValue)));
    setmonthlyNeeded(Math.floor(Math.round(monthlyNeededValue)));
    setShowOutput(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <Card className="completed">
        <CardContent onClick={handleCardClick}>
          <h3>Retirement Calculator</h3>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Retirement Calculator</DialogTitle>
        <DialogContent>
          {!showOutput ? (
            <form onSubmit={handleSubmit}>
              <TextField
                name="monthlyExpenses"
                label="Monthly Expenses (past retirement)"
                fullWidth
                margin="normal"
                required
                type="number"
                step="0.01"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(e.target.value)}
              />
              <TextField
                name="currentAge"
                label="Current Age"
                fullWidth
                margin="normal"
                required
                type="number"
                step="1"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
              />
              <TextField
                name="retirementAge"
                label="Retirement Age"
                fullWidth
                margin="normal"
                required
                type="number"
                step="1"
                value={retirementAge}
                onChange={(e) => setRetirementAge(e.target.value)}
              />
              <TextField
                name="retirementTillAge"
                label="Retirement Till Age"
                fullWidth
                margin="normal"
                required
                type="number"
                step="1"
                value={retirementTillAge}
                onChange={(e) => setRetirementTillAge(e.target.value)}
              />
              <TextField
                name="inflation"
                label="Inflation Retirement (%)"
                fullWidth
                margin="normal"
                required
                type="number"
                step="0.01"
                value={inflation}
                onChange={(e) => setInflation(e.target.value)}
              />

              <TextField
                name="returns"
                label="Returns Retirement (%)"
                fullWidth
                margin="normal"
                required
                type="number"
                step="0.01"
                value={returns}
                onChange={(e) => setReturns(e.target.value)}
              />

              <TextField
                name="currentInvestment"
                label="Current Investment for Retirement"
                fullWidth
                margin="normal"
                required
                type="number"
                step="0.01"
                value={currentInvestment}
                onChange={(e) => setCurrentInvestment(e.target.value)}
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
                Retirement Calculator
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
                              label="Monthly Expenses (past retirement)"
                              value={monthlyExpenses}
                              onChange={(e) =>
                                setMonthlyExpenses(e.target.value)
                              }
                            />
                            <InputField
                              label="Current Age"
                              value={currentAge}
                              onChange={(e) => setCurrentAge(e.target.value)}
                            />
                            <InputField
                              label="Retirement Age"
                              value={retirementAge}
                              onChange={(e) => setRetirementAge(e.target.value)}
                            />
                            <InputField
                              label="Retirement Till Age"
                              value={retirementTillAge}
                              onChange={(e) =>
                                setRetirementTillAge(e.target.value)
                              }
                            />
                            <InputField
                              label="Inflation Retirement (%)"
                              value={inflation}
                              onChange={(e) => setInflation(e.target.value)}
                            />
                            <InputField
                              label="Returns Retirement (%)"
                              value={returns}
                              onChange={(e) => setReturns(e.target.value)}
                            />
                            <InputField
                              label="Current Investment for Retirement"
                              value={currentInvestment}
                              onChange={(e) =>
                                setCurrentInvestment(e.target.value)
                              }
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
                              title="Corpus Needed At Retirement"
                              copyValue={`₹${corpusNeeded}`}
                            />
                            <ResultSection
                              title="Monthly Investment Needed"
                              copyValue={`₹${monthlyNeeded}`}
                            />
                            <ResultSection
                              title="Monthly Expenses At Retirement at 60"
                              copyValue={`₹${monthlyExpensesat}`}
                            />
                          </Table>
                        </TableContainer>
                      </CardContent>
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

export default RetirementCalc;
