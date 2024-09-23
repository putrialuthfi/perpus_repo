import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css';

function Article() {
  return (
    <div>
      <h3 style={{alignItems: 'center'}}>Bacaan Untukmu</h3>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../ar-1.jpg" />
          <Card.Body>
            <Card.Title>Amerika Serikat Memperingati Hari Baca</Card.Title>
            <Card.Text>
              Amerika Serikat merayakan Hari Baca Buku Nasional setiap tanggal 6 September. Hari ini didedikasikan untuk semua 
            </Card.Text>
            <Button className="custom-button-primary">Baca Selengkapnya</Button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default Article;