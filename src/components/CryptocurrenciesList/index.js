// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {currencyList} = props
  return (
    <div className="content-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
        alt="cryptocurrency"
      />
      <ul className="currency-list">
        <li className="content-header">
          <p className="header-coin">Coin Type</p>
          <div className="header-price">
            <p className="currency">USD</p>
            <p className="euro-currency1">EURO</p>
          </div>
        </li>
        {currencyList.map(each => (
          <CryptocurrencyItem key={each.id} currencyDetails={each} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
