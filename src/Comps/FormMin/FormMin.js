import React, { useContext } from 'react';
import FirstStep from '../FirstStep/FirstStep';
import {multiStepContext} from '../StepContext/StepContext'
import {StepLabel,  Stepper, Step} from '@material-ui/core'
import CoveragesLimits from '../CoveragesLimits/CoveragesLimits';
import GeneralInformaton from '../GeneralInformaton/GeneralInformaton';
import GeneralInfoContinued from '../GeneralInfoContinued/GeneralInfoContinued';
import AddItonalInteintrest from '../AddItonalInteintrest/AddItonalInteintrest';
import Remarks from '../Remarks/Remarks';
import VehicleDescription from '../VehicleDescription/VehicleDescription';
import AdditionalRemarks from '../AdditionalRemarks/AdditionalRemarks';
import Signaturs from '../Signature/Signature'

const FormMin = () => {
    const {currentStep,setStep, finalData, setUserData, userData} = useContext(multiStepContext);
    const handleBlur = e =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e =>{

        console.log(userData);
        setUserData('')
        setStep(1)
    }
    function showStep(step){
        switch(step){
            case 1:
                return <FirstStep handleBlur={handleBlur}/>
            case 2:
                    return <CoveragesLimits handleBlur={handleBlur}/>
            case 3:
                return <GeneralInformaton handleBlur={handleBlur}/>
            case 4:
                return <GeneralInfoContinued handleBlur={handleBlur}/>
            case 5:
                return <AddItonalInteintrest  handleBlur={handleBlur}/>
            case 6:
                return <Remarks handleBlur={handleBlur}/>
            case 7:
                return <VehicleDescription handleBlur={handleBlur}/>
            case 8:
                return <AdditionalRemarks handleBlur={handleBlur} handleBlur={handleSubmit}/>
            case 9:
                return <Signaturs handleBlur={handleBlur}/>
        }
    }
    return (
        <div>
            <Stepper style={{width: '100%'}} activeStep={currentStep - 1} orientation="horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
            {showStep(currentStep)}
        </div>
    );
};

export default FormMin;