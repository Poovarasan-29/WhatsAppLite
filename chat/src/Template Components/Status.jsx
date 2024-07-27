import React from "react";

export default function Status() {

    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return <div className="text-white">
        <div className="d-flex justify-content-between px-3 py-3" style={{ height: '60px', width: '100%' }}>
            <h3>Status</h3>
            <div className="d-flex align-items-center">
                <button value="add status" className="mx-3 btn text-white-50 rounded-circle" style={{ boxShadow: 'none' }} title="Add Status"><i class="bi bi-plus fs-2"></i></button>
                <button value="more" className="btn text-white-50 rounded-circle" style={{ boxShadow: 'none' }} title="More"><i class="bi bi-three-dots-vertical fs-5"></i></button>
            </div>
        </div>

        <div className="change-scollbar mt-1" style={{ height: '625px', overflowX: 'hidden' }} >

            <div className="align-items-center py-1 px-3 d-flex mt-2">
                <div className="position-relative" style={{ width: '48px' }}>
                    <img src={`./Images/1.jpg`} alt="ben" className="rounded rounded-circle" style={{ height: '48px', objectFit: 'cover', width: '48px' }} />
                    <div className="my-status-img">
                        <div className="my-status-img-plus">+</div>
                    </div>
                </div>
                <div className="py-1 px-3" style={{ flexGrow: '1' }}>
                    <p className="m-0 fs-6">My Status</p>
                    <p className="m-0 text-white-50" style={{ fontSize: '13px' }}>Click to add status update</p>
                </div>
            </div>

            <div style={{ height: '10px', backgroundColor: 'rgb(12, 19, 23)', margin: '10px 0px' }}></div>

            <div className="ps-4">
                <p className="fs-5 fw-light" style={{ letterSpacing: '1px', color: 'rgb(10, 111, 105)' }}>RECENT</p>
            </div>
            <p className="ms-auto my-0" style={{ width: '81%', borderTop: '1px solid rgba(255,255,255,0.1)' }}></p>

            {
                a.map(i => (<>
                    <div className="single-contact align-items-center py-1 px-3 d-flex status-signal">
                        <div className="" style={{ width: '48px' }}>
                            <img src={`./Images/${i}.jpg`} alt="ben" className="rounded rounded-circle" style={{ height: '48px', objectFit: 'cover', width: '48px' }} />
                        </div>
                        <div className="py-1 px-3" style={{ flexGrow: '1' }}>
                            <p className="m-0 fs-5">Ben 10</p>
                            <p className="m-0 text-white-50" style={{ fontSize: '13px' }}>Today at 5:29 pm</p>
                        </div>
                    </div>
                    <p className="ms-auto my-0" style={{ width: '81%', borderTop: '1px solid rgba(255,255,255,0.1)' }}></p>
                </>))
            }
        </div>

    </div>
}