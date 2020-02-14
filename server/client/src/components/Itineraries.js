import React, { Component } from 'react'
import Footer from './Footer';
import { connect } from 'react-redux';
import { fetchItineraryList } from '../store/actions/itineraryActions';

class Itineraries extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         itineraries: [],
    //         city: '',
    //         fetchItineraryList: []
    //     }
    // }

    componentDidMount() {
        let city = window.location.pathname.split('/')[2]
        this.props.fetchItineraryList(city);
    }

    render() {
        const { itineraries } = this.props
        console.log(itineraries)
        console.log(this.props.itineraries)


        const itinerariesList = itineraries.map(itinerary => {


            return (
                <div className="itineraryItem" key={itinerary._id}>
                    <div>{itinerary.title}</div>

                </div>
            )
        })
        const { loading } = this.props;
        if (!loading)
            return (
                <div className="flex-container">
                    <div className="itineraries-list">
                        {itinerariesList}
                    </div>
                    <Footer />
                </div>
            )
        else
            return (
                <div>Loading...</div>
            )
    }
}

const mapStateToProps = state => {
    return {
        itineraries: state.itineraries.itineraries,
        loading: state.itineraries.loading
    }
}

const mapDispatchProps = dispatch => {
    return {
        fetchItineraryList: (city) => dispatch(fetchItineraryList(city))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Itineraries);