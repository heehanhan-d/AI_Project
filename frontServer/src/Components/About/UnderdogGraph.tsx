import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

export default function UnderDogGraph() {
    const data = [{
        name: '2020',
        품종견: 16594,
        비품종견: 44628,
        }, {
        name: '2021',
        품종견: 20988,
        비품종견: 63220,
        }, {
        name: '2022',
        품종견: 19239,
        비품종견: 60731,
        }
    ];

    return(
        <GraphDiv>
            <UnderdogGraphDiv>
                <BarChart width={600} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="품종견" fill="#94B5EA"/>
                    <Bar dataKey="비품종견" fill="#FED159" />
                </BarChart>
            </UnderdogGraphDiv>
        </GraphDiv>
        )
}

const GraphDiv = styled.div`
    display: flex;
    justify-content: center;
`

const UnderdogGraphDiv = styled.div`
    margin-right: 50px;
`
