import React, { useState } from 'react';
import AudienceForm from '../components/AudienceForm';
import SegmentCard from '../components/SegmentCard';
import axios from 'axios'
import './CreateSegment.css';


const CreateSegment = () => {
  const [segments, setSegments] = useState([]);
  const [refresh,setRefresh]=useState(false)

  const handleFormSubmit = async (conditions) => {
    console.log(conditions)
    var customerDetails=[]
    await axios.get("http://localhost:3001/api/orders").then((data)=>
      
      {setRefresh(!refresh)
        console.log(data)
        customerDetails=data.data
      })
    
    for(var condition of conditions){
      console.log(condition)
      customerDetails=customerDetails.filter(cusDet=>{
      if(condition.field==="spending"){
        if(condition.operator==">" && cusDet.orderAmount>condition.value){
          return cusDet;
        }
        if(condition.operator=="<" && cusDet.orderAmount<condition.value){
          return cusDet;
        }
        if(condition.operator=="=" && cusDet.orderAmount==condition.value){
          return cusDet;
        }
      }
      if(condition.field==="visits"){
        if(condition.operator==">" && cusDet.orderAmount>condition.value){
          return cusDet;
        }
        if(condition.operator=="<" && cusDet.orderAmount<condition.value){
          return cusDet;
        }
        if(condition.operator=="=" && cusDet.orderAmount==condition.value){
          return cusDet;
        }
      }
      
    })
    }

    console.log(conditions)
    const newSegment = {
      id: Date.now(),
      name: `Segment ${segments.length + 1}`,
      conditions,
      size: customerDetails.length, // Simulate audience size
    };
    setSegments([...segments, newSegment]);
  };

  const handleDeleteSegment = (id) => {
    setSegments(segments.filter(segment => segment.id !== id));
  };

  return (
    <div style={{padding:"  100px 300px"}}>
      <h1>Create Audience Segment</h1>
      <AudienceForm onSubmit={handleFormSubmit} />
      {segments.map(segment => (
        <SegmentCard key={segment.id} segment={segment} onDelete={handleDeleteSegment} />
      ))}
    </div>
  );
};

export default CreateSegment;
