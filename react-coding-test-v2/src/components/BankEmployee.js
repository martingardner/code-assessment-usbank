import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';

// 1. filter employees from /data/employees.json to only display bankers
// 2. sort bankers by satisfationRating

const BankEmployee = (props) => {

  const [getData, setData] = useState(null);

  useEffect( ()=> {
    try{
      //make new arr, filter by banker
      let newArr = props.data.filter( i => i.type === 'banker');
      //sort by customer satisfaction
      newArr.sort( (a,b) => a.satisfactionRating - b.satisfactionRating);
      //setData
      setData(newArr);
    } 
    catch(err) {
      console.error('BankEmployee - useEffect', err);
    }   
  }, [props.data])

  //if data is not loaded or errored out
  if(!getData){
    return (
      <>
        {props.children}
        <span>Loading...</span>
      </>
    )
  }

  //if data
  return (
    <>
    {props.children}
    {getData.map( (d) => <Employee data={d} key={`bank-employee-${d.id}-${d.userName}`} />)}
    </>
  )
};

export default React.memo(BankEmployee);

/*
{props.children} passed in is the heading
props.data is the employee data
*/
BankEmployee.propTypes = {
  data: PropTypes.array,
  children: PropTypes.element
}

//single employee component
const Employee = ({data}) => {

  return (
    <div className="bank-employee">
      <span>{data.userName}</span>
      <br />
      <span>{data.name}</span>
      <br />
      <span>Customer Satisfaction Rating: {data.satisfactionRating}</span>
    </div>
  )
}

//individual employee data
Employee.propTypes = {
  data: PropTypes.object
}
