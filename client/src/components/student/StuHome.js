import React, { useState , useEffect } from "react";
import {read} from './stuApi';
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";

import Footer from "../Footer"

const UserDashboard = ({history}) => {  
    
    const {  user , token} = isAuthenticated();
    const [ studData , setStuData] = useState( user);
     
    useEffect(()=>{
      read( user._id, token).then((data)=>{
        setStuData(data)
        })
      },[]);

    const mealCount= {
        on : 0,
        off:0,
        mor : 0,
        nig :0
    };

    const calculateMealCount = ()=>{
     
      studData.activity.forEach((record)=>{           
            if(record.mess_status.toLowerCase() === "on")
            (mealCount.on++);
            else if(record.mess_status.toLowerCase() === "morning")
             (mealCount.mor++)
            else if(record.mess_status.toLowerCase() === "night")
             (mealCount.nig++)
            else if(record.mess_status.toLowerCase() === "off")
             (mealCount.off++)
        });      
    }

    const showPieChart =()=>{

      calculateMealCount();
        return (
            <div  className="card mb-5">
              <Pie
                data={{
                  labels: ['OFF', 'M/N', 'M', 'N'],
                  datasets: [
                    {
                      label: '# of votes',
                      data: [mealCount.off, mealCount.on, mealCount.mor, mealCount.mor],
                      backgroundColor: [
                        'rgba(255, 9, 13, 0.6)',
                        'rgba(54, 162, 12, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(0, 0, 0, 0.4)', 
                       
                      ],
                      borderColor: [
                        'rgba(255, 9, 13, 1)',
                        'rgba(54, 162, 12, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(0, 0, 0, 0.5)',                       
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                height={400}
                width={600}
                // options={{
                //   maintainAspectRatio: false,
                //   scales: {
                //     yAxes: [
                //       {
                //         ticks: {
                //           beginAtZero: true,
                //         },
                //       },
                //     ],
                //   },
                //   legend: {
                //     labels: {
                //       fontSize: 25,
                //     },
                //   },
                // }}
              />
            </div>
          )
    }

    

    const userInfo = () => {
     
        return (
            <div  className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">                    
                    <li className="list-group-item">{studData.fname} {user.lname}</li>
                    {
                      studData.messStatus == 0 || studData.messStatus==1 ? <li text-danger>Disable</li>:
                      studData.messStatus == 2 ?  <li className="list-group-item text-success">ON</li> : <li className="list-group-item text-danager">OFF</li>
                    }                   
                    <li className="list-group-item">{studData.email}</li>
                    <li className="list-group-item">
                        {studData.profileType === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };


    return (
        <>
        <StuLayout history={history} >
            {/* show your content in this div */}
            <div className="row " >                
                <div  className="col mb-0">{userInfo()}</div>
                <div  className="col mb-0">{showPieChart()}</div>
            </div>
           
        </StuLayout>
        <Footer />
        </>       
    );
};

export default UserDashboard;
