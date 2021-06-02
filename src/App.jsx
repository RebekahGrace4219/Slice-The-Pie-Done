
import React, { useRef, useEffect, useState } from 'react';
import MyD3Component from "./MyD3Component.jsx";
import './App.css';

import PieChartFunctional from "./PieChartFunctional.jsx";
import PieChartClass from "./PieChartClass.jsx";
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";


import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';


const inputProps = {

  step: 300,
  endAdornment: (
    <InputAdornment>
      %
            </InputAdornment>
  )
};

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#71A8FF",
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

function BasicTextFields(props) {
  return (
    <TextField
      placeholder="0"
      InputProps={inputProps}
      onChange={(e) => { props.function(props.index, e); system.log(e) }}
      style={{ width: "70px" }}
    />

  );
}

function InputColumn(props) {

  return (
    <div className="InputColumn">
      {props.children}
    </div>
  );
}

function InputRow(props) {
  let category = props.name;
  let color = props.color;
  let info = props.info;


  return (
    <div className="InputRow">
      <div className="leftItems">
        <Circle color={color} />
        <p className="Inputtext"> {category} <CustomTooltip title={info} placement="bottom">
          <SvgIcon style={{ fontSize: 15 }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z" />
          </SvgIcon>
        </CustomTooltip></p>
      </div>
      <BasicTextFields className="textField" function={props.function} index={props.index} />
    </div>
  );
}


// setup step validators, will be called before proceeding to the next step
function step2Validator() {
  // return a boolean
  return true;
}

function step3Validator() {
  // return a boolean
  return true;
}

function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
}


function Circle(props) {
  return (<svg height="21" width="21">
    <circle cx="10" cy="10" r="5" stroke="black" strokeWidth="0" fill={props.color} />
  </svg>);
}

/* App */
function App() {

  

  // initialization
  let data1 = [
    { name: 'Medical Center', value: 0, color: '#f0bf00' },
    { name: 'State Unrestricted', value: 0, color: '#fff688' },
    { name: 'Tuition', value: 0, color: '#5f63e3' },
    { name: 'Student Fees', value: 0, color: '#f6e50e' },
    { name: 'Research Grants and Contracts', value: 0, color: '#71a8ff' },
    { name: 'Pell Grants', value: 0, color: '#0F7AB4' },
    { name: 'Sales and Service, Auxillary', value: 0, color: '#D4E4FF' },
    { name: 'Gifts, Endowments, Interest', value: 0, color: '#FFFFFF' }

  ];

  const [revenue, updateRevenue] = React.useState([
    { name: 'Medical Center', value: 0, color: '#f0bf00' },
    { name: 'State Unrestricted', value: 0, color: '#fff688' },
    { name: 'Tuition', value: 0, color: '#5f63e3' },
    { name: 'Student Fees', value: 0, color: '#f6e50e' },
    { name: 'Research Grants and Contracts', value: 0, color: '#71a8ff' },
    { name: 'Pell Grants', value: 0, color: '#0F7AB4' },
    { name: 'Sales and Service, Auxillary', value: 0, color: '#D4E4FF' },
    { name: 'Gifts, Endowments, Interest', value: 0, color: '#FFFFFF' }

  ]);

  const [expenditures, updateExpendatures] = React.useState([
    { name: 'Medical Center', value: 0, color: '#f0bf00' },
    { name: 'Instruction and Academic Support', value: 0, color: '#fff688' },
    { name: 'Research', value: 0, color: '#5f63e3' },
    { name: 'Student Services and Financial Aid', value: 0, color: '#f6e50e' },
    { name: 'Depreciation/ Interest Expenses', value: 0, color: '#71a8ff' },
    { name: 'Instutitional Support', value: 0, color: '#0F7AB4' },
    { name: 'Services', value: 0, color: '#D4E4FF' },
    { name: 'Gifts, Endowments, Interest', value: 0, color: '#FFFFFF' }

  ]);

  function changeRevenue(index, value) {
    revenue[index].value = value;
    let tempRevenue = [...data];
    for (let i = 0; i < revenue.length; i++) {
      tempRevenue.push(revenue[i]);
    }
    updateRevenue(tempRevenue);
  }


  let revenueInfo = ['A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare.',
    'General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services.',
    'Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds.',
    'Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc.',
    'Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research.',
    "Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it's 34%; at Cal Tech it's 14%; at Sac State it's 71%.",
    "Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big.",
    "Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem."]

  //these are out of order
  let expenditureInfo = ["The cost of providing care at the Medical Center is roughly what we get paid to provide it.", "Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries.", "The costs of doing the research, mostly researcher salaries.", "Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%.", "Upkeep of the grounds and building, and utilities, which are less than 1%.", "Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets.", "The costs of providing dorms, dining,parking, etc.", "Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university.", "Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses."]

  let names = ['Medical Center', 'Student Fees', 'State of California', 'Tuition', 'Research Grants and Contracts', 'Pell Grants', 'Non-educational Services', 'Gifts, Endowments, Interest, Etc.']

  const [pieData1, setPieData1] = useState(data1);
  //let circle = <svg height = "5" width = "5">
  //          <circle cx = '50' cy = '50' r = '40' stroke = 'black' fill = 'red' />
  //        </svg>
  // setup the step content
  const step1Content =
    <div>
      <PieChartFunctional name="pie1" data={revenue} />
      <InputRow name={data1[0].name} color={data1[0].color} info={revenueInfo[0]} index={0} />
      <InputRow name={data1[1].name} color={data1[1].color} info={revenueInfo[1]} index={1} />
      <InputRow name={data1[2].name} color={data1[2].color} info={revenueInfo[2]} index={2} />
      <InputRow name={data1[3].name} color={data1[3].color} info={revenueInfo[3]} index={3} />
      <InputRow name={data1[4].name} color={data1[4].color} info={revenueInfo[4]} index={4} />
      <InputRow name={data1[5].name} color={data1[5].color} info={revenueInfo[5]} index={5} />
      <InputRow name={data1[6].name} color={data1[6].color} info={revenueInfo[6]} index={6} />
      <InputRow name={data1[7].name} color={data1[7].color} info={revenueInfo[7]} index={7} />
    </div>;
  const step2Content = <h1>Step 2 Content</h1>;
  const step3Content = <h1>Step 3 Content</h1>;


  console.log("rendering App");

  return (
    <div>
      <div id="text">
        <h2 id="header">Slice the Pie</h2>
        <p id="paragraph1" >Say you got to run the University. How much would you allocate to different sectors?  Learn about your funding sources, with a guessing game.</p>
        <p id="paragraph2">You make your choices by inputting percentages of each section of a pie chart.  See how well your choices match the ones the real Provost made.</p>
      </div>
      <InputColumn names={names} />
      <StepProgressBar
        startingStep={0}
        onSubmit={onFormSubmit}
        stepClass={"bigchungus"}
        steps={[
          {
            label: '',
            subtitle: '',
            name: '',
            content: step1Content
          },
          {
            label: '',
            subtitle: '',
            name: '',
            content: step2Content,
            validator: step2Validator
          },
          {
            label: '',
            subtitle: '',
            name: '',
            content: step3Content,
            validator: step3Validator
          },
          {
            label: '',
            subtitle: '',
            name: '',
            content: step3Content,
            validator: step3Validator
          }
        ]}
      />
    </div>
  )

}

export default App;


