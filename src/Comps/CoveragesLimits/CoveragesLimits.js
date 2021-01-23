import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const CoveragesLimits = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                   <div className="col">
                    <h5>COVERAGES / LIMITS</h5>
                   </div>
                </div>
                <div className="row ">
                   <div className="col border p-2">
                        <h5>USE ACORD 137 FOR YOUR STATE TO PROVIDE COVERAGES / LIMITS INFORMATION</h5>
                   </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4">
                        <h5>DRIVER INFORMATION</h5>
                    </div>
                    <div className="col-md-8">
                        <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="ACORD"
                            class="custom-control-input" 
                            id="ACORD"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="ACORD"> ACORD 163 attached for additional drivers</label>
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <h6>LIST ALL DRIVERS, INCLUDING FAMILY MEMBERS THAT DRIVE COMPANY VEHICLES, AND EMPLOYEES WHO DRIVE OWN VEHICLES ON COMPANY BUSINESS. </h6>
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="col-md-5">
                        <div className="row text-center">
                            <div className="col-1 p-0">
                                <label htmlFor="">DRIVER #</label>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">NAME <br/> CITY, STATE AND ZIP CODE</label>
                            </div>
                            <div className="col-1 p-0">
                                <label htmlFor="">SEX</label>
                            </div>
                            <div className="col-2 p-0">
                                <label htmlFor="">MAR STAT</label>
                            </div>
                            
                            <div className="col-3 p-0">
                                <label htmlFor="">DATE OF BIRTH</label>
                            </div>
                            <div className="col-1 p-0">
                                <label htmlFor="">YRS EXP</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="DRIVER"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-4 p-0">
                            <input
                                type="text"
                                name="NAME"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                            <input
                                type="text"
                                name="SEX"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2 p-0">
                            <input
                                type="text"
                                name="MAR"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            
                            <div className="col-3 p-0">
                            <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YRS EXP"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="DRIVER"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-4 p-0">
                            <input
                                type="text"
                                name="NAME"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                            <input
                                type="text"
                                name="SEX"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2 p-0">
                            <input
                                type="text"
                                name="MAR"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            
                            <div className="col-3 p-0">
                            <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YRS EXP"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="DRIVER"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-4 p-0">
                            <input
                                type="text"
                                name="NAME"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                            <input
                                type="text"
                                name="SEX"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2 p-0">
                            <input
                                type="text"
                                name="MAR"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            
                            <div className="col-3 p-0">
                            <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YRS EXP"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="DRIVER"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-4 p-0">
                            <input
                                type="text"
                                name="NAME"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                            <input
                                type="text"
                                name="SEX"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2 p-0">
                            <input
                                type="text"
                                name="MAR"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            
                            <div className="col-3 p-0">
                            <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YRS EXP"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="DRIVER"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-4 p-0">
                            <input
                                type="text"
                                name="NAME"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                            <input
                                type="text"
                                name="SEX"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2 p-0">
                            <input
                                type="text"
                                name="MAR"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            
                            <div className="col-3 p-0">
                            <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YRS EXP"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="DRIVER"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-4 p-0">
                            <input
                                type="text"
                                name="NAME"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                            <input
                                type="text"
                                name="SEX"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2 p-0">
                            <input
                                type="text"
                                name="MAR"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            
                            <div className="col-3 p-0">
                            <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YRS EXP"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="DRIVER"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-4 p-0">
                            <input
                                type="text"
                                name="NAME"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                            <input
                                type="text"
                                name="SEX"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2 p-0">
                            <input
                                type="text"
                                name="MAR"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            
                            <div className="col-3 p-0">
                            <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YRS EXP"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="DRIVER"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-4 p-0">
                            <input
                                type="text"
                                name="NAME"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                            <input
                                type="text"
                                name="SEX"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2 p-0">
                            <input
                                type="text"
                                name="MAR"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            
                            <div className="col-3 p-0">
                            <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YRS EXP"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="DRIVER"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-4 p-0">
                            <input
                                type="text"
                                name="NAME"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                            <input
                                type="text"
                                name="SEX"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2 p-0">
                            <input
                                type="text"
                                name="MAR"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            
                            <div className="col-3 p-0">
                            <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YRS EXP"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="DRIVER"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-4 p-0">
                            <input
                                type="text"
                                name="NAME"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                            <input
                                type="text"
                                name="SEX"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2 p-0">
                            <input
                                type="text"
                                name="MAR"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            
                            <div className="col-3 p-0">
                            <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YRS EXP"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row text-center ml-1">
                                <div className="col-1 p-0">
                                    <label htmlFor="">YEAR LIC</label>
                                </div>
                                <div className="col-3">
                                    <label style={{fontSize: "13px"}} htmlFor="">DRIVERS LICENSE NUMBER/ <br/> SOCIAL SECURITY NUMBER</label>
                                </div>
                                <div className="col-1 p-0">
                                    <label htmlFor="">STATE LCC</label>
                                </div>
                                <div className="col-2 p-0">
                                    <label htmlFor="">DATE HIRE</label>
                                </div>
                                
                                <div className="col-2 p-0">
                                    <label htmlFor="">BROADEN NO-FAULT</label>
                                </div>
                                <div className="col-1 p-0">
                                    <label htmlFor="">DOC</label>
                                </div>
                                <div className="col-1 p-0">
                                    <label htmlFor="">USE VEH</label>
                                </div>
                                <div className="col-1 p-0">
                                    <label htmlFor="">% USE</label>
                                </div>
                            </div>
                            <div className="row ml-1 mt-3">
                                <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YEAR LIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-3">
                                    <input
                                type="text"
                                name="DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                type="text"
                                name="STATE "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-2 p-0">
                                    <input
                                        type="date"
                                        name="DATE "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                
                                <div className="col-2 p-0">
                                    <input
                                        type="text"
                                        name="BROADEN "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="DOC "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE VEH "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                            </div>
                            <div className="row ml-1">
                                <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YEAR LIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-3">
                                    <input
                                type="text"
                                name="DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                type="text"
                                name="STATE "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-2 p-0">
                                    <input
                                        type="date"
                                        name="DATE "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                
                                <div className="col-2 p-0">
                                    <input
                                        type="text"
                                        name="BROADEN "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="DOC "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE VEH "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                            </div>
                            <div className="row ml-1">
                                <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YEAR LIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-3">
                                    <input
                                type="text"
                                name="DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                type="text"
                                name="STATE "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-2 p-0">
                                    <input
                                        type="date"
                                        name="DATE "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                
                                <div className="col-2 p-0">
                                    <input
                                        type="text"
                                        name="BROADEN "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="DOC "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE VEH "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                            </div>
                            <div className="row ml-1">
                                <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YEAR LIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-3">
                                    <input
                                type="text"
                                name="DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                type="text"
                                name="STATE "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-2 p-0">
                                    <input
                                        type="date"
                                        name="DATE "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                
                                <div className="col-2 p-0">
                                    <input
                                        type="text"
                                        name="BROADEN "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="DOC "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE VEH "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                            </div>
                            <div className="row ml-1">
                                <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YEAR LIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-3">
                                    <input
                                type="text"
                                name="DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                type="text"
                                name="STATE "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-2 p-0">
                                    <input
                                        type="date"
                                        name="DATE "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                
                                <div className="col-2 p-0">
                                    <input
                                        type="text"
                                        name="BROADEN "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="DOC "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE VEH "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                            </div>
                            <div className="row ml-1">
                                <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YEAR LIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-3">
                                    <input
                                type="text"
                                name="DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                type="text"
                                name="STATE "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-2 p-0">
                                    <input
                                        type="date"
                                        name="DATE "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                
                                <div className="col-2 p-0">
                                    <input
                                        type="text"
                                        name="BROADEN "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="DOC "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE VEH "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                            </div>
                            <div className="row ml-1">
                                <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YEAR LIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-3">
                                    <input
                                type="text"
                                name="DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                type="text"
                                name="STATE "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-2 p-0">
                                    <input
                                        type="date"
                                        name="DATE "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                
                                <div className="col-2 p-0">
                                    <input
                                        type="text"
                                        name="BROADEN "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="DOC "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE VEH "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                            </div>
                            <div className="row ml-1">
                                <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YEAR LIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-3">
                                    <input
                                type="text"
                                name="DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                type="text"
                                name="STATE "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-2 p-0">
                                    <input
                                        type="date"
                                        name="DATE "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                
                                <div className="col-2 p-0">
                                    <input
                                        type="text"
                                        name="BROADEN "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="DOC "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE VEH "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                            </div>
                            <div className="row ml-1">
                                <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YEAR LIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-3">
                                    <input
                                type="text"
                                name="DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                type="text"
                                name="STATE "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-2 p-0">
                                    <input
                                        type="date"
                                        name="DATE "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                
                                <div className="col-2 p-0">
                                    <input
                                        type="text"
                                        name="BROADEN "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="DOC "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE VEH "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                            </div>
                            <div className="row ml-1">
                                <div className="col-1 p-0">
                                <input
                                type="text"
                                name="YEAR LIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-3">
                                    <input
                                type="text"
                                name="DRIVERS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                type="text"
                                name="STATE "
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                                </div>
                                <div className="col-2 p-0">
                                    <input
                                        type="date"
                                        name="DATE "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                
                                <div className="col-2 p-0">
                                    <input
                                        type="text"
                                        name="BROADEN "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="DOC "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE VEH "
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                                <div className="col-1 p-0">
                                    <input
                                        type="text"
                                        name="USE"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <h6>MARITAL STATUS / CIVIL UNION (if applicable)</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(1) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(3) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default CoveragesLimits;