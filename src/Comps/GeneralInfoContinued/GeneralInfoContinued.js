import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const GeneralInfoContinued = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-4">
                        <h5>GENERAL INFORMATION (continued)</h5>
                    </div>
                    <div className="col-8">
                    <div className="row ">
                            <div className="col-7 text-right">
                                <h5>AGENCY CUSTOMER ID:</h5>
                            </div>
                            <div className="col-5">
                                <input
                                type="text"
                                name="AGENCY"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>EXPLAIN ALL "YES" RESPONSES</h6>
                    </div>
                    <div className="col-1">
                        <h6>Y / N</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>8. ANY HOLD HARMLESS AGREEMENTS?</h6>
                        <textarea class="form-control mb-2" name="ANY HOLD HARMLESS" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                type="text"
                                name="ANY HOLD HARMLESS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>9. ANY VEHICLES USED BY FAMILY MEMBERS? IF SO, IDENTIFY</h6>
                        <textarea class="form-control mb-2" name="9. ANY VEHICLES USED" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                type="text"
                                name="9. ANY VEHICLES USED"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>10. DOES THE APPLICANT OBTAIN MVR (Motor Vehicle Record) VERIFICATIONS?</h6>
                        <textarea class="form-control mb-2" name="10. DOES THE APPLICANT" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                type="text"
                                name="10. DOES THE APPLICANT"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>11. DOES THE APPLICANT HAVE A SPECIFIC DRIVER RECRUITING METHOD?</h6>
                        <textarea class="form-control mb-2" name="11. DOES THE APPLICANT" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                type="text"
                                name="11. DOES THE APPLICANT"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>12. ARE ANY DRIVERS NOT COVERED BY WORKERS COMPENSATION?</h6>
                        <textarea class="form-control mb-2" name="12. ARE ANY DRIVERS" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                type="text"
                                name="12. ARE ANY DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>13. ANY VEHICLES OWNED BUT NOT SCHEDULED ON THIS APPLICATION?</h6>
                        <textarea class="form-control mb-2" name="13. ANY VEHICLES OWNED BUT" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                type="text"
                                name="13. ANY VEHICLES OWNED BUT"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>14. ANY DRIVERS WITH CONVICTIONS FOR MOVING TRAFFIC VIOLATIONS?</h6>
                        <h6 style={{fontSize: "14px"}}>APPLICABLE ONLY IN KANSAS: UNDER KANSAS LAW, THE FOLLOWING TRAFFIC VIOLATIONS ARE NOT REQUIRED TO BE REPORTED TO INSURERS:</h6>
                        <h6 style={{fontSize: "14px"}}>1. A speeding violation of up to six (6) miles per hour (mph) that occurs in an area with a maximum posted speed limit from 30 mph through 54 mph, or:</h6>
                        <h6 style={{fontSize: "14px"}}>2. A speeding violation of up to ten (10) miles per hour (mph) that occurs in an area with a maximum posted speed limit from 55 mph through 75 mph.</h6>
                        <div className="row">
                            <div className="col-8">
                                <div className="row">
                                <div className="col-2">
                                    <label htmlFor="">DRV #</label>
                                    <input
                                        type="text"
                                        name="DRV"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="">DATE (MM/DD/YYYY)</label>
                                    <input
                                        type="date"
                                        name="DATE (MM/DD/YYYY)"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="">TYPE</label>
                                    <input
                                        type="text"
                                        name="TYPE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                    />
                                </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                <div className="col-8">
                                    <label htmlFor="">PLACE (CITY, STATE)</label>
                                    <input
                                        type="text"
                                        name="PLACE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor=""># YRS REV</label>
                                    <input
                                        type="text"
                                        name="# YRS REV"
                                        class="form-control mb-2"
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
                                name="13. ANY VEHICLES OWNED BUT"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>15. HAS AGENT INSPECTED VEHICLES?</h6>
                        <textarea class="form-control mb-2" name="15. HAS AGENT" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                type="text"
                                name="15. HAS AGENT"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>16. ARE ALL VEHICLES TO BE INCLUDED IN THIS POLICY PART OF A FLEET?</h6>
                    </div>
                    <div className="col-1">
                                <input
                                type="text"
                                name="16. ARE ALL VEHICLES TO"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>17. DO YOU HAVE ELECTRONIC MONITORING DEVICES THAT RECORD AND TRANSMIT DATA IN ANY OF YOUR VEHICLES?</h6>
                        <div className="row">
                            <div className="col-5">
                            <span>If "YES", what percentage of vehicles in your overall fleet are monitored (1 - 100%</span>
                            </div>
                            
                                <div className="col-2">
                                <input
                                type="text"
                                name="If YES"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                            <div className="col-">
                            <span>Please indicate how you utilize the devices (check all that apply):</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                                <input
                                type="text"
                                name="17. DO YOU HAVE ELECTRONIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <label htmlFor="">DESCRIPTION OF GARAGE / STORAGE LOCATIONS</label>
                        <input
                                type="text"
                                name="DESCRIPTION"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                    <div className="col-4">
                        <label htmlFor="">MAXIMUM DOLLAR VALUE SUBJECT TO LOSS</label>
                        <input
                                type="text"
                                name="MAXIMUM DOLLAR VALUE SUBJECT TO LOSS "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(3) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(5) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default GeneralInfoContinued;