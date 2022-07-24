import React from 'react'
import PropTypes from 'prop-types';

const Customer = (props) => {
  return (
      <>
        {props.children}
        <span>x1234</span>
        <br />
        <span>Firstname Lastname</span>
      </>
  )
}

export default React.memo(Customer)

//{props.children} passed in is the heading
Customer.propTypes = {
  children: PropTypes.element
}