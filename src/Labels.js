import React from 'react'

function Labels() {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    
                    <h1 className='coin-name-label'>NAME</h1>
                    <h1 className="coin-symbol-label">SYMBOL</h1>
                
                
                    <h1 className="coin-price-label">PRICE</h1>
                    <h1 className="coin-volume-label">24HR VOLUME</h1>
                    
                        <h1 className="coin-change-label">% CHANGE</h1>
                    
                    <h1 className="coin-market-label">
                        MARKET CAP
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default Labels

