import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../../api'
import{Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'

function Charts({data:{confirmed, deaths, recovered}, country}) {
    const [dailyData, setdailyData] = useState([])
    useEffect(() => {
        const fetchAPI = async () =>{
           setdailyData (await fetchDailyData())
        }
        fetchAPI();
       
        
        
        
        
    }, [])

    const lineChart = (
        <Line
        data={{
            labels: dailyData.map(({date} )=>date),
            datasets:[{
                data:dailyData.map(({confirmed} )=>confirmed),
                label:'infected',
                borderColor:'#3333ff',
                fill:true,
            }, {
               data:dailyData.map(({deaths} )=>deaths),
               label:'deaths',
               borderColor:'#red',
               backgroundColor:'rgba(255, 0, 0, 0.5)',
               fill:true,
            }]
        }}
    /> 

    )

console.log(confirmed, recovered, deaths)
    const barChart = (
        confirmed
        ?(
            <Bar 
                data={{
                    labels:['Infected', 'Recovered', 'Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[
                            'rgba(0,0,255, 0.5)',
                            'rgba(0,255,0, 0.5)',
                            'rgba(255,0,0, 0.5)'
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true, text: `Current state in ${country}`}
                }}
            />
        ) :null
    )
  
    return (
        <div>
            <div className={styles.container}>
                {country? barChart:lineChart}
         

            </div>
        </div>
    )
}

export default Charts
