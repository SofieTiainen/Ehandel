import RenderProducts from "../features/RenderProducts";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header />
            <Link to={'/HollyJollyHaven/cart'}>Varukorg</Link>
            <RenderProducts />
        </div>
    )
}

export default Home;