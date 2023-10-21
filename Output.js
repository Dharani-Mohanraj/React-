import React from "react";
import Csvdown from './milestone';


import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap'
import { useState,useEffect } from "react";
import { CSVLink } from "react-csv";

export default function MilestoneExport(){
    const [datum,setdatum]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(details=>setdatum(details))
    },[])

    const csvdata= datum;


return(
    <div className="container-fluid row justify-content-around" style={{height:"100vh",width:"100vw"}}>
        <Csvdown></Csvdown>
        <CSVLink
        data={
            csvdata.map((index,value)=>(
                {
                  Id:index.id,
                  Title:index.title,
                  Price:index.price,
                  Description:index.description,
                  Category:index.category,
                  Image:index.image,
                  Rate:index.rating.rate,
                  Count:index.rating.count,
                }
        ))
        }><button className="btn  btn-success m-5"> Download CSV</button></CSVLink>
    </div>
);
}