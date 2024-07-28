import React,{ useState, useEffect } from "react";
import Chart from 'react-apexcharts';
import "../App.css"
import axios from 'axios';


function TopScorer() {

    const [data, setData] = useState([ ])
    const [category, setCategory] = useState([ ])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect( () => {
        axios.get('http://127.0.0.1:5000/scorer')
        .then(response => {
            const responseData = response.data;
            const category = Object.keys(responseData)
            const values = Object.values(responseData)

            setCategory(category)
            setData(values)
            setLoading(false)
        })

        .catch(error=>{setError(error);
            setLoading(false)
        })
    },[])
    console.log('fetched')

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error.. {error.message}</div>
    }
    
    return(
        <>
        <Chart
            className="bar2"
            type='bar'
            width={350}
            height={300}

            series={[
                {
                    name:'Top Scorrer',
                    data: data
                }
            ]}
            options={{
                xaxis:{
                    categories:category,
                    labels:{
                        style:{fontSize:'5px',colors:'white'}
                    }
                },
                yaxis:{
                    labels:{
                        style:{colors:'white'}
                    }
                }
                ,
                title:{
                    text:"Top Scorrer",
                    style:{fontSize:'15px',color:'white'},
                    align:'center'
                }
            }}
        >
        
        </Chart>
        </>
    )

}

export default TopScorer