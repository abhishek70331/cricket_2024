import React from "react";
import { Card, Space, Row, Col } from "antd";
import { TrophyOutlined, DollarOutlined } from '@ant-design/icons';
import SportsCricketIcon from '@mui/icons-material/SportsCricket'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const CardsPage = () => {
    return (
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
                            <p className="mt-2"><h5><b>Virat Kohli</b></h5></p>
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
    );
};

export default CardsPage;
