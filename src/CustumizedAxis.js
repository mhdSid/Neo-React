import React from 'react';

function CustomizedLabel (props) {
    const {
    x, y, stroke, value,
    } = props;

    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>;
}

function renderLegend (props) {
    // const { payload } = props;

    return (
        <ul className='chart-legend-ul flex flex-row align-center justify-center'>
            <li className='chart-legend-li flex flex-column'>
                <span>SMARTWEALTH</span>
                <span class='chart-legend-icon'>$--</span>
            </li>
            <li className='chart-legend-li flex flex-column'>
                <span>BENCHMARK</span>
                <span class='chart-legend-icon'>$--</span>
            </li>
        {/* {
            payload.map((entry, index) => (
            <li className='chart-legend-li' key={`item-${index}`}>{entry.value}</li>
            ))
        } */}
        </ul>
    );
};

function CustomizedAxisTickX (props) {
    const {
    x, y, payload, //stroke
    } = props;

    return (
    <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} fontSize='12' textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
    </g>
    );
}

function CustomizedAxisTickY (props) {
    const {
    x, y, payload, //stroke
    } = props;

    return (
    <g transform={`translate(${x},${y - 10})`}>
        <text x={0} y={0} dy={16} fontSize='12' textAnchor="end" fill="#666" >{payload.value}</text>
    </g>
    );
}

export {
    CustomizedLabel,
    renderLegend,
    CustomizedAxisTickX,
    CustomizedAxisTickY
}