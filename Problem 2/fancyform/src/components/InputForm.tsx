import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./InputForm.css"
import Modal from "./modal";
import Popup from "./popup";
import Loading from "./loading";

const Converter: React.FC = () => {
  type Modaltype = "none" | "From" | "Into";
  const [from, setFrom] = useState<string>("ETH");
  const [into, setInto] = useState<string>("USDT");
  const [loading, setLoading] = useState<boolean>(false);
  const [amountFrom, setAmountFrom] = useState<number>(0);
  const [amountInto, setAmountInto] = useState<number>(0);
  const [amountFromInCurrency, setAmountFromInCurrency] = useState<number>(0);
  const [amountIntoInCurrency, setAmountIntoInCurrency] = useState<number>(0);
  const [modal, setModal] = useState<Modaltype>("none");

  type ExchangeRates = {
    [from: string]: {
      [into: string]: number;
    };
  };

  const exchangeRates: ExchangeRates = {
    "DAI": {
      "ETH": 0.00063,
      "USDC": 0.999788,
      "USDT": 1.00045,
      "WBTC": 0.00003804,
      "WETH": 0.00062816,
      "USD": 1,
    },
    "ETH": {
      "DAI": 1590.28,
      "USDC": 1590.45,
      "USDT": 1591.48,
      "WBTC": 0.06064,
      "WETH": 1,
      "USD": 1590.32,
    },
    "USDC": {
      "DAI": 0.99901,
      "ETH": 0.000625264,
      "USDT": 0.9997,
      "WBTC": 0.00003804,
      "WETH": 0.000628123,
      "USD": 0.999,
    },
    "USDT": {
      "DAI": 0.99927,
      "ETH": 0.000625847,
      "USDC": 0.9994,
      "WBTC": 0.00003803,
      "WETH": 0.000627711,
      "USD": 1,
    },
    "WBTC": {
      "DAI": 26192.7,
      "ETH": 16.474,
      "USDC": 26212.2,
      "USDT": 26208.5,
      "WETH": 16.474,
      "USD": 26215.22,
    },
    "WETH": {
      "DAI": 1590.28,
      "ETH": 1,
      "USDC": 1590.26,
      "USDT": 1591.15,
      "WBTC": 0.06064,
      "USD": 1590.49,
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFA2F9',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
  });

  const handleInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (isNaN(Number(value)) == false) {
      setAmountFrom(Number(value));
    }

    if (value === 0) {
      setLoading(false);
      setAmountFromInCurrency(0);
      setAmountIntoInCurrency(0);
      setAmountInto(0);
      return;
    } 

    if ( isNaN(value) || value < 0) {
      return;
    }

    setLoading(true);
    const exchangeRateInCurrency = Number(exchangeRates[from]["USD"]) * value;
    setAmountFromInCurrency(exchangeRateInCurrency);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const exchangeRate = Number(exchangeRates[from][into]) * value;
    setAmountInto(exchangeRate);

    const exchangeRateInCurrencyInto = Number(exchangeRates[into]["USD"]) * exchangeRate;
    setAmountIntoInCurrency(exchangeRateInCurrencyInto);
    setLoading(false);
  };

  const handleSwitch = () => {
    setFrom(into);
    setInto(from);
    setAmountFrom(amountInto);
    setAmountInto(amountFrom);
    setAmountFromInCurrency(amountIntoInCurrency);
    setAmountIntoInCurrency(amountFromInCurrency);
  };

  const handleChoose = (option:string) => {
    if (modal === "From") {
      setFrom(option);
    } else if (modal === "Into") {
      setInto(option);
    } else {
      setModal("none");
    }
    setModal("none");
  }

  return (
    <ThemeProvider theme={theme}>
    {modal !== "none" && <Modal isOpen={true} onClose={() => setModal("none")}>
      <Popup current={modal === "From" ? from : into} onClose={handleChoose} />    
    </Modal>}
      <div className="container">
        <div className="from">
          <p className="amount-description">From</p>
          <div className="input">
            <input 
              className="amount-input"
              placeholder="Enter Amount"
              value={amountFrom}
              type="tel"
              pattern="[0-9]*"
              maxLength={10}
              onChange={handleInput}
            />
            <Button variant="text" onClick={() => setModal("From")}>{from}</Button>
          </div>
          <div className="amount-currency-holder">
            <p className="amount-currency" id="from-in-currency">${amountFromInCurrency}</p>
          </div>
        </div>
        <Button disableRipple className="swap" variant="text" onClick={handleSwitch}><SwapVertIcon className="swap-icon" /></Button>
        <div className="to">
          <p className="amount-description">To</p>
          <div className="input">
          { loading ? <Loading type={"coin"} /> :
            <input 
              className="amount-input"
              id="result"
              placeholder="Enter Amount"
              value={amountInto}
              disabled={true}
            />
          }
            <Button variant="text" onClick={() => setModal("Into")}>{into}</Button>
          </div>
          <div className="amount-currency-holder">
            { loading ? <Loading type={"currency"} /> :
            <p className="amount-currency" id="into-in-currency">${amountIntoInCurrency}</p>
            }
          </div>
        </div>
        <Button color="primary" 
                className="connect-wallet" 
                variant="contained" 
                disableRipple
                sx={{'&:hover': {boxShadow: '0px 0px 5px 2px rgba(255, 255, 255, 0.2)'}, '&:active': {boxShadow: '0px 0px 5px 2px rgba(255, 255, 255, 0.2)'}}}
                >
          Connect Wallet
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Converter;