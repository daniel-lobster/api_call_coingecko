
import Coin from '../components/coin';
import { useState, useEffect } from 'react';




function Coins({coins}) {
  const [search, setSearch] = useState('')



  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-app" style={{marginTop : "12em"}}>
      <div className="coin-search d-flex justify-content-center mb-5">
        <div>
          <h1 className="text-center text-capitalize mt-3 font_family text-justify" style={{color: '#439cd6 '}}><b>Search a Currency</b></h1>
          <form className="d-flex justify-content-center">
            <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
          </form>
        </div>
      </div>
      
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default Coins;
