import React from 'react'

export default function Dashboard() {
  return (
    <div id="root"><div className="container justify-content-center p-4 mt-5 mb-5" >
            

    <div className="row " >
      
            <h1 className="fs-2 lead text-start text pb-2" >Request List</h1>
       
    </div>
    <div className="row " >
        <table className="table table-borderless shadow" >
            <thead >
                <tr className="trth gradiant " >
                    <th className="text-center align-middle text-light p-3" >SL</th>
                    <th className="text-center align-middle text-light  p-3" >Picture</th>
                    <th className="text-center align-middle text-light  p-3" >Department</th>
                    <th className="text-center align-middle text-light  p-3" >Gender</th>
                   <th className="text-center align-middle text-light  p-3"   colSpan="2" >Activity</th>
                </tr>
            </thead>
            <tbody   >              
             <tr   ><td   colSpan="8"  className="text-center  text">No Request</td>
              
            </tr>
          </tbody>
          <tfoot  className="table-borderless m-5"   >

         </tfoot>
            
        </table>
    </div>
</div>
</div>



  )
}
