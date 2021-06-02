
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
      onChange={(e) => { console.log(e.target.value);props.function(props.index, e.target.value);  }}
      style={{ width: "70px" }}
    />
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

  function PageOne(props){
    let revenue = props.revenue;
    let changeRevenue= props.changeRevenue;
    let revenueInfo = props.revenueInfo
    return(<div className = "pages">
      <PieChartFunctional name="pie1" data={revenue} />
      <InputRow name={revenue[0].name} color={revenue[0].color} info={revenueInfo[0]} index={0} function={changeRevenue}/>
      <InputRow name={revenue[1].name} color={revenue[1].color} info={revenueInfo[1]} index={1} function={changeRevenue}/>
      <InputRow name={revenue[2].name} color={revenue[2].color} info={revenueInfo[2]} index={2} function={changeRevenue}/>
      <InputRow name={revenue[3].name} color={revenue[3].color} info={revenueInfo[3]} index={3} function={changeRevenue}/>
      <InputRow name={revenue[4].name} color={revenue[4].color} info={revenueInfo[4]} index={4} function={changeRevenue}/>
      <InputRow name={revenue[5].name} color={revenue[5].color} info={revenueInfo[5]} index={5} function={changeRevenue}/>
      <InputRow name={revenue[6].name} color={revenue[6].color} info={revenueInfo[6]} index={6} function={changeRevenue}/>
      <InputRow name={revenue[7].name} color={revenue[7].color} info={revenueInfo[7]} index={7} function={changeRevenue}/>
    </div>)
  }


  function PageTwo(props) {
    let expenditures = props.expenditures;
    let changeExpenditures = props.changeExpenditures;
    let expenditureInfo = props.expenditureInfo
    return(<div className = "pages">
      <PieChartFunctional name="pie2" data={expenditures} />
      <InputRow name={expenditures[0].name} color={expenditures[0].color} info={expenditureInfo} index = {0} function={changeExpenditures}/>
      <InputRow name={expenditures[1].name} color={expenditures[1].color} info={expenditureInfo[1]} index={1} function={changeExpenditures}/>
      <InputRow name={expenditures[2].name} color={expenditures[2].color} info={expenditureInfo[2]} index={2} function={changeExpenditures}/>
      <InputRow name={expenditures[3].name} color={expenditures[3].color} info={expenditureInfo[3]} index={3} function={changeExpenditures}/>
      <InputRow name={expenditures[4].name} color={expenditures[4].color} info={expenditureInfo[4]} index={4} function={changeExpenditures}/>
      <InputRow name={expenditures[5].name} color={expenditures[5].color} info={expenditureInfo[5]} index={5} function={changeExpenditures}/>
      <InputRow name={expenditures[6].name} color={expenditures[6].color} info={expenditureInfo[6]} index={6} function={changeExpenditures}/>
      <InputRow name={expenditures[7].name} color={expenditures[7].color} info={expenditureInfo[7]} index={7} function={changeExpenditures}/>
    </div>)}

    function PageThree(props) {
    return (
      <div>
    <PieChartFunctional name="pie3" data={props.revenue} />
    <PieChartFunctional name="pie4" data={props.actualRevenue} />
    </div>
    );
  }

  function PageFour(props) {
    return (
      <div>
    <PieChartFunctional name="pie5" data={props.expenditures} />
    <PieChartFunctional name="pie6" data={props.actualExpenditures} />
    </div>
    );
  }

  function PageHolder(props) {
    let revenue = props.revenue;
    let revenueInfo = props.revenueInfo;
    let changeRevenue = props.changeRevenue;
    let expenditures = props.expenditures;
    let expenditureInfo = props.expenditureInfo;
    let changeExpenditures = props.changeExpenditures;
    let actualRevenue = props.actualRevenue;
    let actualExpenditures = props.actualExpenditures;
    let page = props.page

    let contents = <PageOne revenue= {revenue} revenueInfo = {revenueInfo} changeRevenue= {changeRevenue}/>
    if (page == 1) {
      contents = <PageTwo expenditures={expenditures} expenditureInfo = {expenditureInfo} changeExpenditures= {changeExpenditures}/>
    } else if (page == 2) {
      contents = <PageThree revenue = {revenue} actualRevenue = {actualRevenue}/>
    } else if (page == 3) {
      contents = <PageFour expenditures = {expenditures} actualExpenditures= {actualExpenditures}/>
    }

    return(<div className = "Pageholder">{contents}</div>);
  }


function Circle(props) {
  return (<svg height="21" width="21">
    <circle cx="10" cy="10" r="5" stroke="black" strokeWidth="0" fill={props.color} />
  </svg>);
}

/* App */
function App() {

  

  // initialization
  let actualRevenue = [
    { name: 'Medical Center', value: 45, color: '#f0bf00' },
    { name: 'Student Fees', value: 4, color: '#fff688' },
    { name: 'State of California', value: 8, color: '#5f63e3' },
    { name: 'Tuition', value: 11, color: '#f6e50e' },
    { name: 'Research Grants and Contracts', value: 13, color: '#71a8ff' },
    { name: 'Pell Grants', value: 1, color: '#0F7AB4' },
    { name: 'Non-educational Services', value: 11, color: '#D4E4FF' },
    { name: 'Gifts, Endowments, Interest, etc', value: 7, color: '#FFFFFF' }

  ];

  let actualExpenditures = [
    { name: 'Medical Center', value: 43, color: '#f0bf00' },
    { name: 'Teaching and Teaching Support', value: 23, color: '#fff688' },
    { name: 'Research', value: 11, color: '#5f63e3' },
    { name: 'Student Services and Finacial Aid', value: 8, color: '#f6e50e' },
    { name: 'Operations and Maintenance (Buildings, etc)', value: 2, color: '#71a8ff' },
    { name: 'Administration', value: 3, color: '#0F7AB4' },
    { name: 'Non-Educational Services', value: 2, color: '#D4E4FF' },
    { name: 'Public Service', value: 2, color: '#FFFFFF' },
    { name: 'Depreciation, Interest, etc.', value: 6, color: '#000000'}

  ];

  const [revenue, updateRevenue] = React.useState([
    { name: 'Medical Center', value: 0, color: '#f0bf00' },
    { name: 'Student Fees', value: 0, color: '#fff688' },
    { name: 'State of California', value: 0, color: '#5f63e3' },
    { name: 'Tuition', value: 0, color: '#f6e50e' },
    { name: 'Research Grants and Contracts', value: 0, color: '#71a8ff' },
    { name: 'Pell Grants', value: 0, color: '#0F7AB4' },
    { name: 'Non-educational Services', value: 0, color: '#D4E4FF' },
    { name: 'Gifts, Endowments, Interest, etc', value: 0, color: '#FFFFFF' }

  ]);

  const [expenditures, updateExpenditures] = React.useState([
    { name: 'Medical Center', value: 0, color: '#f0bf00' },
    { name: 'Instruction and Academic Support', value: 0, color: '#fff688' },
    { name: 'Research', value: 0, color: '#5f63e3' },
    { name: 'Student Services and Financial Aid', value: 0, color: '#f6e50e' },
    { name: 'Depreciation/ Interest Expenses', value: 0, color: '#71a8ff' },
    { name: 'Instutitional Support', value: 0, color: '#0F7AB4' },
    { name: 'Services', value: 0, color: '#D4E4FF' },
    { name: 'Gifts, Endowments, Interest', value: 0, color: '#FFFFFF' },
    { name: 'Depreciation, Interest, etc.', value: 0, color: '#000000'}

  ]);

  const [page, updatePage] = React.useState(0);

  function changeRevenue(index, value) {
    revenue[index].value = Number(value);
    console.log(revenue[index]);
    let tempRevenue = [];
    for (let i = 0; i < revenue.length; i++) {
      tempRevenue.push(revenue[i]);
    }
    updateRevenue(tempRevenue);
    console.log("look at me " , revenue);
  }

    function changeExpenditures(index, value) {
    expenditures[index].value = Number(value);
    console.log(expenditures[index]);
    let tempExpenditures = [];
    for (let i = 0; i < expenditures.length; i++) {
      tempExpenditures.push(expenditures[i]);
    }
    updateExpenditures(tempExpenditures);
    console.log("look at me " , expenditures);
  }

  function resetCharts(){
    
  }
  
  function pageUp(){
    console.log("Step:", page);
    if (page >= 3) {
      let tempPage = 3;
      updatePage(tempPage)
    } else {
    let tempPage = page + 1;
    updatePage(tempPage);
    }
    console.log("To Step: ", page)
  }

  function pageBack() {
    console.log("Going from Step:", page);
    if (page <= 0) {
      let tempPage = 0;
      updatePage(tempPage)
    } else {
    let tempPage = page - 1;
    updatePage(tempPage);
    }
    console.log("To Step: ", page)
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

  const [pieData1, setPieData1] = useState(actualRevenue);
  // setup step validators, will be called before proceeding to the next step
function step2Validator() {
  // return a boolean
  pageUp();
  return true;
}


function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
  
}
  // setup the step content
  const step1Content = <h1>Step 2 Content</h1>;
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
      <button type = "button" onClick = {pageUp}> pageup </button>
      <button type = "button" onClick = {pageBack}> pagedown </button>
      <PageHolder revenue = {revenue} revenueInfo= {revenueInfo} changeRevenue = {changeRevenue} actualRevenue= {actualRevenue} expenditures = {expenditures} expenditureInfo = {expenditureInfo} actualExpenditures= {actualExpenditures} page= {page}/>
      <StepProgressBar
        startingStep={0}
        onSubmit={onFormSubmit}
        stepClass={"bigchungus"}
        steps={[
          {
            label: '',
            subtitle: '',
            name: '',
            content: step1Content,
            validator: step2Validator
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
            validator: step2Validator
          },
          {
            label: '',
            subtitle: '',
            name: '',
            content: step3Content,
            validator: step2Validator
          }
        ]}
      />
    </div>
  )

}

export default App;


