import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
	return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage} className="pagination-button-back"><i className="fas fa-arrow-left"></i></button>}
            {gotoNextPage && <button onClick={gotoNextPage} className="pagination-button"><i className="fas fa-arrow-right"></i></button>}
        </div>
		)
};