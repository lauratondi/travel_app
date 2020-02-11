import React, { Component } from 'react'

class Cities extends Component {

    state = {
        cities: [],
        cityFilter: ""
    }

    componentDidMount() {
        this.fecthCityList()
    }

    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })
    }

    fecthCityList = () => {
        this.setState({ ...this.state, isFetching: true })
        fetch("http://localhost:5000/cities/all")
            .then(response => response.json())
            .then(result => this.setState({ cities: result, isFetching: false }))
            .catch(e => console.log(e))
    }

    filterCities = () => {
        const { cities, cityFilter } = this.state;
        return cities.filter((city) => {
            return city.name.toLowerCase().indexOf(cityFilter.toLowerCase() !== -1)
        },
        )
    }


    render() {
        const cityList = this.state.cities.map(city => {

            return (
                <li className="city" key={city._id}>
                    {city.name} - {city.country}
                    <img src={city.img} alt="cityPhoto" />
                </li>

            )
        })
        return (
            <div className="flex-container">

                <div className="filter">
                    <label htmlFor="filter">Filter by city</label>
                    <input type="text" id="filter"
                        value={this.state.cityFilter}
                        onChange={this.handleChange.bind(this)} />
                </div>

                <ul className="city-list">
                    {cityList}
                </ul>

            </div>
        )
    }
}

export default Cities;