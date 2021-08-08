import React, { Component,useState, useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carrusel.css';
import Card from './Card';
import "jquery";
import Slider from "react-slick";
const axios = require('axios');



export default class Carrusel extends Component {

    state={
        datajson:[],
    }

    

    
    componentDidMount(){

        fetch('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')
        .then(res=>res.json())
        .then(json=>{
            let datares = json;// Parsea el String a Json
            console.log(datares);
            this.setState({
                datajson:datares
            });
            //setResult(data);
        })
        .catch(err=>{console.log(err);});

    }




    render() {    

    let settings ={
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: false,
            dots: true
          }
        }
        ]
    };

    return (
        <div className="carrusel" >
            <h2> Nuevo en Superfuds <span>Ver más ...</span></h2>
            <Slider {...settings}>
                {
                    this.state.datajson.map((result,index)=>(
                        <Card key={index} {...result}  datajsoncomprar={this.props.datajsoncomprar}/>
                    ))
                }
            </Slider>
        </div>
    );


    };
}