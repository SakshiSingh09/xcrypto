import React from 'react'
import { Line } from "react-chartjs-2";
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Tooltip, 
    Title, 
    Legend  } from "chart.js"

ChartJS.register(CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Tooltip, 
    Title, 
    Legend )

const Chart = ({arr=[], currency, days}) => {
    const prices=[];
    const date = [];

    for(let i=0; i< arr.length; i++){
        prices.push(arr[i][0]);
        
        if(days === "24h") {
            date.push(new Date(arr[i][1]).toLocaleTimeString());
        }else{
            date.push(new Date(arr[i][1]).toLocaleDateString());
        }
        // console.log(date)
    }

  return (
   <Line options={{
        responsive: true,}} 
        data={{labels:date, datasets:[{
            label: `Price in ${currency}`,
            data: prices, borderColor: "rgb(255,99,132)", backgroundColor: "rgba(255,99,132,0.5)"
        }]}}
    />
  )
}

export default Chart
