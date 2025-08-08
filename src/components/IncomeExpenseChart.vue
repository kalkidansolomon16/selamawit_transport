<template>
<div>
<Line :data="chartData" :options="chartOptions"/>
</div>  
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  plugins,
  scales,
} from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(Title,Tooltip,Legend,LineElement,PointElement,CategoryScale,LinearScale)

const chartData = {
    labels:[
        'Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'
    ],
    datasets:[
{
    label:'Income',
    data:[0,0,22000000,0,360000,1500000,0,0,0,0,0,0],
    borderColor:'#87CEEB',
    backgroundCOlor:'2196f3',
    fill:false,
    tension:0.4,
    pointRadius:5,
    pointBackgroundColor:'#2196f3'

},
{
    label:'Expense',
    data:[0, 0, 300000, 0, 100000, 50000, 0, 0, 0, 0, 0, 0],
    borderColor:'#f44336',
    backgroundCOlor:'#f44336',
    fill:false,
    tension:0.4,
    pointRadius:5,
    pointBackgroundColor:'#f44336',
    yAxisId:'y2'
}
    ]
}
const chartOptions = {
    responsive:true,
    plugins:{
        legend:{
            position:'top'
        },
        title:{
            display:true,
            text:'Income Vs Expense'
        }
    },
    scales:{
y:{
    beginAtZero:true,
    ticks:{
        callback:function(value){
            return value.toLocaleString();
        }
    }
}
    }

}
</script>

<style>

</style>