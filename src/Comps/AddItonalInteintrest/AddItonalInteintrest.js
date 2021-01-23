import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const AddItonalInteintrest = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-5">
                        <h5>ADDITIONAL INTEREST / CERTIFICATE RECIPIENT</h5>
                    </div>
                    <div className="col-7">
                        <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="ACORD"
                            class="custom-control-input" 
                            id="ACORD"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="ACORD">ACORD 45 attached for additional names</label>
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h6>INTEREST</h6>
                        <div className="row">
                            <div className="col">
                                <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="ADDITIONAL INSURED"
                                    class="custom-control-input" 
                                    id="ADDITIONAL INSURED"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="ADDITIONAL">ADDITIONAL INSURED</label>
                                </div>
                                <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="EMPLOYEE"
                                    class="custom-control-input" 
                                    id="EMPLOYEE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="ADDITIONAL">EMPLOYEE AS LESSOR</label>
                                </div>
                                <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="PAYABLE"
                                    class="custom-control-input" 
                                    id="PAYABLE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="PAYABLE">LENDER'S LOSS AS PAYABLE</label>
                                </div>
                            </div>
                            <div className="col">
                                <div class="custom-control custom-checkbox my-4">
                                    <input
                                    type="checkbox"
                                    name="LOSS PAYEE"
                                    class="custom-control-input" 
                                    id="LOSS PAYEE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="ADDITIONAL">LOSS PAYEE</label>
                                </div>
                                <div class="custom-control custom-checkbox my-4">
                                    <input
                                    type="checkbox"
                                    name="LOSS PAYEE"
                                    class="custom-control-input" 
                                    id="LOSS PAYEE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LOSS PAYEE">LOSS PAYEE</label>
                                </div>
                                <div class="custom-control custom-checkbox my-4">
                                    <input
                                    type="checkbox"
                                    name="REGISTRANT"
                                    class="custom-control-input" 
                                    id="REGISTRANT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="REGISTRANT">REGISTRANT</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <h6>NAME AND ADDRESS</h6>
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-3">RANK:</div>
                                    <div className="col-3">
                                        <input type="text" onChange={handleBlur} className="RANK" className="form-control"/>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col"><h6>EVIDENCE:</h6></div>
                                            
                                            <div className="col">
                                            <div class="custom-control custom-checkbox my-4">
                                    <input
                                    type="checkbox"
                                    name="CERTIFICATE"
                                    class="custom-control-input" 
                                    id="CERTIFICATE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="CERTIFICATE">CERTIFICATE</label>
                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col"><textarea name="NAME AND ADDRESS" className="form-control" id="" cols="30" rows="4"></textarea></div>
                        </div>
                        <div className="row mt-1">
                                <div className="col-6">
                                    <div className="row">
                                    <div className="col-6">
                                    <h6>REFERENCE / LOAN:</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control"  onChange={handleBlur}/>
                                </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col text-center">
                                <h6>INTEREST IN ITEM NUMBER</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">VEHICLE:</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="VEHICLE"/>
                            </div>
                            <div className="col">
                                <label htmlFor="">VEHICLE:</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="VEHICLE"/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-3">
                        <h6>INTEREST</h6>
                        <div className="row">
                            <div className="col">
                                <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="ADDITIONAL INSURED"
                                    class="custom-control-input" 
                                    id="ADDITIONAL INSURED"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="ADDITIONAL">ADDITIONAL INSURED</label>
                                </div>
                                <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="EMPLOYEE"
                                    class="custom-control-input" 
                                    id="EMPLOYEE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="ADDITIONAL">EMPLOYEE AS LESSOR</label>
                                </div>
                                <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="PAYABLE"
                                    class="custom-control-input" 
                                    id="PAYABLE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="PAYABLE">LENDER'S LOSS AS PAYABLE</label>
                                </div>
                            </div>
                            <div className="col">
                                <div class="custom-control custom-checkbox my-4">
                                    <input
                                    type="checkbox"
                                    name="LOSS PAYEE"
                                    class="custom-control-input" 
                                    id="LOSS PAYEE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="ADDITIONAL">LOSS PAYEE</label>
                                </div>
                                <div class="custom-control custom-checkbox my-4">
                                    <input
                                    type="checkbox"
                                    name="LOSS PAYEE"
                                    class="custom-control-input" 
                                    id="LOSS PAYEE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LOSS PAYEE">LOSS PAYEE</label>
                                </div>
                                <div class="custom-control custom-checkbox my-4">
                                    <input
                                    type="checkbox"
                                    name="REGISTRANT"
                                    class="custom-control-input" 
                                    id="REGISTRANT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="REGISTRANT">REGISTRANT</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <h6>NAME AND ADDRESS</h6>
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-3">RANK:</div>
                                    <div className="col-3">
                                        <input type="text" onChange={handleBlur} className="RANK" className="form-control"/>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col"><h6>EVIDENCE:</h6></div>
                                            
                                            <div className="col">
                                            <div class="custom-control custom-checkbox my-4">
                                    <input
                                    type="checkbox"
                                    name="CERTIFICATE"
                                    class="custom-control-input" 
                                    id="CERTIFICATE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="CERTIFICATE">CERTIFICATE</label>
                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col"><textarea name="NAME AND ADDRESS" className="form-control" id="" cols="30" rows="4"></textarea></div>
                        </div>
                        <div className="row mt-1">
                                <div className="col-6">
                                    <div className="row">
                                    <div className="col-6">
                                    <h6>REFERENCE / LOAN:</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control"  onChange={handleBlur}/>
                                </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col text-center">
                                <h6>INTEREST IN ITEM NUMBER</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">VEHICLE:</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="VEHICLE"/>
                            </div>
                            <div className="col">
                                <label htmlFor="">VEHICLE:</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="VEHICLE"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(4) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(6) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default AddItonalInteintrest;