import React from 'react';
import {Select, TextInput} from "@mantine/core";
import {StepContainer} from "../container/step-container";

interface IStepOneProps {

}

const StepOne: React.FC<IStepOneProps> = () => {
    return (
        <StepContainer>
            <TextInput
                label="Nickname"
                placeholder="placeholder"
                description="Tip"
                inputWrapperOrder={['label', 'error', 'input', 'description']}
            />
            <TextInput
                label="Name"
                placeholder="placeholder"
                description="Tip"
                inputWrapperOrder={['label', 'error', 'input', 'description']}
            />
            <TextInput
                label="Surname"
                placeholder="placeholder"
                description="Tip"
                inputWrapperOrder={['label', 'error', 'input', 'description']}
            />
            <Select
                label="Sex"
                placeholder="Не выбрано"
                data={[
                    { value: 'man', label: 'man' },
                    { value: 'woman', label: 'woman' },
                ]}
            />
        </StepContainer>
    );
};

export {StepOne};
