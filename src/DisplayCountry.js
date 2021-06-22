import { Link } from "react-router-dom"

export default function DisplayCountry({ country }){
    let symbol = ""
    if(country.currencies[0].symbol){
        symbol = country.currencies[0].symbol;
    }
    else {
        symbol = country.currencies[0].code;
    }
    return (
        <div className="card container w-50 text-center d-flex flex-row justify-content-between">
            <h2 className="card-title m-2">{country.name}</h2>
            <Link to={`/currency/${country.name}`}>
                <div className="btn btn-danger lead m-2">{symbol}</div>
            </Link>
        </div>
    )
}