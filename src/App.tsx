import React from 'react';
import Map from './components/Map';
import { Row, Col } from 'antd';
import InfoContainerPanel from './components/InfoContainerPanel';

const App = () => {
  return (
    <>
      <Row className='row'>
        <Col span={3}></Col>
        <Col span={13}>
          <InfoContainerPanel/>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Map />
    </>
  );
};

export default App;
