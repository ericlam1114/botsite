import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import logo from '../images/botlogo.png';

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		{/* GeeksforGeeks: A Computer Science Portal for Geeks */}
	</h1>
	<Container>
		<Row>
	<a href="/" className="logo">

<img src={logo} alt="" />

</a>
		<Column>
			<Heading>Features</Heading>
			<FooterLink href="/">Profitability</FooterLink>
			<FooterLink href="/">Optimization</FooterLink>
			<FooterLink href="/">Advantage</FooterLink>
		</Column>
		<Column>
			<Heading>About</Heading>
			<FooterLink href="/">Developed in 2022 by R.O. Ventures.</FooterLink>
			<FooterLink href="/">ryan@botwarrior.io</FooterLink>
			<FooterLink href="/">Los Angeles, CA</FooterLink>
			{/* <FooterLink href="/">Internships</FooterLink>
			<FooterLink href="/">Coding</FooterLink>
			<FooterLink href="/">Teaching</FooterLink> */}
		</Column>
		<Column>
			<Heading>Waitlist</Heading>
			<FooterLink href="/">Join Now</FooterLink>
		
		</Column>
		<Column>
			{/* <Heading>Social Media</Heading>
			<FooterLink href="/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="/">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="/">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i> */}
			{/* </FooterLink> */}
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
