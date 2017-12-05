import React from 'react';

const TableHeader = () => {
    let containerStyle = { background:"darkgreen", height: "35px" };
    let headerStyle = { textAlign:"center", lineHeight: "35px", color: "white" };
    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Leaderboard</h2>
        </div>
    );
}

export default TableHeader;