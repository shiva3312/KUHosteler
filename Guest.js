import React from 'react'
import './guest.css'
export default function Guest() {
    return (
        <>
         <div class="container">
        <div class="user-profile">
            <div id="addguest" class="container bg-light mb-5 pb-5 ">
                <div class="head">
                    <h3 class="display-6 text-light text-center text-middle p-3 mb-4">Add Guest</h3>
                </div>

                <form class="row g-3" method="post" action="/addguest">
                    <div class="col-lg-3 col-sm-12">
                        <table class="table table-borderless">
                            <tr>
                                <td colspan="" class="lead"> Name </td>
                            </tr>
                            <tr>
                                <td><input type="Name" class="form-control" id="inputEmail"
                                        placeholder=" Enter Guest Name" name="name" value="" required/></td>
                            </tr>
                        </table>
                    </div>

                    <div class="col-lg-4 col-sm-12">
                        <table class="table table-borderless">
                            <tr>
                                <td colspan="2" class="lead"> From </td>
                            </tr>
                            <tr>
                                <td>
                                    <select class="form-select" name="startoption">
                                        <option selected>On</option>
                                        <option value="morning">Only Morning</option>
                                        <option value="night">Only Night</option>
                                    </select>
                                </td>
                                <td><input type="date" class="form-control" name="startDate" required/></td>
                            </tr>
                        </table>
                    </div>

                    <div class="col-lg-4 col-sm-12">
                        <table class="table table-borderless">
                            <tr>
                                <td colspan="2" class="lead"> To </td>
                            </tr>

                            <tr>
                                <td>
                                    <select class="form-select" name="endoption">
                                        <option selected>On</option>
                                        <option value="morning">Only Morning</option>
                                        <option value="night">Only Night</option>
                                    </select>
                                </td>
                                <td><input type="date" class="form-control" name="endDate" required/></td>
                            </tr>
                        </table>
                    </div>

                    <div class="col-lg-1 col-sm-12 text-end">
                        <table class="table table-borderless">
                            <tr>
                                <td colspan="" class="lead ">. </td>
                            </tr>
                            <tr>
                                <td width="10%"><button type="submit" class="btn btn-success">Add</button></td>
                            </tr>
                        </table>

                    </div>
                </form>
            </div>

        </div>

    
        <div id="guestlist" class="container align-middle lower-part mt-5 pt-5 mb-5 pb-5 user-profile">
            <div class="head">
                <h3 class="display-6 text-light text-center text-middle p-4 "> Active Guest List</h3>
            </div>
            <div class="row">
                <table class="table table-hover  " id="tableLevel-1">
                    <thead>
                        <tr class="head">
                            <th class="text-center align-middle text-light h4 p-4">SL</th>
                            <th class="text-center align-middle text-light h4">Date</th>
                            <th class="text-center align-middle text-light h4">Name </th>
                            <th class="text-center align-middle text-light h4">Mess Activity </th>
                            <th class="text-center align-middle text-light h4" colspan="2">Mess status</th>
                            <th class="text-center align-middle text-light h4" colspan="2">Activity</th>

                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td class="text-center align-middle table-warning">1</td>
                            <td class="text-center align-middle table-warning">Sun Jan 30 2022</td>
                            <td class="text-center align-middle table-warning">jemmi</td>
                            <form class="" action="/student/edit" method="post">
                                <td class="text-center text-uppercase align-middle table-warning">

                                    <select class="activity-select" name="messactivity" id="activity">
                                        <option value="On">On</option>
                                        <option value="Only Morning">Only Morning</option>
                                        <option value="Only Night">Only Night</option>
                                    </select>
                                    <h6 class="messactivity">night</h6>
                                </td>


                                <td class="text-center fw-bold text-dark align-middle table-warning" colspan="2">Listed
                                </td>
                                </form>
                                </tr>
                                </tbody>
                              
                    <tfoot class="table-borderless ">

                    </tfoot>
                </table>
            </div>
        </div>


</div>
                      
        </>
    )}