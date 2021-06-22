import DisplayCountry from "./DisplayCountry";

export default function ListCountries({ countries }){
    return countries.map((country) => <DisplayCountry country={country} />)
}