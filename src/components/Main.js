import React from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MainPage from '../pages/MainPage';
import Instructions from '../pages/Instructions';
import FAQs from '../pages/FAQs';
import Coins from '../pages/Coins';
import Team from '../pages/Team';
import Register from '../pages/register';
import Legal from '../pages/Legal';
import Privacy from '../pages/Privacy';
import Career from '../pages/Career';
import Charity from '../pages/Charity';
import Mining from '../pages/Mining';
import Copyright from '../pages/Copyright';
import BitcoinMetamask from '../pages/BitcoinMetamask';
import EthereumMetamask from '../pages/EthereumMetamask';




function Main() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        //axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en')
          .then(res => {
            setCoins(res.data);
            //console.log(res.data);
            console.log("it is working!");
            console.log(coins);
          }).catch(error => {
            console.log(error)
            console.log("it is not working")
          });
      },[]);

    
    return (
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/instructions' element={<Instructions/>}></Route>
            <Route path='/faqs' element={<FAQs/>}></Route>
            <Route path='/coins' element={<Coins coins={coins}/>}></Route>
            <Route path='/team' element={<Team/>}></Route>
            <Route path='/bitcoin' element={<BitcoinMetamask/>}></Route>
            <Route path='/ethereum' element={<EthereumMetamask/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/legal' element={<Legal/>}></Route>
            <Route path='/privacy' element={<Privacy/>}></Route>
            <Route path='/career' element={<Career/>}></Route>
            <Route path='/charity' element={<Charity/>}></Route>
            <Route path='/mining' element={<Mining/>}></Route>
            <Route path='/copyright' element={<Copyright/>}></Route>
        </Routes>  
    )
};

export default Main;

