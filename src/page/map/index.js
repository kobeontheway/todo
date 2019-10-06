import React from "react";
import { Card, message } from "antd";
import "./index.less";
import axios from "../../axios";

export default class BikeMap extends React.Component{
    componentDidMount(){
        this.getBikeDetail()
        this.renderMap()
    }

    getBikeDetail(){
        axios.ajax({
            url:"/bike/detail"
        }).then((res)=>{
            if(res.code === 0){
                message.success("请求骑行详情成功")
            }
        })
    }

    renderMap=()=>{
        this.map = new window.BMap.Map("bikeMap");
        let map = this.map;
        map.centerAndZoom("北京", 10);
        map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT}));
        map.addControl(new window.BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
    }

    render(){
        return(
            <div>
                <Card title="骑行地图">
                    <div id="bikeMap" className="bike-map"></div>
                </Card>
            </div>
        )
    }
}