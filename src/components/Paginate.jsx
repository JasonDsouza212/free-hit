import "../styles/Paginate.css"

export default function Paginate({ totalPages, currentPage, setCurrentPage }) {
	const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
	function handleClick(number) {
		setCurrentPage(number)
		window.scrollTo(0, 0)
	}
	return (
		<div className="pagination">
			{currentPage > 1 && <button className="paginate-nav" onClick={() => handleClick(currentPage - 1)} > &lt; Prev</button>}
			{
				pageNumbers.map(number =>
					<button className={`paginate-button ${currentPage == number ? 'selected-page' : ''}`} key={number} onClick={() => { handleClick(number) }} >{number}</button>
				)
			}
			{currentPage < totalPages && <button className="paginate-nav" onClick={() => handleClick(currentPage + 1)}>Next &gt;</button>}
		</div>
	)
}