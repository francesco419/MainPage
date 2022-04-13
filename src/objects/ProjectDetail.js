import {useRef, useEffect, useState} from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


function ProjectDetail(){
    const [value,setValue] = useState([]);
    const getValue=async()=>{
        const json = await(await fetch("https://api.github.com/repos/francesco419/MainPage/languages")).json();
        setValue(json);
    }
    useEffect(()=>{
        getValue();
    },[])

    const all = value.JavaScript + value.CSS + value.HTML;
    const javascript = Math.floor((value.JavaScript/all)*100);
    const csss = Math.floor((value.CSS/all)*100);
    const html = Math.floor((value.HTML/all)*100);
    const COLORS = ['#FFBB28','#0088FE', '#FF0000'];
    const data01=[
        {
            "name":"JavaScript",
            "value":javascript
        },
        {
            "name":"CSS",
            "value":csss
        },
        {
            "name":"HTML",
            "value":html
        },
    ]

    console.log(value)
    return(
        <PieChart width={730} height={250}>
            <Pie 
            data={data01} 
            dataKey="value" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            innerRadius={60} 
            outerRadius={80} 
            fill="#82ca9d" 
            label={true}
            >
            {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
        </PieChart>
    )
}

export default ProjectDetail;