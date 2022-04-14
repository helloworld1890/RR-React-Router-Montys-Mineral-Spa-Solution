import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <li>{eachPackage}</li>)

    return (
        <Container>
    <ListGroup>
        <ListGroup.Item active>
            Our Packages
        </ListGroup.Item>
        <ListGroup.Item>
           {displayPackages}
        </ListGroup.Item>
    </ListGroup>
</Container>
    )
}