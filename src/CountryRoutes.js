export default function CountryRoutes({ country }){
    return (
        <Switch>
            <Route path={`/${country.name}/currency`}>
                <DisplayCurrency country={country} />
            </Route>
        </Switch>
    )
}