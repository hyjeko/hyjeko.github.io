import React from 'react';
import Map from './components/Map';
import { useStore } from './stores/RootStore';
import { observer } from 'mobx-react-lite';
import { Alert, Row, Col } from 'antd';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding-top: 12px;
`

const App = () => {
  const { mapStore } = useStore();

  const isFlightApproved = mapStore.getIntersectingAreas.length === 0;

  return (
    <>
      <Row className='row'>
        <Col span={3}></Col>
        <Col span={13}>
          <InfoContainer>
            <FlightInfoPanel isFlightApproved={isFlightApproved} intersectingAreas={mapStore.getIntersectingAreas}/>
          </InfoContainer>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Map />
    </>
  );
};

type FlightInfoPanelProps = {
  isFlightApproved: boolean, 
  intersectingAreas: number[]
};
function FlightInfoPanel(props: FlightInfoPanelProps) {
  return <>
  {props.isFlightApproved ? 
      <FlightApprovedAlert/>
    : 
      <>
        {props.intersectingAreas.map((val, index) => {
          return <FlightDeniedAlert intersectArea={val} key={'flight-denied-'+index}/>
        })}
      </>
  }
  </>
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

// Component must be mobx observed to rerender
export default observer(App);
