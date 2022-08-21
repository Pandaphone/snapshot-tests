import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function gCard() {
  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src="public\1A BEEG IIIIII.png" />
      <Card.Body>
        <Card.Title>Shawn Greene!</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sint ea, harum inventore soluta libero reiciendis quam, 
          fuga perferendis tenetur aut nam repudiandae nobis vel 
          dignissimos maxime! Beatae ut expedita dicta!
        </Card.Text>
        <Card.Text>
          Yoooooo!
        </Card.Text>
        <Button variant="primary">Go to my page!</Button>
      </Card.Body>
    </Card>
  );
}

export default gCard;