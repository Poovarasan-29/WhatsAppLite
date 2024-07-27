import React from "react";

export default function Communities() {

    const a = [1, 2, 3, 4]


    return <div className="text-white">
        <div className="d-flex justify-content-between align-items-center px-3 pt-2" style={{ height: '60px', width: '100%' }}>
            <h3>Communities</h3>
            <button value="Create Community" className="mx-3 btn text-white-50 rounded-circle" style={{ boxShadow: 'none' }} title="Create Community"><i className="bi bi-plus fs-2"></i></button>
        </div>


        <div className="change-scollbar mt-1" style={{ height: '627px', overflowX: 'hidden' }}>

            <div className="d-flex px-4 py-3 align-items-center single-contact single-community">
                <i className="bi bi-people-fill bg-success d-inline-flex justify-content-center align-items-center rounded fs-4 me-3" style={{ width: '45px', height: '45px' }}></i><span> New community</span>
            </div>

            <div style={{ height: '10px', backgroundColor: 'rgb(12, 19, 23)', margin: ' 0px' }}></div>


            {a.map((i) => (<>
                <div className="d-flex px-4 py-3 align-items-center single-contact single-community" style={{cursor:'default'}}>
                    <img src="./Images/1.jpg" alt="" className="rounded me-3" style={{ width: '45px', height: '45px' }} />
                    <span className="fs-5">Royalo UK Team</span>
                </div>

                <div className="single-contact align-items-center py-2 px-4 d-flex single-community">
                    <div className="" style={{ width: '48px' }}>
                        <i className="bi bi-volume-up-fill bg-success d-inline-flex justify-content-center align-items-center rounded fs-4 me-3 ms-1" style={{ width: '38px', height: '38px' }}></i>
                    </div>
                    <div className="py-1 px-3" style={{ flexGrow: '1' }}>
                        <p className="m-0 fs-6">Announcements</p>
                        <p className="m-0 text-white-50" style={{ fontSize: '13px' }}>Ryttu tu daa</p>
                    </div>
                    <div className="d-flex flex-column align-items-center" style={{ width: '62px' }}>
                        <p className="text-white-50 m-0" style={{ fontSize: '13px' }}>Yesterday</p>
                        <p style={{ backgroundColor: 'rgb(6, 207, 156)', width: '22px', height: '22px' }} className="rounded rounded-circle text-center m-0 mt-1">1</p>
                    </div>
                </div>
                <p className="text-center single-contact py-3 m-0 text-success">View all</p>
                <div style={{ height: '10px', backgroundColor: 'rgb(12, 19, 23)', margin: '0px' }}></div>
            </>)
            )}

        </div>



    </div>
}