// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {
    currencyLogo,
    currencyName,

    usdValue,
    euroValue,
  } = currencyDetails

  return (
    <li className="content-header-item">
      <div className="logo-container">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="header-coin">{currencyName}</p>
      </div>

      <div className="header-price">
        <p className="currency">{usdValue}</p>
        <p className="euro-currency">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
