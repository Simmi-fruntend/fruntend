import React from 'react'
import { useState,useEffect } from 'react';
import InfiniteScroll from"react-infinite-scroll-component"
import ApiItems from './apiItems';

const Api = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const  updateMedical=async()=> {
        const url = `http://127.0.0.1:8000/api/medical_fundraiser/`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setarticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
      }
      const fetchMoreData= async()=>{
        const url = `http://127.0.0.1:8000/api/medical_fundraiser/`;
        setPage(page+1)
        
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
          setarticles(articles.concat(parsedData.articles))
          setTotalResults(parsedData.totalResults)
      }

      useEffect(() => {
        updateMedical() 
        // eslint-disable-next-line 
      },[])
  return (
    <div>
    <h1
        className="text-center"
        style={{ margin: "35px auto" ,marginTop:"90px"}}
      >Fundraiser By NGO</h1>
        {loading}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!== totalResults}
       >
        <div className="container">
        <div className="row">
          {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <ApiItems
                    patient_name={element.patient_name ? element.patient_name.slice(0, 45) : ""}
                    medical_ailment={
                      element.medical_ailment
                        ? element.medical_ailment.slice(0, 88)
                        : ""
                    }
                    patient_photo={element.patient_photo}
                    phone={element.phone}
                    email={element.email}
                    relation={element.relation}
                    current_situation_details={element.current_situation_details}
                    fundraiser={element.fundraiser_description}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
    </div>
  )
}

export default Api