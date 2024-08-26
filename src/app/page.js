import React from "react";
import TradingViewWidget from "@/components/tradingview/TradingViewWidget";
import WatchList from "@/components/tradingview/WatchList";

const Home = () => {
  return (
    <div className="flex w-full m-5">
      <div className="flex w-3/4">
        <TradingViewWidget />
      </div>
      <div className="flex w-1/4">
        <WatchList />
      </div>
    </div>
  );
};

export default Home;
