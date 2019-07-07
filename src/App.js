import React, { useState } from 'react';
import './App.css';
import { Info } from './Info';
import { updateRiskAssets, getChartData } from './Utils';
import { Chart } from './Chart';
import { Progress } from './Progress';

/*
 * Main App Component which renders the main view
 */
function App() {
  let [score, setScore] = useState(1);
  let [isHistoricalVisible, setHistoricalVisible] = useState(false);
  let [riskAssets, setRiskAssets] = useState(updateRiskAssets([10, 20, 20, 40, 5, 5]));
  let [chartData, setChartData] = useState(getChartData());
  const maxScore = 11;

  function toggleHistorical() {
    isHistoricalVisible = !isHistoricalVisible;
    setHistoricalVisible(isHistoricalVisible);
  }

  function iterate (type) {
    switch (type) {
      case 1: {
        score = score >= maxScore - 1 ? 1 : ++score;
        break;
      }
      default: {
        score = score <= 1 ? maxScore - 1 : --score;
        break;
      }
    }
    switch (score) {
      case 1: case 3: case 7: {
        riskAssets = updateRiskAssets([10, 20, 20, 40, 5, 5]);
        break;
      }
      case 2: case 5: case 8: case 10: {
        riskAssets = updateRiskAssets([0, 40, 20, 20, 10, 10]);
        break;
      }
      case 4: case 6: case 9: {
        riskAssets = updateRiskAssets([70, 10, 5, 5, 0, 10]);
        break;
      }
      default: {
        break;
      }
    }
    setScore(score);
    setRiskAssets(riskAssets);
  }
  
  return (
    <>
      <nav className='nav flex justify-center align-center'>
        <h4 className='nav-text'>Our Recommendation</h4>
      </nav>

      <main className='App' role='main'>

        <header className='header'>
          <h2 className='header-title'>
            We recommend a Balanced portfolio
          </h2>
          <h6 className='header-subtitle'>
            This means your asset mix will focus on income and growth instruments to achieve greater returns.
            You can expect to see some downturns to achieve such returns
          </h6>
        </header>

        <h3 className='risk-calculator-header'>
          Your risk tolerance  
        </h3>
        
        <div className='risk-calculator flex flex-row justify-between align-center'>
          <button onClick={()=>iterate(0)} 
                  className='risk-calculator-btn risk-calculator-prev flex justify-center align-center'>
          </button>
          <span className='risk-calculator-value'>{score}</span>
          <button onClick={()=>iterate(1)} 
                  className='risk-calculator-btn risk-calculator-next flex justify-center align-center'>
          </button>
        </div>

        <p className='recommend-text'>
          We recommend 7
        </p>

        <div className='risk-assets'>
            <div className='risk-assets-header flex flex-row justify-between align-center'>
              <span className='risk-assets-header-text'>
                ASSET CLASS
              </span>
              <span className='risk-assets-header-text'>
                ALLOCATION
              </span>
            </div>
            {
              riskAssets.map( (item, index) => <Progress {...item} key={index}></Progress> )
            }
        </div>

        <button onClick={toggleHistorical} 
                className='view-historical-btn'>
          <span className='view-historical-btn-txt'>
            View Historical Performance
          </span>
          <span className={`view-historical-btn-arrow ${isHistoricalVisible ? 'toggled' : ''}`}></span>
        </button>
        
        {
          isHistoricalVisible && (
            <>
              <div className='investment-header'>  
                <h3 className='investment-header-title'>
                  Based on a $100,000 investment
                </h3>
                <h5 className='investment-header-text'>
                  (4.8% growth p.a)
                </h5> 
                <Info></Info>
              </div>

              <section className='chart'>
                <Chart data={chartData}></Chart>
              </section>
            </>
          )
        }
            
        <button className='open-accnt-btn flex align-center justify-center'>
          <span className='open-accnt-text'>Open my account</span>
        </button>

      </main>
    </>
  );
}

export default App;
