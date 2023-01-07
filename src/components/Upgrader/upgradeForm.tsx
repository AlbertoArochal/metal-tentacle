import React, { useState } from 'react';
import { components } from './upgradeList';
import { RobotInfo } from '../RobotForm/RobotInfo';

export type ComponentType = {
    name: string;
    slots: number;
    velocity: number;
    endurance: number;
    description: string;
};

export const UpgradeForm: React.FC<{
    onSubmit: (components: ComponentType[]) => void;
}> = ({ onSubmit }) => {
    const [selectedComponents, setSelectedComponents] = useState<
        ComponentType[]
    >([]);
    const handleClick = (component: ComponentType) => {
        if (
            component.slots +
                selectedComponents.reduce((acc, c) => acc + c.slots, 0) >
            4
        ) {
            alert('Your robot has only 4 slots, choose wisely');
            return;
        }

        setSelectedComponents([...selectedComponents, component]);
    };

    return (
        <>
            <div className="shopTitleContainer">
                <h2 className="shopTitle">UPGRADE SHOP</h2>
                <h4>YOUR ROBOT ONLY HAVE 4 SLOTS, CHOOSE WISELY</h4>
            </div>
            <div className="robotInfoH">
                <RobotInfo />
                <button
                    onClick={() => onSubmit(selectedComponents)}
                    className="HireButton"
                >
                    Submit Upgrades
                </button>
            </div>

            <div className="componentMenu">
                {components.map((component) => (
                    <div key={component.name} className="componentDetails">
                        <h4>{component.name}</h4>
                        <p>
                            {' '}
                            <span> Slots:</span> {component.slots}
                        </p>
                        <p>
                            {' '}
                            <span> Velocity: </span> {component.velocity}
                        </p>
                        <p>
                            {' '}
                            <span> Endurance: </span> {component.endurance}
                        </p>
                        <p>
                            {' '}
                            <span> Description: </span> {component.description}
                        </p>
                        <button onClick={() => handleClick(component)}>
                            Select
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};