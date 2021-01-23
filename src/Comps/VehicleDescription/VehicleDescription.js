import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const VehicleDescription = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h5>VEHICLE DESCRIPTION</h5>
                    </div>
                    <div className="col">
                        <div class="custom-control custom-checkbox">
                        <input onChange={handleBlur} type="checkbox" name="ACORD" class="custom-control-input" value="ACORD AS LESSOR" id="EMPLOYEE"/>
                        <label class="custom-control-label" for="ACORD">ACORD 129 attached for additional vehicles</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">AGENCY CUSTOMER ID:</label>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control"  onChange={handleBlur} name="AGENCY CUSTOMER ID"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="">VEH #</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="VEH"/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">YEAR</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="YEAR"/>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">MAKE:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="MAKE"/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MODEL:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="MODEL"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="" style={{fontSize : "12px"}}>BODY TYPE:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="BODY TYPE"/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">V.I.N.:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="V.I.N.:"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-4 text-center">
                                <label htmlFor="">VEHICLE TYPE</label>
                                <div className="row">
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="PP"
                                    class="custom-control-input" 
                                    id="PP"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="PP">PP</label>
                                    </div>
                                    </div>
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="SPEC"
                                    class="custom-control-input" 
                                    id="SPEC"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="SPEC">SPEC</label>
                                    </div>
                                    </div>
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="COML"
                                    class="custom-control-input" 
                                    id="COML"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="COML">COML</label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <label htmlFor="">GARAGING ADDRESS</label>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">STREET (Required in KY)</label>
                        <input type="text" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">CITY</label>
                        <input type="text" name="CITY" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">COUNTY</label>
                        <input type="text" name="COUNTY" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-1">
                        <label htmlFor="">STATE</label>
                        <input type="text" name="STATE" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-1">
                        <label htmlFor="">ZIP</label>
                        <input type="text" name="ZIP" className="form-control" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                            <div className="row">
                            <div className="col-1">
                            <span style={{fontSize : "14px"}}>LICSTATE</span>
                            <input type="text" name="LIC STATE" className="form-control mt-1" onChange={handleBlur}/>
                        </div>
                        <div className="col-1">
                            <label htmlFor=""> TERR</label>
                            <input type="text" name="TERR" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor=""> GVW / GCW</label>
                            <input type="text" name="GVW / GCW" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">CLASS</label>
                            <input type="text" name="CLASS" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">SIC</label>
                            <input type="text" name="SIC" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">FACTOR</label>
                            <input type="text" name="FACTOR" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">SEAT CP</label>
                            <input type="text" name="SEAT CP" className="form-control" onChange={handleBlur}/>
                        </div>
                        </div>
                    </div>
                    <div className="col-5">
                       <div className="row">
                           <div className="col-2">
                           <    label htmlFor="">RADIUS</label>
                                <input type="text" name="RADIUS" className="form-control" onChange={handleBlur}/>
                           </div>
                           <div className="col-6">
                                < label htmlFor="">FARTHEST TERMINAL</label>
                                <input type="text" name="RADIUS" className="form-control" onChange={handleBlur}/>
                           </div>
                           <div className="col-4">
                                < label htmlFor="">COST NEW</label>
                                <input type="text" name="COST NEW" className="form-control" onChange={handleBlur}/>
                           </div>
                       </div>
                    </div>    
                </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-4">
                                <h6>USE</h6>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="PLEASURE"
                            class="custom-control-input" 
                            id="PLEASURE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="PLEASURE">PLEASURE</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FARM"
                            class="custom-control-input" 
                            id="FARM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FARM">FARM</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="COMM"
                            class="custom-control-input" 
                            id="COMM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="COMM">COMM</label>
                            </div>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="RETAIL"
                            class="custom-control-input" 
                            id="RETAIL"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="RETAIL">RETAIL</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="SERVICE"
                            class="custom-control-input" 
                            id="SERVICE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SERVICE">SERVICE</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FOR HIRE"
                            class="custom-control-input" 
                            id="FOR HIRE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FOR HIRE">FOR HIRE</label>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-2">
                                    <h6>CHECK COVERAGES</h6>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="LIAB"
                                    class="custom-control-input" 
                                    id="LIAB"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LIAB">LIAB</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="NO-FAULT"
                                    class="custom-control-input" 
                                    id="NO-FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="NO-FAULT">NO-FAULT</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ADD'L NO FAULT"
                                    class="custom-control-input" 
                                    id="ADD'L NO FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="ADD'L NO FAULT">ADD'L NO FAULT</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MED PAY"
                                    class="custom-control-input" 
                                    id="MED PAY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="MED PAY">MED PAY</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="UNINS"
                                    class="custom-control-input" 
                                    id="UNINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="UNINS">UNINS MOTOR</label>

                                    </div>
                                </div>

                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="MOTOR UNDRINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="MOTOR UNDRINS">MOTOR UNDRINS</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TOWING & LABOR"
                                    class="custom-control-input" 
                                    id="TOWING & LABOR"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="TOWING & LABOR">TOWING & LABOR</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="F"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="F"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="F">F</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FT"
                                    class="custom-control-input" 
                                    id="FT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="FT">FT</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FTW"
                                    class="custom-control-input" 
                                    id="FTW"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="F">FTW</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="LSP"
                                    class="custom-control-input" 
                                    id="LSP"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="LSP">LSP</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COMPOTC"
                                    class="custom-control-input" 
                                    id="COMPOTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMPOTC">COMPOTC</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COLL"
                                    class="custom-control-input" 
                                    id="COLL"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COLL">COLL</label>
                                </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="REIMB"
                                    class="custom-control-input" 
                                    id="REIMB"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="REIMB">REIMB</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="FG"
                                    class="custom-control-input" 
                                    id="FG"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="FG">FG</label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <h6>DEDUCTIBLES</h6>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ACV"
                                    class="custom-control-input" 
                                    id="ACV"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ACV">ACV</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="AA"
                                    class="custom-control-input" 
                                    id="AA"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="AA">AA</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ST AMT"
                                    class="custom-control-input" 
                                    id="ST AMT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ST AMT">ST AMT</label>
                                    </div>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                </div>
                                <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="COMP/OTC"
                                    class="custom-control-input" 
                                    id="COMP/OTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMP/OTC">COMP/OTC</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>
                                    </div>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <h6 style={{fontSize: "14px"}}>DRIVE TO WORK / SCHOOL</h6>
                        </div>
                        <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="< 15 MILES"
                                        class="custom-control-input" 
                                        id="< 15 MILES"
                                        onChange={handleBlur}
                                        />
                                        <label style={{fontSize: "14px"}} class="custom-control-label" for="< 15 MILES">15 MILES</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="15 MILES +"
                                        class="custom-control-input" 
                                        id="15 MILES +"
                                        onChange={handleBlur}
                                        />
                                        <label style={{fontSize: "14px"}} class="custom-control-label" for="15 MILES +">15 MILES +</label>
                                    </div>
                                    
                        </div>
                        <div className="col-4">
                            <label htmlFor="">NET VEH DR/CR:</label>
                            <input type="text" className="form-control" onChange={handleBlur} name="NET VEH DR/CR"/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="">TOTAL PREM: $</label>
                            <input type="text" className="form-control" onChange={handleBlur} name="TOTAL PREM: $"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col">
                        <h5>VEHICLE DESCRIPTION</h5>
                    </div>
                    <div className="col">
                        <div class="custom-control custom-checkbox">
                        <input onChange={handleBlur} type="checkbox" name="ACORD" class="custom-control-input" value="ACORD AS LESSOR" id="EMPLOYEE"/>
                        <label class="custom-control-label" for="ACORD">ACORD 129 attached for additional vehicles</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">AGENCY CUSTOMER ID:</label>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control"  onChange={handleBlur} name="AGENCY CUSTOMER ID"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="">VEH #</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="VEH"/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">YEAR</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="YEAR"/>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">MAKE:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="MAKE"/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MODEL:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="MODEL"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="" style={{fontSize : "12px"}}>BODY TYPE:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="BODY TYPE"/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">V.I.N.:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="V.I.N.:"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-4 text-center">
                                <label htmlFor="">VEHICLE TYPE</label>
                                <div className="row">
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="PP"
                                    class="custom-control-input" 
                                    id="PP"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="PP">PP</label>
                                    </div>
                                    </div>
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="SPEC"
                                    class="custom-control-input" 
                                    id="SPEC"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="SPEC">SPEC</label>
                                    </div>
                                    </div>
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="COML"
                                    class="custom-control-input" 
                                    id="COML"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="COML">COML</label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <label htmlFor="">GARAGING ADDRESS</label>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">STREET (Required in KY)</label>
                        <input type="text" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">CITY</label>
                        <input type="text" name="CITY" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">COUNTY</label>
                        <input type="text" name="COUNTY" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-1">
                        <label htmlFor="">STATE</label>
                        <input type="text" name="STATE" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-1">
                        <label htmlFor="">ZIP</label>
                        <input type="text" name="ZIP" className="form-control" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                            <div className="row">
                            <div className="col-1">
                            <span style={{fontSize : "14px"}}>LICSTATE</span>
                            <input type="text" name="LIC STATE" className="form-control mt-1" onChange={handleBlur}/>
                        </div>
                        <div className="col-1">
                            <label htmlFor=""> TERR</label>
                            <input type="text" name="TERR" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor=""> GVW / GCW</label>
                            <input type="text" name="GVW / GCW" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">CLASS</label>
                            <input type="text" name="CLASS" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">SIC</label>
                            <input type="text" name="SIC" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">FACTOR</label>
                            <input type="text" name="FACTOR" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">SEAT CP</label>
                            <input type="text" name="SEAT CP" className="form-control" onChange={handleBlur}/>
                        </div>
                        </div>
                    </div>
                    <div className="col-5">
                       <div className="row">
                           <div className="col-2">
                           <    label htmlFor="">RADIUS</label>
                                <input type="text" name="RADIUS" className="form-control" onChange={handleBlur}/>
                           </div>
                           <div className="col-6">
                                < label htmlFor="">FARTHEST TERMINAL</label>
                                <input type="text" name="RADIUS" className="form-control" onChange={handleBlur}/>
                           </div>
                           <div className="col-4">
                                < label htmlFor="">COST NEW</label>
                                <input type="text" name="COST NEW" className="form-control" onChange={handleBlur}/>
                           </div>
                       </div>
                    </div>    
                </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-4">
                                <h6>USE</h6>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="PLEASURE"
                            class="custom-control-input" 
                            id="PLEASURE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="PLEASURE">PLEASURE</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FARM"
                            class="custom-control-input" 
                            id="FARM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FARM">FARM</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="COMM"
                            class="custom-control-input" 
                            id="COMM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="COMM">COMM</label>
                            </div>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="RETAIL"
                            class="custom-control-input" 
                            id="RETAIL"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="RETAIL">RETAIL</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="SERVICE"
                            class="custom-control-input" 
                            id="SERVICE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SERVICE">SERVICE</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FOR HIRE"
                            class="custom-control-input" 
                            id="FOR HIRE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FOR HIRE">FOR HIRE</label>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-2">
                                    <h6>CHECK COVERAGES</h6>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="LIAB"
                                    class="custom-control-input" 
                                    id="LIAB"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LIAB">LIAB</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="NO-FAULT"
                                    class="custom-control-input" 
                                    id="NO-FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="NO-FAULT">NO-FAULT</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ADD'L NO FAULT"
                                    class="custom-control-input" 
                                    id="ADD'L NO FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="ADD'L NO FAULT">ADD'L NO FAULT</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MED PAY"
                                    class="custom-control-input" 
                                    id="MED PAY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="MED PAY">MED PAY</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="UNINS"
                                    class="custom-control-input" 
                                    id="UNINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="UNINS">UNINS MOTOR</label>

                                    </div>
                                </div>

                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="MOTOR UNDRINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="MOTOR UNDRINS">MOTOR UNDRINS</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TOWING & LABOR"
                                    class="custom-control-input" 
                                    id="TOWING & LABOR"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="TOWING & LABOR">TOWING & LABOR</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="F"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="F"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="F">F</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FT"
                                    class="custom-control-input" 
                                    id="FT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="FT">FT</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FTW"
                                    class="custom-control-input" 
                                    id="FTW"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="F">FTW</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="LSP"
                                    class="custom-control-input" 
                                    id="LSP"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="LSP">LSP</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COMPOTC"
                                    class="custom-control-input" 
                                    id="COMPOTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMPOTC">COMPOTC</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COLL"
                                    class="custom-control-input" 
                                    id="COLL"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COLL">COLL</label>
                                </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="REIMB"
                                    class="custom-control-input" 
                                    id="REIMB"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="REIMB">REIMB</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="FG"
                                    class="custom-control-input" 
                                    id="FG"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="FG">FG</label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <h6>DEDUCTIBLES</h6>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ACV"
                                    class="custom-control-input" 
                                    id="ACV"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ACV">ACV</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="AA"
                                    class="custom-control-input" 
                                    id="AA"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="AA">AA</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ST AMT"
                                    class="custom-control-input" 
                                    id="ST AMT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ST AMT">ST AMT</label>
                                    </div>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                </div>
                                <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="COMP/OTC"
                                    class="custom-control-input" 
                                    id="COMP/OTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMP/OTC">COMP/OTC</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>
                                    </div>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <h6 style={{fontSize: "14px"}}>DRIVE TO WORK / SCHOOL</h6>
                        </div>
                        <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="< 15 MILES"
                                        class="custom-control-input" 
                                        id="< 15 MILES"
                                        onChange={handleBlur}
                                        />
                                        <label style={{fontSize: "14px"}} class="custom-control-label" for="< 15 MILES">15 MILES</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="15 MILES +"
                                        class="custom-control-input" 
                                        id="15 MILES +"
                                        onChange={handleBlur}
                                        />
                                        <label style={{fontSize: "14px"}} class="custom-control-label" for="15 MILES +">15 MILES +</label>
                                    </div>
                                    
                        </div>
                        <div className="col-4">
                            <label htmlFor="">NET VEH DR/CR:</label>
                            <input type="text" className="form-control" onChange={handleBlur} name="NET VEH DR/CR"/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="">TOTAL PREM: $</label>
                            <input type="text" className="form-control" onChange={handleBlur} name="TOTAL PREM: $"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col">
                        <h5>VEHICLE DESCRIPTION</h5>
                    </div>
                    <div className="col">
                        <div class="custom-control custom-checkbox">
                        <input onChange={handleBlur} type="checkbox" name="ACORD" class="custom-control-input" value="ACORD AS LESSOR" id="EMPLOYEE"/>
                        <label class="custom-control-label" for="ACORD">ACORD 129 attached for additional vehicles</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">AGENCY CUSTOMER ID:</label>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control"  onChange={handleBlur} name="AGENCY CUSTOMER ID"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="">VEH #</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="VEH"/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">YEAR</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="YEAR"/>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">MAKE:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="MAKE"/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MODEL:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="MODEL"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="" style={{fontSize : "12px"}}>BODY TYPE:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="BODY TYPE"/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">V.I.N.:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="V.I.N.:"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-4 text-center">
                                <label htmlFor="">VEHICLE TYPE</label>
                                <div className="row">
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="PP"
                                    class="custom-control-input" 
                                    id="PP"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="PP">PP</label>
                                    </div>
                                    </div>
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="SPEC"
                                    class="custom-control-input" 
                                    id="SPEC"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="SPEC">SPEC</label>
                                    </div>
                                    </div>
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="COML"
                                    class="custom-control-input" 
                                    id="COML"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="COML">COML</label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <label htmlFor="">GARAGING ADDRESS</label>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">STREET (Required in KY)</label>
                        <input type="text" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">CITY</label>
                        <input type="text" name="CITY" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">COUNTY</label>
                        <input type="text" name="COUNTY" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-1">
                        <label htmlFor="">STATE</label>
                        <input type="text" name="STATE" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-1">
                        <label htmlFor="">ZIP</label>
                        <input type="text" name="ZIP" className="form-control" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                            <div className="row">
                            <div className="col-1">
                            <span style={{fontSize : "14px"}}>LICSTATE</span>
                            <input type="text" name="LIC STATE" className="form-control mt-1" onChange={handleBlur}/>
                        </div>
                        <div className="col-1">
                            <label htmlFor=""> TERR</label>
                            <input type="text" name="TERR" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor=""> GVW / GCW</label>
                            <input type="text" name="GVW / GCW" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">CLASS</label>
                            <input type="text" name="CLASS" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">SIC</label>
                            <input type="text" name="SIC" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">FACTOR</label>
                            <input type="text" name="FACTOR" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">SEAT CP</label>
                            <input type="text" name="SEAT CP" className="form-control" onChange={handleBlur}/>
                        </div>
                        </div>
                    </div>
                    <div className="col-5">
                       <div className="row">
                           <div className="col-2">
                           <    label htmlFor="">RADIUS</label>
                                <input type="text" name="RADIUS" className="form-control" onChange={handleBlur}/>
                           </div>
                           <div className="col-6">
                                < label htmlFor="">FARTHEST TERMINAL</label>
                                <input type="text" name="RADIUS" className="form-control" onChange={handleBlur}/>
                           </div>
                           <div className="col-4">
                                < label htmlFor="">COST NEW</label>
                                <input type="text" name="COST NEW" className="form-control" onChange={handleBlur}/>
                           </div>
                       </div>
                    </div>    
                </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-4">
                                <h6>USE</h6>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="PLEASURE"
                            class="custom-control-input" 
                            id="PLEASURE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="PLEASURE">PLEASURE</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FARM"
                            class="custom-control-input" 
                            id="FARM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FARM">FARM</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="COMM"
                            class="custom-control-input" 
                            id="COMM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="COMM">COMM</label>
                            </div>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="RETAIL"
                            class="custom-control-input" 
                            id="RETAIL"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="RETAIL">RETAIL</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="SERVICE"
                            class="custom-control-input" 
                            id="SERVICE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SERVICE">SERVICE</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FOR HIRE"
                            class="custom-control-input" 
                            id="FOR HIRE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FOR HIRE">FOR HIRE</label>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-2">
                                    <h6>CHECK COVERAGES</h6>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="LIAB"
                                    class="custom-control-input" 
                                    id="LIAB"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LIAB">LIAB</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="NO-FAULT"
                                    class="custom-control-input" 
                                    id="NO-FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="NO-FAULT">NO-FAULT</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ADD'L NO FAULT"
                                    class="custom-control-input" 
                                    id="ADD'L NO FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="ADD'L NO FAULT">ADD'L NO FAULT</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MED PAY"
                                    class="custom-control-input" 
                                    id="MED PAY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="MED PAY">MED PAY</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="UNINS"
                                    class="custom-control-input" 
                                    id="UNINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="UNINS">UNINS MOTOR</label>

                                    </div>
                                </div>

                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="MOTOR UNDRINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="MOTOR UNDRINS">MOTOR UNDRINS</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TOWING & LABOR"
                                    class="custom-control-input" 
                                    id="TOWING & LABOR"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="TOWING & LABOR">TOWING & LABOR</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="F"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="F"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="F">F</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FT"
                                    class="custom-control-input" 
                                    id="FT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="FT">FT</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FTW"
                                    class="custom-control-input" 
                                    id="FTW"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="F">FTW</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="LSP"
                                    class="custom-control-input" 
                                    id="LSP"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="LSP">LSP</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COMPOTC"
                                    class="custom-control-input" 
                                    id="COMPOTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMPOTC">COMPOTC</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COLL"
                                    class="custom-control-input" 
                                    id="COLL"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COLL">COLL</label>
                                </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="REIMB"
                                    class="custom-control-input" 
                                    id="REIMB"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="REIMB">REIMB</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="FG"
                                    class="custom-control-input" 
                                    id="FG"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="FG">FG</label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <h6>DEDUCTIBLES</h6>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ACV"
                                    class="custom-control-input" 
                                    id="ACV"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ACV">ACV</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="AA"
                                    class="custom-control-input" 
                                    id="AA"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="AA">AA</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ST AMT"
                                    class="custom-control-input" 
                                    id="ST AMT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ST AMT">ST AMT</label>
                                    </div>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                </div>
                                <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="COMP/OTC"
                                    class="custom-control-input" 
                                    id="COMP/OTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMP/OTC">COMP/OTC</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>
                                    </div>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <h6 style={{fontSize: "14px"}}>DRIVE TO WORK / SCHOOL</h6>
                        </div>
                        <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="< 15 MILES"
                                        class="custom-control-input" 
                                        id="< 15 MILES"
                                        onChange={handleBlur}
                                        />
                                        <label style={{fontSize: "14px"}} class="custom-control-label" for="< 15 MILES">15 MILES</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="15 MILES +"
                                        class="custom-control-input" 
                                        id="15 MILES +"
                                        onChange={handleBlur}
                                        />
                                        <label style={{fontSize: "14px"}} class="custom-control-label" for="15 MILES +">15 MILES +</label>
                                    </div>
                                    
                        </div>
                        <div className="col-4">
                            <label htmlFor="">NET VEH DR/CR:</label>
                            <input type="text" className="form-control" onChange={handleBlur} name="NET VEH DR/CR"/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="">TOTAL PREM: $</label>
                            <input type="text" className="form-control" onChange={handleBlur} name="TOTAL PREM: $"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col">
                        <h5>VEHICLE DESCRIPTION</h5>
                    </div>
                    <div className="col">
                        <div class="custom-control custom-checkbox">
                        <input onChange={handleBlur} type="checkbox" name="ACORD" class="custom-control-input" value="ACORD AS LESSOR" id="EMPLOYEE"/>
                        <label class="custom-control-label" for="ACORD">ACORD 129 attached for additional vehicles</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">AGENCY CUSTOMER ID:</label>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control"  onChange={handleBlur} name="AGENCY CUSTOMER ID"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="">VEH #</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="VEH"/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">YEAR</label>
                                <input type="text" className="form-control"  onChange={handleBlur} name="YEAR"/>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">MAKE:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="MAKE"/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MODEL:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="MODEL"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="" style={{fontSize : "12px"}}>BODY TYPE:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="BODY TYPE"/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">V.I.N.:</label>
                                    </div>
                                    <div className="col-9">
                                    <input type="text" className="form-control"  onChange={handleBlur} name="V.I.N.:"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-4 text-center">
                                <label htmlFor="">VEHICLE TYPE</label>
                                <div className="row">
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="PP"
                                    class="custom-control-input" 
                                    id="PP"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="PP">PP</label>
                                    </div>
                                    </div>
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="SPEC"
                                    class="custom-control-input" 
                                    id="SPEC"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="SPEC">SPEC</label>
                                    </div>
                                    </div>
                                    <div className="col-4">
                                    <div class="custom-control custom-checkbox my-2">
                                    <input
                                    type="checkbox"
                                    name="COML"
                                    class="custom-control-input" 
                                    id="COML"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="COML">COML</label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <label htmlFor="">GARAGING ADDRESS</label>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">STREET (Required in KY)</label>
                        <input type="text" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">CITY</label>
                        <input type="text" name="CITY" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="">COUNTY</label>
                        <input type="text" name="COUNTY" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-1">
                        <label htmlFor="">STATE</label>
                        <input type="text" name="STATE" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-1">
                        <label htmlFor="">ZIP</label>
                        <input type="text" name="ZIP" className="form-control" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                            <div className="row">
                            <div className="col-1">
                            <span style={{fontSize : "14px"}}>LICSTATE</span>
                            <input type="text" name="LIC STATE" className="form-control mt-1" onChange={handleBlur}/>
                        </div>
                        <div className="col-1">
                            <label htmlFor=""> TERR</label>
                            <input type="text" name="TERR" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor=""> GVW / GCW</label>
                            <input type="text" name="GVW / GCW" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">CLASS</label>
                            <input type="text" name="CLASS" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">SIC</label>
                            <input type="text" name="SIC" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">FACTOR</label>
                            <input type="text" name="FACTOR" className="form-control" onChange={handleBlur}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="">SEAT CP</label>
                            <input type="text" name="SEAT CP" className="form-control" onChange={handleBlur}/>
                        </div>
                        </div>
                    </div>
                    <div className="col-5">
                       <div className="row">
                           <div className="col-2">
                           <    label htmlFor="">RADIUS</label>
                                <input type="text" name="RADIUS" className="form-control" onChange={handleBlur}/>
                           </div>
                           <div className="col-6">
                                < label htmlFor="">FARTHEST TERMINAL</label>
                                <input type="text" name="RADIUS" className="form-control" onChange={handleBlur}/>
                           </div>
                           <div className="col-4">
                                < label htmlFor="">COST NEW</label>
                                <input type="text" name="COST NEW" className="form-control" onChange={handleBlur}/>
                           </div>
                       </div>
                    </div>    
                </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-4">
                                <h6>USE</h6>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="PLEASURE"
                            class="custom-control-input" 
                            id="PLEASURE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="PLEASURE">PLEASURE</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FARM"
                            class="custom-control-input" 
                            id="FARM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FARM">FARM</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="COMM"
                            class="custom-control-input" 
                            id="COMM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="COMM">COMM</label>
                            </div>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="RETAIL"
                            class="custom-control-input" 
                            id="RETAIL"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="RETAIL">RETAIL</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="SERVICE"
                            class="custom-control-input" 
                            id="SERVICE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SERVICE">SERVICE</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FOR HIRE"
                            class="custom-control-input" 
                            id="FOR HIRE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FOR HIRE">FOR HIRE</label>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-2">
                                    <h6>CHECK COVERAGES</h6>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="LIAB"
                                    class="custom-control-input" 
                                    id="LIAB"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LIAB">LIAB</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="NO-FAULT"
                                    class="custom-control-input" 
                                    id="NO-FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="NO-FAULT">NO-FAULT</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ADD'L NO FAULT"
                                    class="custom-control-input" 
                                    id="ADD'L NO FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="ADD'L NO FAULT">ADD'L NO FAULT</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MED PAY"
                                    class="custom-control-input" 
                                    id="MED PAY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="MED PAY">MED PAY</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="UNINS"
                                    class="custom-control-input" 
                                    id="UNINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="UNINS">UNINS MOTOR</label>

                                    </div>
                                </div>

                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="MOTOR UNDRINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="MOTOR UNDRINS">MOTOR UNDRINS</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TOWING & LABOR"
                                    class="custom-control-input" 
                                    id="TOWING & LABOR"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="TOWING & LABOR">TOWING & LABOR</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="F"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="F"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="F">F</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FT"
                                    class="custom-control-input" 
                                    id="FT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="FT">FT</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FTW"
                                    class="custom-control-input" 
                                    id="FTW"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="F">FTW</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="LSP"
                                    class="custom-control-input" 
                                    id="LSP"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="LSP">LSP</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COMPOTC"
                                    class="custom-control-input" 
                                    id="COMPOTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMPOTC">COMPOTC</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COLL"
                                    class="custom-control-input" 
                                    id="COLL"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COLL">COLL</label>
                                </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="REIMB"
                                    class="custom-control-input" 
                                    id="REIMB"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="REIMB">REIMB</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="FG"
                                    class="custom-control-input" 
                                    id="FG"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="FG">FG</label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <h6>DEDUCTIBLES</h6>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ACV"
                                    class="custom-control-input" 
                                    id="ACV"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ACV">ACV</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="AA"
                                    class="custom-control-input" 
                                    id="AA"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="AA">AA</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ST AMT"
                                    class="custom-control-input" 
                                    id="ST AMT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ST AMT">ST AMT</label>
                                    </div>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                </div>
                                <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="COMP/OTC"
                                    class="custom-control-input" 
                                    id="COMP/OTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMP/OTC">COMP/OTC</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>
                                    </div>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                    <input type="text" className="form-control" onChange={handleBlur} name="value"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <h6 style={{fontSize: "14px"}}>DRIVE TO WORK / SCHOOL</h6>
                        </div>
                        <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="< 15 MILES"
                                        class="custom-control-input" 
                                        id="< 15 MILES"
                                        onChange={handleBlur}
                                        />
                                        <label style={{fontSize: "14px"}} class="custom-control-label" for="< 15 MILES">15 MILES</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="15 MILES +"
                                        class="custom-control-input" 
                                        id="15 MILES +"
                                        onChange={handleBlur}
                                        />
                                        <label style={{fontSize: "14px"}} class="custom-control-label" for="15 MILES +">15 MILES +</label>
                                    </div>
                                    
                        </div>
                        <div className="col-4">
                            <label htmlFor="">NET VEH DR/CR:</label>
                            <input type="text" className="form-control" onChange={handleBlur} name="NET VEH DR/CR"/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="">TOTAL PREM: $</label>
                            <input type="text" className="form-control" onChange={handleBlur} name="TOTAL PREM: $"/>
                        </div>
                    </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(6) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(8) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default VehicleDescription;