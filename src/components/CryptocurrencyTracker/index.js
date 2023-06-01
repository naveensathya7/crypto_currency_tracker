// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import CyrptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptolist()
  }

  getCryptolist = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    // console.log(data)
    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      currencyLogo: each.currency_logo,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    console.log(updatedData)
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div className="loader" data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CyrptocurrenciesList currencyList={currencyList} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
