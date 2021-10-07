import React from "react";

const NutritionalStatistics = ({ statistics }) => {
    return (
        <div className="card-container">
            {statistics.map((stat) => (
                <div key={stat.name} className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h1>{stat.name}</h1>
                        </div>
                        <div className="flip-card-back">
                            <p>Low: {stat.min}</p>
                            <p>Average: {stat.avg}</p>
                            <p>Max: {stat.max}</p>
                        </div>
                    </div>
                </div>
            )
            )
            }
        </div>
    )
}

export default NutritionalStatistics;