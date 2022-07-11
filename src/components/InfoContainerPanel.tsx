import React from 'react';
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/RootStore";
import { Alert, Progress } from 'antd';
import styled from 'styled-components';
//import FlightInfoPanel from './FlightInfoPanel';

const InfoContainer = styled.div`
  padding-top: 12px;
`

function InfoContainerPanel() {
    const { mapStore } = useStore();
    const isFlightApproved = mapStore.getIntersectingAreas.length === 0;

    return (
        <InfoContainer>
            <FlightInfoPanel
                isFlightApproved={isFlightApproved}
                intersectingAreas={mapStore.getIntersectingAreas}
            />
            {mapStore.isFetching && 
            <Progress percent={100} showInfo={false}/>}
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