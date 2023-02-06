import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import "./Contact.css"
function Contact(){
    return (
        <div>
        <h1>Contact Us!</h1>
        
        <Container>
        <form action="https://formsubmit.co/youremail@mail.com" method="POST">
        <Row className="row-1">
        
        <Col xs={3}><input type="text" name="name" placeholder="Name" required className="box" /></Col>
        <Col xs={3}><input type="email" name="email" placeholder="Email address" required  className="box"/></Col>
    
        </Row>
        <Row className="row-2">
        <textarea name="message" placeholder="Message" rows={10} required className="box"></textarea>
        
        </Row>
        <button type="submit" className="submit">Send</button>
        </form>
        </Container>
        </div>
    )
}

export default Contact;

