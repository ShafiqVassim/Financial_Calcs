import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

const Test = () => {
  const [open, setOpen] = useState(false);
  const [inputData, setInputData] = useState({
    annualIncome: '',
    lifeInsuranceCover: '',
    outstandingLoans: '',
    liquidInvestments: '',
    familyYearlyIncome: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              name="annualIncome"
              label="Annual Income required by family"
              value={inputData.annualIncome}
              onChange={handleInputChange}
              fullWidth
              type="number"
              required
              margin="normal"
            />
            <TextField
              name="lifeInsuranceCover"
              label="Current life Insurance Cover"
              value={inputData.lifeInsuranceCover}
              onChange={handleInputChange}
              fullWidth
              type="number"
              required
              margin="normal"
            />
            <TextField
              name="outstandingLoans"
              label="Current outstanding Loans"
              value={inputData.outstandingLoans}
              onChange={handleInputChange}
              fullWidth
              type="number"
              required
              margin="normal"
            />
            <TextField
              name="liquidInvestments"
              label="Liquid Investments"
              value={inputData.liquidInvestments}
              onChange={handleInputChange}
              fullWidth
              type="number"
              required
              margin="normal"
            />
            <TextField
              name="familyYearlyIncome"
              label="Any yearly income your family can after you"
              value={inputData.familyYearlyIncome}
              onChange={handleInputChange}
              fullWidth
              type="number"
              required
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Calculate
            </Button>
          </form>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth={false}>
        <DialogContent style={{ width: '1558px', height: '765px' }}>
          <Grid container spacing={3}>
            {/* Input Fields */}
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      name="annualIncome"
                      label="Annual Income required by family"
                      value={inputData.annualIncome}
                      onChange={handleInputChange}
                      fullWidth
                      type="number"
                      required
                      margin="normal"
                    />
                    <TextField
                      name="lifeInsuranceCover"
                      label="Current life Insurance Cover"
                      value={inputData.lifeInsuranceCover}
                      onChange={handleInputChange}
                      fullWidth
                      type="number"
                      required
                      margin="normal"
                    />
                    <TextField
                      name="outstandingLoans"
                      label="Current outstanding Loans"
                      value={inputData.outstandingLoans}
                      onChange={handleInputChange}
                      fullWidth
                      type="number"
                      required
                      margin="normal"
                    />
                    <TextField
                      name="liquidInvestments"
                      label="Liquid Investments"
                      value={inputData.liquidInvestments}
                      onChange={handleInputChange}
                      fullWidth
                      type="number"
                      required
                      margin="normal"
                    />
                    <TextField
                      name="familyYearlyIncome"
                      label="Any yearly income your family can after you"
                      value={inputData.familyYearlyIncome}
                      onChange={handleInputChange}
                      fullWidth
                      type="number"
                      required
                      margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                      Calculate
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>

            {/* Output */}
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  {Object.values(inputData).every((value) => value === '') ? (
                    <img src="dummy-image.png" alt="dummy-image" />
                  ) : (
                    <div>
                      <Typography variant="h5">Output:</Typography>
                      {/* Dummy output values */}
                      <Typography>
                        Annual Income required by family:{' '}
                        {inputData.annualIncome}
                      </Typography>
                      <Typography>
                        Current life Insurance Cover:{' '}
                        {inputData.lifeInsuranceCover}
                      </Typography>
                      <Typography>
                        Current outstanding Loans:{' '}
                        {inputData.outstandingLoans}
                      </Typography>
                      <Typography>
                        Liquid Investments: {inputData.liquidInvestments}
                      </Typography>
                      <Typography>
                        Any yearly income your family can after you:{' '}
                        {inputData.familyYearlyIncome}
                      </Typography>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Chart */}
              <Card>
                <CardContent>
                  <Typography variant="h5">Chart</Typography>
                  {/* Add your chart component here */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Test;
