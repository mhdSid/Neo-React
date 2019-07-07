import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { CustomizedAxisTickX, CustomizedLabel, renderLegend, CustomizedAxisTickY } from './CustumizedAxis'
  
export function Chart (props) {
    return (
        <LineChart
            width={700}
            height={350}
            {...props}
            margin={{
            top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid stroke="#c0c0c08a"  />
            <XAxis dataKey="name" height={60} tick={<CustomizedAxisTickX />} />
            <YAxis tick={<CustomizedAxisTickY />} />
            <Tooltip />
            <Legend verticalAlign="top" content={renderLegend} height={40}/>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    );
}