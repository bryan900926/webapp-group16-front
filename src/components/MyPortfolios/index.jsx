import "./index.css";
import PortfolioBar from "./PorfolioBar";

export default function MyPortfolios() {
  const portfolioDatas = [
    {
      name: "Portfolio 1",
      assets: [
        { assetName: "Bond", allocation: 40 },
        { assetName: "Stock", allocation: 30 },
        { assetName: "Cash", allocation: 30 },
      ],
    },
  ];
  return (
    <div className="my-portfolios">
      <h1>My Portfolio</h1>
      {portfolioDatas.map((portfolioData, index) => (
        <PortfolioBar key={index} portfolioData={portfolioData} />
      ))}
    </div>
  );
}
