import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from 'react-apexcharts'
import { color } from "chart.js/helpers";

function Player(){

    const [data,setData] = useState([])
    const [loading,setLoading] =useState(true)
    const[error,setError] = useState(null)
    const[category,setCategory] = useState()

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/player')
        .then(response=>{
            const responseData = response.data
            const values = Object.values(responseData)
            const category = Object.keys(responseData)

            setData(values)
            setCategory(category)
        })
        .catch(error=>{
            setError(error)
            setLoading(false)
        })
    },[])
    if(loading){
        <div>Loading..</div>
    }
    if(error){
        <div>error... {error.message}</div>
    }

    return(
        <>
        <Chart
        type="bar"
        width={350}
        height={300}

        series={[{
            data:data
        }]}
        options={{
            
            xaxis:{
                categories:category,
                labels:{
                    style:{colors:'white',fontSize:'5px'}
                }
            },
            yaxis:{
                labels:{
                    style:{colors:'white'}
                }
            },
            title:{
                text:'Top 5 Player of the Match',
                align:'center',
                style:{color:'white'}
            }        
        }}
        >
        </Chart>
        </>
    )
}

export default Player;