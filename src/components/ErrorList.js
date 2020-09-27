import React, { Fragment } from 'react'

const ErrorList = ({ errors }) => {
let displayError;
	if (errors.length > 0 ) {
		displayError = (
			<div className="errors">
     	 {errors}
    	</div>)
	}

  return(
    <Fragment>
      {displayError}
    </Fragment>
  )
}
export default ErrorList;
