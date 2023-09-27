import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import { ReactComponent as ETH } from "./../assets/ETH.svg";
import { ReactComponent as DAI } from "./../assets/DAI.svg";
import { ReactComponent as USDC } from "./../assets/USDC.svg";
import { ReactComponent as USDT } from "./../assets/USDT.svg";
import { ReactComponent as WBTC } from "./../assets/WBTC.svg";
import { ReactComponent as WETH } from "./../assets/WETH.svg";
import "./popup.css";

interface PopupProps {
  current: string;
  onClose: (param:string) => void;
}

const options = [
  'DAI', 'ETH', 'USDC', 'USDT', 'WBTC', 'WETH'
];

type OptionToSVG = {
  [key: string]: React.ReactElement;
};

const optionToSVG: OptionToSVG = {
  'DAI': <DAI />,
  'ETH': <ETH />,
  'USDC': <USDC />,
  'USDT': <USDT />,
  'WBTC': <WBTC />,
  'WETH': <WETH />,
};

const Popup: React.FC<PopupProps> = ({ onClose, current } ) => {
  const [searchInput, setSearchInput] = useState('');
  
  // Filter the options based on the search input
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="popup-container">
      <div className="popup-header">
        <p className="popup-title">Select a token</p>
        <Button variant="text" onClick={() => onClose(current)} sx={{ minHeight: 0, minWidth: 0, padding: 0 }}><CloseIcon color="secondary" /></Button>
      </div>
      <div className="popup-search">
        <input className="search-bar" 
               placeholder="Search coins here" 
               onChange={(input) => setSearchInput(input.target.value)}
        />
      </div>
      <div className="popup-choices">
      <ul className="popup-choices-list">
      {filteredOptions.map((option:string) => (
        <Button sx={{gap: 1.5, paddingLeft: 2, paddingRight: 2, backgroundColor: "#000000", borderRadius: 10, borderColor: "#3e3e3e", marginRight: 2, marginBottom: 2, color: "#FFFFFF"}} 
                key={option} 
                onClick={() => onClose(option)}
                >
          {optionToSVG[option]}
          {option}
        </Button>
      ))}
      </ul>
      </div>
    </div>  
  );
};

export default Popup;