import React from 'react';
import Media1 from '../components/Media1';
import MapBe from '../components/MapBe'
import { Col, Row } from 'react-bootstrap';


function Home() {
    return (
        <Row>
            <Col xs={12} md={8}><MapBe /></Col>

            <Col sm={4} style={{ overflowY: ' scroll', backgroundColor: 'lightblue', height: '600px' }}>
                <Media1 />

            </Col>
        </Row>
    );
}

export default Home;