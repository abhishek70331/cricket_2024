import React from "react";
import BarBowler from "../components/bowler_chart";
import TopScorer from "../components/topscorer";
import PieToss from "../components/pie_toss";
import Player from "../components/player";
import PieTotal from "../components/pie_total";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from "../components/sidenav";
import '../App.css'
// import 'antd/dist/antd.css';
import { Card, Space,Row,Col } from "antd";
import { TrophyOutlined,DollarOutlined, } from '@ant-design/icons';
import SportsCricketIcon from '@mui/icons-material/SportsCricket'; 




function Home () {
    return (
        <>
        <div className="App">
            <SideNav />
        </div>
        <div className="container-fluid p-2">
            <div className="row">
                <div className="col-md-3 sidebar text-start text-white p-2">
                <div className="container side">
                    <h2 className="p-3">2024 World-Cup</h2>
                    <p className="p-2">The 2024 T20 World Cup will be the seventh edition of the ICC T20 World Cup.</p>
                    <p className="mt-2 p-2">Teams: Australia, Bangladesh, England, India, New Zealand, Pakistan, South Africa, Sri Lanka, West Indies, Afghanistan</p>
                    <p  className="mt-2 p-2">Venue: In the United States:
                        <ul>Lauderhill, Florida - Central Broward Regional Park Stadium</ul>
                        <ul>Dallas, Texas - Grand Prairie Stadium</ul>

                        In the West Indies:

                        <ul>Barbados - Kensington Oval, Bridgetown</ul>
                        <ul>Guyana - Providence Stadium</ul>
                        <ul>Jamaica - Sabina Park, Kingston</ul>
                        <ul>Trinidad and Tobago - Queen's Park Oval, Port of Spain</ul>
                    </p>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="m-2 p-2"><h2 className="text-white"><b>Cricket 2024 T20 World Analysis</b></h2></div>
                    <div className="row">
                        <div className="col-4">
                        <div className="p-2 mt-3"><TopScorer /></div>
                        </div>
                        <div className="col-4">
                        <div className="p-2 mt-3"><BarBowler /></div>
                        </div>
                        <div className="col-3">
                        <div className="p-2 mt-3"><Player /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="p-2 mt-3"><PieToss /></div>
                        </div>
                        <div className="col-6">
                            <div className="p-2 mt-3"><PieTotal /></div>
                        </div>
                    </div>
                    <div className="mt-4 container">
                        <h3 className="text-white">Winning Data</h3>
                        <Row>
                        <Col>
                        <Space className="space-container mt-3 d-flex">
                            <Card style={{width:150, height:160}}>
                                <TrophyOutlined style={{fontSize:'25px' , color:'green'}}/>
                                <p className="mt-2"><h5><b>India</b></h5>
                                <p>Winner</p></p>
                            </Card>
                        </Space>
                        </Col>
                        <Col>
                        <Space className="space-container mt-3 d-flex">
                            <Card style={{width:150, height:160}}>
                                <DollarOutlined style={{fontSize:'25px' , color:'red'}}/>
                                <p className="mt-2"><h5><b>2.45 million</b></h5>
                                <p>Award Money</p></p>
                            </Card>
                        </Space>
                        </Col>
                        <Col>
                        <Space className="space-container mt-3 d-flex">
                            <Card style={{width:150, height:160}}>
                                <SportsCricketIcon style={{fontSize:'25px' , color:'blue'}}/>
                                <p className="mt-2"><h5><b>Virat Kholi</b></h5></p>
                                <p>(man-of-the-match)</p>
                            </Card>
                        </Space>
                        </Col>
                        <Col>
                        <Space className="space-container mt-3 d-flex">
                            <Card style={{width:150, height:160}}>
                                <SportsCricketIcon style={{fontSize:'25px' , color:'blue'}}/>
                                <p className="mt-2"><h5><b>Jasprit Bumrah</b></h5>
                                <p>(Player-of-tournament)</p></p>
                                
                            </Card>
                        </Space>
                        </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Home;