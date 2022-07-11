import React from 'react';
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/RootStore";
import { Alert, Spin } from 'antd';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding-top: 12px;
`

const SpinContainer = styled.div`
    z-index: 1000;
    background: white;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SpinLabel = styled.h3`
    padding: 12px;
`

function InfoContainerPanel() {
    const { mapStore } = useStore();
    const isFlightApproved = mapStore.getIntersectingAreas.length === 0;

    return (
        <InfoContainer>
            {mapStore.isFetching ? 
                <SpinContainer>
                    <Spin/>
                    <SpinLabel>{'Loading No Fly Zone...'}</SpinLabel>
                </SpinContainer>
            :
            <FlightInfoPanel
                isFlightApproved={isFlightApproved}
                intersectingAreas={mapStore.getIntersectingAreas}
            />
            }
        </InfoContainer>
    );
}

export default observer(InfoContainerPanel)

type FlightInfoPanelProps = {
    isFlightApproved: boolean, 
    intersectingAreas: number[]
};
function FlightInfoPanel(props: FlightInfoPanelProps) {
    return (
    <>
        {props.isFlightApproved ? 
            <FlightApprovedAlert/>
            : 
            <>
                {props.intersectingAreas.map((val, index) => {
                return <FlightDeniedAlert intersectArea={val} key={'flight-denied-'+index}/>
                })}
            </>
        }
    </>);
}

type FlightDeniedAlertProps = {
    intersectArea: number;
}
function FlightDeniedAlert(props: FlightDeniedAlertProps) {
    return (
        <Alert
        message="Danger!"
        description={`flight path intersects no fly zone with area ${props.intersectArea} square miles`}
        type="error"
        style={{marginTop: '12px'}}
        showIcon
    />);
}
  
function FlightApprovedAlert() {
    return (
      <Alert 
      message="Flight Path Valid!" 
      type="success" 
      showIcon
      />
    );
}