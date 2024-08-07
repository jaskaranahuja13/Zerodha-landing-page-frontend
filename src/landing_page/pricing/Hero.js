import React from "react";

function Hero(imagePricing) {
  return (
    <div className="container border-bottom">
      <div className="text-center border-bottom my-5 p-5">
        <h1 className="">Pricing</h1>
        <h3 className="mb-5 mt-4 text-muted fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>
      <div className="row p-5 m-2 text-center my-5 ">
        <div className="col m-1 p-1 my-5">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col m-1 p-1 my-5">
          <img src="media/images/intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col m-1 p-1 my-5">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted ">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
