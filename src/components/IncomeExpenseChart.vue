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
import { onMounted } from 'vue'
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
   const fetchChartData = async()=>{
  const [incomeRes,expenseRes] = await promiseTimeout.all([
    axios.get('http://127.0.0.1:8000/api/income-monthly'),
    axios.get('http://127.0.0.1:8000/api/expense-monthly')
    
  ])
   const allMonths = Array.from(new Set([
      ...incomeRes.data.map(i => i.month),
      ...expenseRes.data.map(e => e.month)
    ])).sort((a, b) => new Date(`${a} 1, 2025`) - new Date(`${b} 1, 2025`))

   
    const incomeData = allMonths.map(month => {
      const found = incomeRes.data.find(i => i.month === month)
      return found ? found.total_income : 0
    })

    const expenseData = allMonths.map(month => {
      const found = expenseRes.data.find(e => e.month === month)
      return found ? found.total_expense : 0
    })
        chartData.value = {
      labels: allMonths,
      datasets: [
        {
          label: 'Income',
          data: incomeData,
          borderColor: '#87CEEB',
          backgroundColor: '#2196f3',
          fill: false,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: '#2196f3'
        },
        {
          label: 'Expense',
          data: expenseData,
          borderColor: '#f44336',
          backgroundColor: '#f44336',
          fill: false,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: '#f44336'
        }
      ]
    }
  }
  onMounted(()=>{
    fetchChartData()
  })



</script>

<style>

</style>