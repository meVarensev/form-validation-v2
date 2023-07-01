import {useState} from 'react';
import {Stepper, Button, Group} from '@mantine/core';
import {StepOne} from "../steps/step-one/step-one";
import {StepSecond} from "../steps/step-second/step-second";

const MyStepper = () => {
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <div style={{background: "white" , padding: "25px"}}>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step label="First step" description="Create an account">
                    <StepOne/>
                </Stepper.Step>
                <Stepper.Step label="Second step" description="Verify email">
                    <StepSecond/>
                </Stepper.Step>
                <Stepper.Step label="Final step" description="Get full access">
                    Step 3 content: Get full access
                </Stepper.Step>
                <Stepper.Completed>
                    Completed, click back button to get to previous step
                </Stepper.Completed>
            </Stepper>

            <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
        </div>
    );
}

export {MyStepper}
