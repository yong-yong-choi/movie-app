import React from 'react';
import Header from '../components/Header';
import './Detail.scss'

class Detail extends React.Component {
    componentDidMount() {
        // console.log(this.props)
        const { location, history } = this.props;
        //console.log(location.state);
        if ( location.state === undefined ) {
            history.push('/');
        }
    }
    render() {
        const { location: { state } } = this.props;
        if ( state ) {
            return (
                <section className="container">
                    <Header title="Detail" />
                    <div className="detail-content">
                        <p className="number">NO.{state.id} / YEAR:{state.year} / rating: {state.rating}</p>
                        <h2 className="detail-title">{state.title_long}</h2>
                        <figure className="detail-img">
                            <img src={state.big_poster} alt={state.title} />
                        </figure>
                        <p className="synopsis">{state.description_full}</p>
                    </div>
                </section>
            )
        } else {
            return null
        }
        
    }
}

export default Detail;