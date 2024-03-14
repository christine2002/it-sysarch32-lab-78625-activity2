import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function StudentList() {
  // Define the list of students directly inside the component
  const students = [
    { name: "Ann", email: "Ann.Curtes@example.com", photoUrl: "https://images.summitmedia-digital.com/preview/images/2021/10/05/oct2021-anne-curtis-main-option2.jpg" },
    { name: "Jane", email: "jane.smith@example.com", photoUrl: "https://www.wallpapertip.com/wmimgs/47-476383_hd-wallpaper-lisa-blackpink.jpg" },
    { name: "Johnson", email: "johnsonsmith@example.com", photoUrl: "https://lh3.googleusercontent.com/91SlRO-QDssaDCxmxA0NXfdAMLFWfqX9gA7KM4N_RpYZ_n0Om12EgHtdl81lWiIAdwzMBGh5V2Q_cquV_6LDAlaun7rfA_Zc6w=w960-rj-nu-e365" },
    { name: "Bobby", email: "bobby.brown@example.com", photoUrl: "https://th.bing.com/th/id/OIP.csC7vrx_2brrxcqHj66ZtQHaLH?rs=1&pid=ImgDetMain" },
    { name: "Emma", email: "emma.davis@example.com", photoUrl: "https://th.bing.com/th/id/OIP.Ede9_F5yPMT7NV2jmmjMSQHaE8?rs=1&pid=ImgDetMain" }
  ];

  return (
    <Row xs={1} md={4} className="g-4">
      {students.map((student, idx) => (
        <Col key={idx}>
          <Card className="d-flex align-items-center justify-content-center p-3 text-center" style={{ height: '100%' }}>
            <div style={{ overflow: 'hidden', borderRadius: '50%', width: '150px', height: '150px' }}>
              <Card.Img variant="top" src={student.photoUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <Card.Body> 
              <Card.Title>{student.name}</Card.Title>
              <Card.Text>{student.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default StudentList;
