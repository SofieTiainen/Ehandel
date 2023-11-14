import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <h1>Holly Jolly Haven</h1>
            <Link to={'/HollyJollyHaven/cart'}>Varukorg</Link>
            <p>Skapa magi i varje vinterscen med våra unika jul- och vinterdekorationer – där varje detalj sprider glädje och värme till ditt hem</p>
        </div>
    )
}