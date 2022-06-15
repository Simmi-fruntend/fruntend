import React, { useEffect, useState } from 'react'
import ApiItems from './apiItems';
const Test = (props) => {

    const [articles, setarticles] = useState([])
    const fetchData= async()=>{
        const url = `http://127.0.0.1:8000/api/medical_fundraiser/`;
        
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setarticles(articles.concat(parsedData))
        // console.log(articles)
      }
      // const  updateInfo=async()=> {
      //   const url = `http://127.0.0.1:8000/api/medical_fundraiser/`;
      //   let data = await fetch(url);

      //   let parsedData = await data.json();
  
      //   console.log(parsedData);
      //   setarticles(parsedData.articles)
      // }
      useEffect(() => {
        fetchData()
        // eslint-disable-next-line
      }, [])
      
  return (
    <>
      <div className="container" >
        <div className="row">
          {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.id}>
                  <ApiItems
                    title={element.patient_name ?element.patient_name.slice(0, 45) : ""}
                    medical_ailment={
                      element.medical_ailment
                        ? element.medical_ailment.slice(0, 88)
                        : ""
                    }
                    image={element.patient_photo}
                    phone={element.phone}
                    email={element.email}
                    relation={element.relation}
                    current={element.current_situation_details}
                    fundraiser={element.fundraiser_description}
                  />
                </div>
              );
            })}
        </div>
        </div>
    </>
  )
}

export default Test