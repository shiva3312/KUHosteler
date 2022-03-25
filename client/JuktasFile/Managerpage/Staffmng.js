import React from 'react'

export default function Staffmng() {
    return (
        <div id="root"><div className="container justify-content-center p-4 mt-5 mb-5" >
             <div className="row " >
                  
                        <h1 className="fs-2 lead text-start text pb-2" >Staff Info</h1>
                   
                </div>
                <div className="row " >
                    <table className="table table-borderless shadow" >
                        <thead >
                            <tr className="trth gradiant " >
                                <th className="text-center align-middle text-light p-3" >SL</th>
                                <th className="text-center align-middle text-light  p-3" >Picture</th>
                                <th className="text-center align-middle text-light  p-3" >Name</th>
                                <th className="text-center align-middle text-light  p-3" >Age</th>
                                <th className="text-center align-middle text-light  p-3" >Postion</th>
                                <th className="text-center align-middle text-light  p-3" colSpan="2" >Activity</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="" >
                                <td className="text-center align-middle p-4" >1</td>
                                <td className="text-center align-middle p-4" ><img src="" alt="" /></td>
                                <td className="text-center align-middle p-4" >------</td>
                                <td className="text-center align-middle p-4" >------</td>
                                <td className="text-center align-middle p-4" >----</td>
                                <td className="text-center align-middle p-1 pt-4 pb-4" ><button type="submit" className="btn gradiant text-light" name="button" >Edit</button></td>
                                <td className="text-center align-middle p-1 pt-4 pb-4" > <button type="submit" className="btn btn-danger" name="button" >Delete</button></td>
                            </tr>
                            <tr>
                                <td colSpan="7">
                                <div  className=" accordion accordion-flush " id="accordionFlushExample">
                        <div  className="accordion-item ">
                            <h2  className=" p-0 accordion-header " id="flush-headingOne">
                                <button  className="pb-2 pt-1 text fw-bold accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    About
                                </button>
                            </h2>
                            <div id="flush-collapseOne"  className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div  className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>


                    </div>
                                </td>
                            </tr>
                      
                            <tr className="" >
                                <td className="text-center align-middle p-4" >1</td>
                                <td className="text-center align-middle p-4" ><img src="" alt="" /></td>
                                <td className="text-center align-middle p-4" >------</td>
                                <td className="text-center align-middle p-4" >------</td>
                                <td className="text-center align-middle p-4" >----</td>
                                <td className="text-center align-middle p-1 pt-4 pb-4" ><button type="submit" className="btn gradiant text-light" name="button" >Edit</button></td>
                                <td className="text-center align-middle p-1 pt-4 pb-4" > <button type="submit" className="btn btn-danger" name="button" >Delete</button></td>
                            </tr>
                            <tr>
                                <td colSpan="7">
                                <div  className=" accordion accordion-flush" id="accordionFlushExample">
                        <div  className="accordion-item">
                            <h2  className=" p-0 accordion-header " id="flush-headingOne">
                                <button  className="pb-2 pt-1 text fw-bold accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    About
                                </button>
                            </h2>
                            <div id="flush-collapseTwo"  className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div  className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
        </div>
    )
}
