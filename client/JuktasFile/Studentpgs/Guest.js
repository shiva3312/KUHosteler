import React from 'react'

export default function Guest() {
    return (
        <div>

            <div className="row px-4 bg-white ">
                <div className=" container py-4">
                    <div className="pt-4 row d-flex justify-content-center h-100">


                        <div id="addguest" className=" shadow col-12 col-md-9  rounded p-0"  >
                            <div className="gradiant "  >
                                <h4 className="fs-4 text-light text-center text-middle p-3 mb-2"  >Add Guest</h4>
                            </div>

                            <form className="row g-1" method="post" action="/addguest"  >

                                <div className="col-lg-3 col-sm-10"  >
                                    <table className="table table-borderless"  >
                                        <tbody  ><tr  >
                                            <td colSpan="" className="lead"  > Name </td>
                                        </tr>
                                            <tr  >
                                                <td  ><input type="Name" className="form-control" id="inputEmail" placeholder=" Enter Guest Name" name="name" value="" required="" /></td>
                                            </tr>
                                        </tbody></table>
                                </div>

                                <div className="col-lg-4 col-sm-12"  >
                                    <table className="table table-borderless"  >
                                        <tbody  ><tr  >
                                            <td colSpan="2" className="lead"  > From </td>
                                        </tr>
                                            <tr  >
                                                <td  >
                                                    <select className="form-select" name="startoption" onChange={''}    >
                                                        <option selected=""  >On</option>
                                                        <option value="morning"  >Only Morning</option>
                                                        <option value="night"  >Only Night</option>
                                                    </select>
                                                </td>
                                                <td  ><input type="date" className="form-control" name="startDate" required="" /></td>
                                            </tr>
                                        </tbody></table>
                                </div>

                                <div className="col-lg-4 col-sm-12"  >
                                    <table className="table table-borderless"  >
                                        <tbody  ><tr  >
                                            <td colSpan="2" className="lead"  > To </td>
                                        </tr>

                                            <tr  >
                                                <td  >
                                                    <select className="form-select" name="endoption" onChange={''}  >
                                                        <option selected=""  >On</option>
                                                        <option value="morning"  >Only Morning</option>
                                                        <option value="night"  >Only Night</option>
                                                    </select>
                                                </td>
                                                <td  ><input type="date" className="form-control" name="endDate" required="" /></td>
                                            </tr>
                                        </tbody></table>
                                </div>

                                <div className="col-lg-1 col-sm-12 text-end"  >
                                    <table className="table table-borderless"  >
                                        <tbody  ><tr  >
                                            <td colSpan="" className="lead "  >. </td>
                                        </tr>
                                            <tr  >
                                                <td width="10%"  ><button type="submit" className="btn gradiant text-white"  >Add</button></td>
                                            </tr>
                                        </tbody></table>

                                </div>
                            </form>


                        </div>
                        {/* <div id="addguest" className=" shadow col-12 col-md-8   rounded  pt-3"  > */}
                        <div id="guestlist" className="shadow col-12 col-md-9 mt-5 rounded  pt-3">
                            <div className="row gradiant">
                                <h4 className="fs-4 text-light text-center text-middle p-3 "> Active Guest List</h4>
                            </div>
                            <div className="row">
                                <table className="table table-hover  " id="tableLevel-1"    >
                                    <thead>
                                        <tr className="gradiant">
                                            <th className="text-center align-middle text-light h6 p-3"    >SL</th>
                                            <th className="text-center align-middle text-light h6"    >Date</th>
                                            <th className="text-center align-middle text-light h6"    >Name </th>
                                            <th className="text-center align-middle text-light h6"    >Mess Activity </th>
                                            <th className="text-center align-middle text-light h6" colSpan="2"    >Mess status</th>
                                            <th className="text-center align-middle text-light h6" colSpan="2"    >Activity</th>

                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr    >
                                            <td className="text-center align-middle "    >1</td>
                                            <td className="text-center align-middle    "    >Sun Jan 30 2022</td>
                                            <td className="text-center align-middle " >jemmi</td>
                                            <form className="" action="/student/edit" method="post"    ></form>
                                            <td className="text-center text-uppercase align-middle    "    >

                                                <select className="activity-select" name="messactivity" id="activity" onChange={''}    >
                                                    <option value="On">On</option>
                                                    <option value="Only Morning">Only Morningg</option>
                                                    <option value="Only Night">Only Night</option>
                                                </select><h6 className="messactivity"></h6></td>


                                            <td className="text-center fw-bold text-dark align-middle    " colSpan="2"    >Listed</td>


                                            <td className=" w-1 p-3 text-center    "    > <button id="0" className="btn gradiant text-white edit-btn"  onClick="edit(this.id)" type="button" value="61f56329d15bcc35f5aaf14a" name="button"    ><span className="link-icon"    ><i className="fa fa-edit" aria-hidden="true"    ></i></span></button>
                                                {/* <button id="0"  onClick="submitedit(this.id)" type="submit" className="btn btn-secondary submit-edit" name="record" value="61f56329d15bcc35f5aaf14a"    ><span className="link-icon"    ><i className="fa fa-check-circle" aria-hidden="true"    ></i></span></button> */}
                                            </td>

                                            <form className="" action="/student/delete" method="post"    ></form>
                                            <td className="  text-center align-middle    "    > <button type="submit" className="btn btn-danger" name="record" value="61f56329d15bcc35f5aaf14a"    ><span className="link-icon"    ><i className="fa fa-trash" aria-hidden="true"    ></i></span></button>
                                            </td>




                                        </tr><tr    >
                                            <td className="text-center align-middle    "    >2</td>
                                            <td className="text-center align-middle    "    >Mon Jan 31 2022</td>
                                            <td className="text-center align-middle    "    >jemmi</td>
                                            <form className="" action="/student/edit" method="post"    ></form>
                                            <td className="text-center text-uppercase align-middle    "    >

                                                <select className="activity-select" name="messactivity" id="activity" onChange={''}      >
                                                    <option value="On"    >On</option>
                                                    <option value="Only Morning"    >Only Morning</option>
                                                    <option value="Only Night"    >Only Night</option>
                                                </select><h6 className="messactivity"    ></h6></td>


                                            <td className="text-center fw-bold text-dark align-middle    " colSpan="2"    >Listed</td>


                                            {/* <!-- edit the corresponding guest mess activity --> */}
                                            <td className=" w-1 p-3 text-center    "    > <button id="1" className="btn gradiant text-white edit-btn"  onClick="edit(this.id)" type="button" value="61f56329d15bcc35f5aaf14b" name="button"    ><span className="link-icon"    ><i className="fa fa-edit" aria-hidden="true"    ></i></span></button>
                                                {/* <button id="1"  onClick="submitedit(this.id)" type="submit" className="btn btn-secondary submit-edit" name="record" value="61f56329d15bcc35f5aaf14b"    ><span className="link-icon"    ><i className="fa fa-check-circle" aria-hidden="true"    ></i></span></button> */}
                                            </td>

                                            {/* <!-- Delete the corresponding guest mess activity --> */}
                                            <form className="" action="/student/delete" method="post"    ></form>
                                            <td className="  text-center align-middle    "    > <button type="submit" className="btn btn-danger" name="record" value="61f56329d15bcc35f5aaf14b"    ><span className="link-icon"    ><i className="fa fa-trash" aria-hidden="true"    ></i></span></button>
                                            </td>




                                        </tr><tr    >
                                            <td className="text-center align-middle    "    >3</td>
                                            <td className="text-center align-middle    "    >Tue Mar 01 2022</td>
                                            <td className="text-center align-middle    "    >rahul </td>
                                            <form className="" action="/student/edit" method="post"    ></form>
                                            <td className="text-center text-uppercase align-middle    "    >

                                                <select className="activity-select" name="messactivity" id="activity" onChange={``}     >
                                                    <option value="On"    >On</option>
                                                    <option value="Only Morning"    >Only Morning</option>
                                                    <option value="Only Night"    >Only Night</option>
                                                </select><h6 className="messactivity"    ></h6></td>


                                            <td className="text-center fw-bold text-dark align-middle    " colSpan="2"    >Listed</td>


                                            {/* <!-- edit the corresponding guest mess activity --> */}
                                            <td className=" w-1 p-3 text-center    "    > <button id="2" className="btn gradiant text-white edit-btn"  onClick="edit(this.id)" type="button" value="621a1aa6ab29503df2ba88ed" name="button"    ><span className="link-icon"    ><i className="fa fa-edit" aria-hidden="true"    ></i></span></button>
                                                {/* <button id="2"  onClick="submitedit(this.id)" type="submit" className="btn btn-secondary submit-edit" name="record" value="621a1aa6ab29503df2ba88ed"    ><span className="link-icon"    ><i className="fa fa-check-circle" aria-hidden="true"    ></i></span></button> */}
                                            </td>

                                            {/* <!-- Delete the corresponding guest mess activity --> */}
                                            <form className="" action="/student/delete" method="post"    ></form>
                                            <td className="  text-center align-middle    "    > <button type="submit" className="btn btn-danger" name="record" value="621a1aa6ab29503df2ba88ed"    ><span className="link-icon"    ><i className="fa fa-trash" aria-hidden="true"    ></i></span></button>
                                            </td>


                                        </tr>


                                    </tbody>
                                    <tfoot className="table-borderless "    >

                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    )
}
