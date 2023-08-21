import { useSearchParams } from "react-router-dom";
import "../styles/Pagination.css";
import { useState } from "react";

export default function Pagination({ totalPages, atTop }) {
	const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
	const [searchParams, setSearchParams] = useSearchParams()
	let currentPage = searchParams.get('page') || 1
	currentPage = Number(currentPage)

	function handleClick(number) {
		setSearchParams(prevParams => {
			prevParams.set('page', number)
			return prevParams
		})
		window.scrollTo(0, 0)
	}
	return (
          <div className="pagination-top top-pagination">
				{currentPage > 1 && <button className="nextbutton" onClick={() => handleClick(currentPage - 1)} > &lt; </button>}
				{
					pageNumbers.slice(currentPage - 2 >= 0 ? currentPage - 2 : 0, currentPage + 1).map(number =>
						<button className={`paginate-button ${currentPage == number ? 'selected-page' : ''}`} key={number} onClick={() => { handleClick(number) }} >{number}</button>
					)
				}
				{currentPage < totalPages && <button className="nextbutton" onClick={() => handleClick(currentPage + 1)}> &gt;</button>}
			</div>
	)
}