import React from 'react'
import './meal.css'
export default function Meal() {
    return(
        <>
         <div id="basicinfo" class="container mid-part  ">
        <div class="row ">
            <div class="col-lg-4 col-mid-12 mid-left  user-profile">
                <table class="table table-hover">
                    <div class="firstblock">
                    <thead>
                        <tr class="bg-dark">
                            <th class=" text-light h3 p-3" colspan="3">Basic Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-warning">
                            <td>User Id</td>
                            <td class="text-end" colspan='2'>test@expl.com</td>
                        </tr>
                        <tr class="table-warning">
                            <td>Membership status</td>


                            <td class="text-end text-success " colspan='2'>Activated</td>




                        </tr>
                        <tr class="table-warning" onmouseover="editShow()" onmouseout="edithide()">
                            <td>Meal status</td>
                            <form class="" action="/student/userprofile/messActivity" method="post">

                                <td class="text-end text-success" colspan='2'>
                                    <label class="switch">
                                        <input type="checkbox" checked onchange="this.form.submit()"/>
                                        <span class="slider round"></span>
                                    </label>
                                </td>

                            </form>
                        </tr>

                        <tr class="table-warning">
                            <td>Joining date</td>
                            <td class="text-end" colspan='2'>Wed Jun 13 2018</td>
                        </tr>
                        <tr class="table-warning">
                            <td>Room No</td>
                            <td class="text-end" colspan='2'>10</td>
                        </tr>
                        <tr class="table-warning">
                            <td>Hostel Name</td>
                            <td class="text-end text-capitalize" colspan='2'>btmens</td>
                        </tr>
                    </tbody>
                    </div>
                </table>


            </div>

            {/* <!--------------------------------------------------------------------------- Mid part 2nd block -----------------------------------------------------------------------------> */}

            <div class="col-lg-4 col-mid-12 mid-mid user-profile">
                <table class="table table-hover ">
                    <div class="firstblock">
                    
                        <tr class="bg-dark">
                            <th colspan="2" class="text-light h3 p-3">Charge info</th>
                        </tr>
                    <tbody>
                        <tr class="table-warning">
                            <td>Last Month charge</td>
                            <td class="text-end">1545 Rs.</td>
                        </tr>
                        <tr class="table-warning">

                            <td>Today Nigth charge</td>
                            <td class="text-end text-success">30 Rs. Apx</td>

                        </tr>
                        <tr class="table-warning">
                            <td>Paid Amount</td>
                            <td class="text-end">1230 Rs.</td>
                        </tr>
                        <tr class="table-warning">
                            <td>Rest Amount</td>
                            <td class="text-end">526 Rs.</td>
                        </tr>
                        <tr class="table-warning">
                            <td class="align-middle">Guest charge</td>
                            <td>
                                <table class="table">
                                    <tr>
                                        <td class="text-end">Morning</td>
                                        <td class="text-end">Night</td>
                                    </tr>
                                    <tr>
                                        <td class="text-end"> 50 Rs.</td>
                                        <td class="text-end"> 50 Rs.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </div>
                </table>
            </div>

            <div class="col-lg-4 col-mid-12 mid-right user-profile ">
                <canvas id="myChart"></canvas>


                <button type="button" class="btn invisible" onclick="addDataset( 2, 1, 1, 1)" name="button">Add</button>
            </div>
        </div>
    </div>

    <script src="chart.js"></script>


        </>
    )
}
