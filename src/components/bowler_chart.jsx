import { color } from "chart.js/helpers";
import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import axios from "axios";



function BarBowler() {

    const[data,setData] = useState([])
    const[category,setCategory] = useState([])
    const[error, setError] = useState(null)
    const[loading, setLoading] =useState(true)

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/bowler')
        .then(
            response=>{
                const responseData = response.data
                const values = Object.values(responseData)
                const categories =Object.keys(responseData)

                setCategory(categories)
                setData(values)
                setLoading(false)
            }
        ).catch(error=>{
            setError(error)
            setLoading(error)
        })
    },[])
    if(error){
        <div>error.. {error.message}</div>
    }
    if(loading){
        <div>Loading...</div>
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
                title:{
                    text: 'Top Bowler of Tournament',
                    style:{fontSize:'15px', color:'white',},
                    align:'center'
                },
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
               }
               
            }}
        ></Chart>
        </>
    )

}

export default BarBowler
