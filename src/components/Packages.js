import {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'


export default function Packages(props) {
    const [activeItem, setActiveItem] = useState(props.packages[0])


    const displayPackages = props.packages.map((eachPackage) => 
        <ListGroup.Item active={activeItem === eachPackage} onClick={() => setActiveItem(eachPackage)}>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                    <Card.Text>
                        Check out some of our packages! Every package is ethically sourced and organic!
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayPackages} 
                </ListGroup>
            </Card>
        </Container>
    )
}