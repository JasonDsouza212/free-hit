import "../styles/Home.css"
import Header from "../components/Navbar"
import products from "../DB/product.json"
import GridView from "../components/Card/GridView"
import { Link } from "react-router-dom"

export default function Home() {
    const currentProducts = products.slice(0, 4);
    return (
        <div className="home-container">
            <Header />
            <div className="featured-tools">
                <h1 className="featured-tools-title">Featured Tools</h1>
                <GridView currentProducts={currentProducts} />
                <button className="more-tools-btn">
                    <Link to="/tools">
                        View More tools...
                    </Link>
                </button>
            </div>
        </div>
    )
}