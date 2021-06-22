import { useParams, Link } from "react-router-dom"

export default function DisplayCurrency({ countries }){
    let { country } = useParams()

    const currentCountry = countries.find((place) => place.name === country)
    console.log(currentCountry)
    return (
        <div className="container">
            <Link to="/"className="btn btn-secondary mt-3 mb-3">Home</Link>
            <h1>The currency {country} uses is the {currentCountry.currencies[0].name}</h1>
            <h2>Code is {currentCountry.currencies[0].code}</h2>
            {(currentCountry.currencies[0].symbol) ? 
                <h2>Symbol is {currentCountry.currencies[0].symbol}</h2> : 
                <h2>Symbol is unknown</h2>}
        </div>
    )
}