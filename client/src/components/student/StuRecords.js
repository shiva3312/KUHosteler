import React, { useEffect, useState } from "react";
import StuLayout from "./StuLayout";
import { isAuthenticated } from "../../auth";
import Footer from "../Footer"
import { read } from "./stuApi";



const MealAcitvity = ({ history }) => {
    var totalDue = 0;
    const { user, token } = isAuthenticated();
    var [stuData, setStuData] = useState(user)

    useEffect(() => {
        read(user._id, token).then((data) => {
            setStuData(data)
        })
    },[]);

    stuData.paymentRecord.forEach(rec => {
        totalDue += rec.totalFine + rec.auditAmount - rec.paid;
    });

    user.activity.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });


    const mealAcitvity = () => {
        return (
            <>

                <h1>Payment Record</h1>
                <section className="shadow">

                    <div className="shadow tbl-header">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Date</th>
                                    <th>Audit Amount</th>
                                    <th>Paid</th>
                                    <th>Fine</th>
                                    <th>Due Amount</th>

                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <tbody>

                                {stuData.paymentRecord.map((rec, i) => (

                                    <tr key={i}>
                                        <td >{i + 1}</td>
                                        <td>{rec.auditDate.slice(0, 15)}</td>
                                        <td >{rec.auditAmount}</td>
                                        <td >{rec.paid}</td>
                                        <td >{rec.totalFine}</td>
                                        <td >{rec.totalFine + rec.auditAmount - rec.paid}</td>

                                    </tr>

                                ))

                                }
                            </tbody>
                        </table>
                    </div>
                    <tfoot className="table-borderless ">
                        <tr >
                            <th colSpan="7" className="table-white text-center text-middle">Total Due Amount</th>
                            <th className="table-white text-center text-middle">{totalDue} Rs.</th>
                        </tr>
                    </tfoot>
                </section>


            </>
        );
    };




    return (
        <>
            <StuLayout history={history} >
                {/* show your content in this div */}
                <div className="row " >
                    <div className="col mb-0">{mealAcitvity()}</div>
                </div>
            </StuLayout>
            <Footer />
        </>
    );
};

export default MealAcitvity;
