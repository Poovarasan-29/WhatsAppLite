import React, { useState } from "react";

export default function Channels() {
    const [searchValue, setSearchValue] = useState();
    const a = [1, 2, 3, 4, 5, 6]
    function handleSearchBar(e) {
        setSearchValue(e.target.value)
    }

    return <div className="text-white">
        <div className="d-flex justify-content-between align-items-center px-3 pt-2" style={{ height: '60px', width: '100%' }}>
            <h3>Channels</h3>
            <button value="Create channel" className="mx-3 btn text-white-50 rounded-circle" style={{ boxShadow: 'none' }} title="Create channel"><i className="bi bi-plus fs-2"></i></button>
        </div>
        <div className="mx-auto px-2 py-1 bg-dark rounded rounded-5 my-3" style={{ width: '90%' }}>
            <span className="d-inline-block text-center text-white-50" style={{ width: '10%' }}><i className="bi bi-search"></i></span>
            <input type="search" className="form-control-sm border-0 bg-transparent text-white" style={{ width: '90%', outline: 'none' }} placeholder="Search channels" value={searchValue} onChange={handleSearchBar} />
        </div>


        <div className="change-scollbar mt-1" style={{ height: '563px', overflowX: 'hidden' }}>

            {a.map((i) => (<>
                <div className="single-contact align-items-center py-1 px-3 d-flex">
                    <div className="" style={{ width: '48px' }}>
                        <img src={`./Images/${i}.jpg`} alt="ben" className="rounded rounded-circle" style={{ height: '48px', objectFit: 'cover', width: '48px' }} />
                    </div>
                    <div className="py-1 px-3" style={{ flexGrow: '1' }}>
                        <p className="m-0 fs-5">Ben 10</p>
                        <p className="m-0 text-white-50" style={{ fontSize: '13px' }}>Ryttu tu daa</p>
                    </div>
                    <div className="d-flex flex-column align-items-center" style={{ width: '62px' }}>
                        <p className="text-white-50 m-0" style={{ fontSize: '13px' }}>Friday</p>
                        <p style={{ backgroundColor: 'rgb(6, 207, 156)', width: '22px', height: '22px' }} className="rounded rounded-circle text-center m-0 mt-1">1</p>
                    </div>
                </div>
                <p className="ms-auto my-0" style={{ width: '86%', borderTop: '1px solid rgba(255,255,255,0.1)' }}></p>
            </>)
            )}

            <h6 className="ps-4 my-3">Find channels to follow</h6>


            {a.map((i) => (<>
                <div className="single-contact align-items-center py-1 px-3 d-flex">
                    <div className="" style={{ width: '48px' }}>
                        <img src={`./Images/${i}.jpg`} alt="ben" className="rounded rounded-circle" style={{ height: '48px', objectFit: 'cover', width: '48px' }} />
                    </div>
                    <div className="py-1 px-3" style={{ flexGrow: '1' }}>
                        <p className="m-0 fs-5">Ben 10</p>
                        <p className="m-0 text-white-50" style={{ fontSize: '13px' }}>17.2Cr followers</p>
                    </div>
                    <button className="btn border rounded rounded-pill text-success border-dark">Follow</button>
                </div>
                <p className="ms-auto my-0" style={{ width: '86%', borderTop: '1px solid rgba(255,255,255,0.1)' }}></p>
            </>)
            )}


        </div>


    </div>
}