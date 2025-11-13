import "./index.css";
import { useState } from "react";
import PortfolioEdit from "../PortfolioEdit";
import PortfolioAllocationPieChart from "../PortfolioAllocationPieChart";
import Modal from "../../Modal";

export default function PortfolioBar({ portfolioData }) {
  // portfolioData = { name: "Portfolio 1", assets: [{assetName: "2330", allocation: "40%"}] }
  const portfolioName = portfolioData.name;
  return (
    <div className="portfolio-bar">
      <PortfolioTable portfolioData={portfolioData} />
      <PortfolioAllocationPieChart data={portfolioData.assets} />
    </div>
  );
}

function PortfolioTable({ portfolioData }) {
  const assets = portfolioData.assets;
  const [showEditModal, setShowEditModal] = useState(false);
  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);
  return (
    <div style={{width:"50%"}}>
      <h4 style={{marginBottom: "50px"}}>{portfolioData.name}</h4>
      <table className="portfolio-table">
        <tbody>
          <tr>
            <th>Asset Class</th>
            <td>Allocation %</td>
          </tr>
          {assets.map((asset, index) => (
            <tr key={index}>
              <th>{asset.assetName}</th>
              <td>{asset.allocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="edit-portfolio-btn" onClick={openEditModal}>
        Edit Portfolio
      </button>
      {showEditModal && (
        <Modal onClose={closeEditModal}>
          <PortfolioEdit portfolioData={portfolioData} />
        </Modal>
      )}
    </div>
  );
}
