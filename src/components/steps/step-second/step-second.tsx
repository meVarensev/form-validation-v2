import React from 'react';
import {StepContainer} from "../container/step-container";
import {TextInput, Text, ActionIcon} from "@mantine/core";
import {IconTrashFilled} from '@tabler/icons-react';

interface IStepSecondProps {

}

const MyTextInput = () => {
    return (
        <div >
            <TextInput
                placeholder="placeholder"
                inputWrapperOrder={['label', 'error', 'input', 'description']}
            />
            <ActionIcon>
                <IconTrashFilled size="1.5rem" />
            </ActionIcon>
        </div>
    );
};
const StepSecond: React.FC<IStepSecondProps> = () => {
    return (
        <StepContainer>
            <Text fw={500} color={"black"}>Advantages</Text>
            <MyTextInput/>

        </StepContainer>
    );
};

export {StepSecond};
