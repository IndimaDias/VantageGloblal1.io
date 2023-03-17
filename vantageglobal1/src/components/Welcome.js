import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './css/welcome.css';

export default function Welcome() {

	return (
		//Photo by <a href="https://unsplash.com/@lucabravo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luca Bravo</a> on <a href="https://unsplash.com/wallpapers/travel/new-york-city?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

		<Container fluid className="contanerWelcome" >
			<span className="col-sm-2 welcomeHeading">Vantage Global Business Solutions</span>
			<Row>
				<Col lg={{ span: 6, offset: 6 }} className="welcomeMessage">
					<span> We help to grow your business globally</span>
				</Col>
			</Row>
			
		</Container>
	)

}