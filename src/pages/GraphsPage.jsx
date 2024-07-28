import React from "react";
import TopScorer from "../components/topscorer";
import BarBowler from "../components/bowler_chart";
import PieToss from "../components/pie_toss";
import Player from "../components/player";
import PieTotal from "../components/pie_total";
import 'bootstrap/dist/css/bootstrap.min.css';

const GraphsPage = () => {
    return (
        <div className="container-fluid p-2">
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
        </div>
    );
};

export default GraphsPage;
