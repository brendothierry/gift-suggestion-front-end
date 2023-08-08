import React from 'react'
import Header from '../components/Header';
import giftFirst from '../Images/giftFirst.svg';
import giftPersonalizado from '../Images/giftPersonalizado.svg'
import logoPlus from '../Images/logoPlus.svg'
import './home.css';

class Home extends React.Component {

    render() {
        return (
            <div className='container'>
                <Header showSiderbar={true}/>
                <div className='container-img'>
                    <img className="logo-gift" src={giftFirst} />
                    <img className="logo-plus-first" src={logoPlus} />
                </div>
                <div className='container-img-sec'>
                    <img className="logo-gift-personalizado" src={giftPersonalizado} />
                    <img className="logo-plus-sec" src={logoPlus} />
                </div>
            </div>
        )
    }
}

export default Home;