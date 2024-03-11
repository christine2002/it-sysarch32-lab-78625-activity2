import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function StudentList() {
  // Define the list of students directly inside the component
  const students = [
    { name: "John Doe", email: "john.doe@example.com", photoUrl: "https://s-i.huffpost.com/gen/845469/images/o-PROFESSIONAL-FB-PHOTOS-facebook.jpg" },
    { name: "Jane Smith", email: "jane.smith@example.com", photoUrl: "https://s-i.huffpost.com/gen/845469/images/o-PROFESSIONAL-FB-PHOTOS-facebook.jpg" },
    { name: "Alice Johnson", email: "alice.johnson@example.com", photoUrl: "https://s-i.huffpost.com/gen/845469/images/o-PROFESSIONAL-FB-PHOTOS-facebook.jpg" },
    { name: "Bob Brown", email: "bob.brown@example.com", photoUrl: "https://s-i.huffpost.com/gen/845469/images/o-PROFESSIONAL-FB-PHOTOS-facebook.jpg" },
    { name: "Emma Davis", email: "emma.davis@example.com", photoUrl: "https://s-i.huffpost.com/gen/845469/images/o-PROFESSIONAL-FB-PHOTOS-facebook.jpg" }
  ];

  return (
    <Row xs={1} md={4} className="g-4">
      {students.map((student, idx) => (
        <Col key={idx}>
          <Card className="d-flex align-items-center justify-content-center p-3" style={{ height: '100%' }}>
            <div style={{ overflow: 'hidden', borderRadius: '50%', width: '150px', height: '150px' }}>
              <Card.Img variant="top" src={student.photoUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <Card.Body className="pt-3"> {/* Add padding top */}
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
