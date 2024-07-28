import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Chart from 'react-apexcharts';

function PieTotal() {

    const [data,setData] = useState([])
    const [loading, setLoading ] = useState(true)
    const [ category, setCategory ] = useState([])
    const [error,setError] = useState(null)

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/total')
        .then(
        response => {
            const responseData = response.data
            const categories = Object.keys(responseData)
            const values = Object.values(responseData)

            setCategory(categories)
            setData(values)
            setLoading(false)
    })
    .catch(error=>{setError(error)
        setLoading(false)
    })
},[])
    if(loading){
        return <div>loading..</div>
    }
    if(error){
        return <div>error.. {error.message}</div>
    }
    return(
        <>
        <Chart
            type="pie"
            width={400}
            height={200}
            series={data}
            options={{
                labels:category,
                legend:{
                    labels:{
                        colors:'white'
                    }
                },
                title:{
                    text:'Total Runs and Wickets',
                    align:'center',
                    style:{color:'white',fontSize:'15px'}
                }
            }}
        ></Chart>
        </>
    )
}

export default PieTotal