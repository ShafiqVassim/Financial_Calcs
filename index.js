import React, { useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";

import EMICalc from "./EMI";
import FutureValueCalc from "./FutureValue";
import PresentValueCalc from "./PresentValue";
import SIPCalc from "./SIP";
import ReverseSIPCalc from "./ReverseSIP";
import CAGRCalc from "./CAGR";
import EmergencyFundCalc from "./EmergencyFund";
import PortfolioReturnCalc from "./PortfolioReturn";
import ChildrenEducationCalc from "./ChildrenEducation";
import CapitalGainCalc from "./CapitalGain";
import CostOfDelayCalc from "./CostOfDelay";
import FinancialFreedomCalc from "./FinancialFreedom";
import GratuityCalc from "./Gratuity";
import HowLongMoneyWillLastCalc from "./HowLongMoneylasts";
import IncomeTaxCalc from "./IncomeTax";
import HRACalc from "./HRA";
import LifeInsuranceCalc from "./LifeInsurance";
import RetirementCalc from "./Retirement";
import StepUpSipCalc from "./StepUpSip";
import FinancialGoalCalc from "./FinancialGoal";
import Test from "./Test";

const Calculators = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card style={{ border: "8px solid white", borderRadius: "12px" }}>
          <CardContent style={{ margin: "-15px", marginLeft: "5px" }}>
            <h2>CALCULATORS </h2>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CAGRCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CapitalGainCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <ChildrenEducationCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CostOfDelayCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <EmergencyFundCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <EMICalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <FinancialFreedomCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <FinancialGoalCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <FutureValueCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <GratuityCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <HowLongMoneyWillLastCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <HRACalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <IncomeTaxCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <LifeInsuranceCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <PortfolioReturnCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <PresentValueCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <RetirementCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <ReverseSIPCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <SIPCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <StepUpSipCalc />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Calculators;
