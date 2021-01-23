import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const GeneralInformaton = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div  style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                <div className="col">
                    <h5>GENERAL INFORMATION</h5>
                   </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <div className="row">
                        <div className="col">
                            <h6>EXPLAIN ALL "YES" RESPONSES</h6>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">1. WITH THE EXCEPTION OF ANY ENCUMBRANCES, ARE ANY VEHICLES FOR WHICH INSURANCE IS REQUESTED NOT SOLELY OWNED BY AND REGISTERED TO THE APPLICANT?</label>
                            </div>
                        </div>
                        <div className="row ml-2">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">VEH #</label>
                                        <input
                                        type=""text
                                        name="VEH"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-10">
                                    <label htmlFor="">NAME OF OTHER OWNER</label>
                                        <input
                                        type=""text
                                        name="NAME"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                            <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">VEH #</label>
                                        <input
                                        type=""text
                                        name="VEH"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-10">
                                    <label htmlFor="">NAME OF OTHER OWNER</label>
                                        <input
                                        type="text"
                                        name="NAME"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row">
                        <div className="col">
                            <h6>Y / N</h6>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                        <input
                                        type="text"
                                        name="NAME Y/N"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>2. DO OVER 50% OF THE EMPLOYEES USE THEIR AUTOS IN THE BUSINESS? (no explanation needed)</h6>
                        <textarea class="form-control mb-2" name="2. DO OVER" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                        <input
                                        type="text"
                                        name="NAME Y/N"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>3. IS THERE A VEHICLE MAINTENANCE PROGRAM IN OPERATION?</h6>
                        <textarea class="form-control mb-2" name="IS THERE" id="" cols="30" rows="3"></textarea>             
                    </div>
                    <div className="col-1">
                    <input
                                        type="text"
                                        name="IS THERE A VEHICLE Y/N"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>4. ARE ANY VEHICLES LEASED TO OTHERS?</h6>
                        <textarea class="form-control mb-2" name="RE ANY VEHICLES " id="" cols="30" rows="3"></textarea>             
                    </div>
                    <div className="col-1">
                    <input
                                        type="text"
                                        name="RE ANY VEHICLES  Y/N"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>5. ANY CAR MODIFIED / SPECIAL EQUIPMENT? (Include customized vans / pickups)</h6>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">VEH #</label>
                                        <input
                                        type="text"
                                        name="VEH"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-8">
                                    <label htmlFor="">DESCRIPTION</label>
                                        <input
                                        type="text"
                                        name="DESCRIPTION"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-2">
                                     <label htmlFor="">COST</label>
                                        <input
                                        type="text"
                                        name="COST"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                            <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">VEH #</label>
                                        <input
                                        type="text"
                                        name="VEH"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-8">
                                    <label htmlFor="">DESCRIPTION</label>
                                        <input
                                        type="text"
                                        name="DESCRIPTION"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-2">
                                     <label htmlFor="">COST</label>
                                        <input
                                        type="text"
                                        name="COST"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>             
                    </div>
                    <div className="col-1">
                    <input
                                        type="text"
                                        name="RE ANY VEHICLES  Y/N"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>7. DO OPERATIONS INVOLVE TRANSPORTING HAZARDOUS MATERIAL?</h6>
                        <textarea class="form-control mb-2" name="DO OPERATIONS" id="" cols="30" rows="3"></textarea>             
                    </div>
                    <div className="col-1">
                    <input
                                        type="text"
                                        name="IDO OPERATIONS Y/N"
                                        class="form-control mb-2 mt-3"
                                        onChange={handleBlur}
                                        />
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(2) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(4) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default GeneralInformaton;