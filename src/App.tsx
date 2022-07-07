import React from 'react';
import Map from './components/Map';
import styled from 'styled-components';
import { useStore } from './stores/RootStore';
import { observer } from 'mobx-react-lite';

const Info = styled.p``;

const InfoContainer = styled.div`
  position: relative;
  z-index: 100;
  top: 15px;
  left: 60px;
  background-color: black;
  color: white;
  padding: 10px;
  height: auto;
  width: 20%;
`

//Root App Component Defintion
const App = () => {
  const { mapStore } = useStore();

  return (
    <>
      <InfoContainer>
        {mapStore.intersectingAreas.length === 0 && <Info>{'No intersecting flights'}</Info>}
        {mapStore.intersectingAreas.map((value, index) => {
          return <Info key={"Info-"+index}>{`Intersecting Area for sketch ${index}: has intersecting area ${value} sq miles`}</Info>;
        })}
      </InfoContainer>
      <Map />
    </>
  );
};

// Component must be mobx observed to rerender
export default observer(App);
