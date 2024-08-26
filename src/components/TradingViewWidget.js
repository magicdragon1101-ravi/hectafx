"use client";

import React, { useEffect, useRef } from "react";

const TradingViewWidget = ({ symbol = "BITSTAMP:BTCUSD" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && window.TradingView) {
      new window.TradingView.widget({
        symbol: "BITSTAMP:BTCUSD",
        autosize: true,
        interval: "1",
        timezone: "America/Argentina/Buenos_Aires",
        theme: "dark",
        style: "1",
        locale: "en",
        padding: "10px",
        toolbar_bg: "#f1f3f6",
        enable_publishing: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        withdateranges: true,
        watchlist: [
          "BITSTAMP:BTCUSD",
          "FX:EURUSD",
          "FX:GBPUSD",
          "FX:USDJPY",
          "FX:AUDUSD",
          "FX:USDCAD",
          "FX:GBPJPY",
          "FX:NZDUSD",
          "FX:GBPAUD",
          "FX:AUDCAD",
        ],
        container_id: "trading-view-widget",
      });
    }
  }, [symbol]);

  return (
    <div
      id="trading-view-widget"
      ref={containerRef}
      className="w-full border border-solid border-gray-500 rounded m-5"
    />
  );
};

export default TradingViewWidget;
