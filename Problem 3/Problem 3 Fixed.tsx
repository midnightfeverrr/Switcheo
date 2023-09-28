import React, { useMemo, useState, useEffect } from 'react'; // Added import
import WalletRow from './pages/WalletRow';
import { useWalletBalances } from './hooks/useWalletBalances';

// A lot of undeclared type

interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string; // Added parameter
}
interface FormattedWalletBalance {
  currency: string;
  amount: number;
  formatted: string;
}

class Datasource {
  // Implement datasource class
  constructor(private apiUrl: string) {}

  async getPrices(): Promise<{ [currency: string]: number }> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch prices');
      }
      const prices = await response.json();
      return prices;
    } catch (error) {
      throw error;
    }
  }
}

interface Props {
// Add needed props here...
}

const WalletPage: React.FC<Props> = (props: Props) => {
  const { ...rest } = props; // children is removed
  const balances = useWalletBalances(); // imported useWalletBalances so it can be used
  const url = "https://interview.switcheo.com/prices.json" // Initialized a const to hold the url value
	const [prices, setPrices] = useState({});
  type prioritiesType = {
    [from: string]: number;
  };
  const priorities: prioritiesType = {
    Osmosis: 100,
    Ethereum: 50,
    Arbitrum: 30,
    Zilliqa: 20,
    Neo: 20,
  };

  useEffect(() => {
    const datasource = new Datasource(url);
    datasource.getPrices().then(prices => {
      setPrices(prices);
    }).catch(error => {
      console.error(error); // Changed to be console.error
    });
  }, []);

	const getPriority = (blockchain: string): number => { // Hardcoded data
	  return priorities[blockchain] || -99;
	}

  const sortedBalances = useMemo(() => {
    return balances.filter((balance: WalletBalance) => {
		  const balancePriority = getPriority(balance.blockchain);
		  balancePriority > -99 && balance.amount > 0; // Simplified the statement
		}).sort((lhs: WalletBalance, rhs: WalletBalance) => {
			const leftPriority = getPriority(lhs.blockchain); 
		  const rightPriority = getPriority(rhs.blockchain);
		  return rightPriority - leftPriority; // Simplified the statement
    }).map((balance) => ({
      ...balance,
      formatted: balance.amount.toFixed() // Moved here for efficiency
    }));
  }, [balances, prices]);

  const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
    const usdValue = prices[balance.currency] * balance.amount;
    return (
      <WalletRow 
        className="row"
        key={index}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    )
  })

  return (
    <div {...rest}>
      {rows}
    </div>
  )
}