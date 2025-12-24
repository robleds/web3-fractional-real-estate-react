import styled from "styled-components";

const StyledHeader = styled.header`
	display: flex;
	flex-flow: column nowrap;
	width: 100%;
	height: 370px;
	background-image: url(/static/images/header-bg.png);
	background-position: center;
	background-size: cover;
	padding: 10px 15px 0;
	color: white;
	@media(min-width:768px){
		padding: 43px 15px 0;
	}
	h1 {
		font-size: 25px;
		line-height:30px;
		font-weight: 700;
		max-width: 550px;
		@media(min-width:768px){
			font-size: 36px;
			line-height: 48px;
		}
	}
	h2 {
		max-width: 280px;
		margin: 15px 0 35px;
		font-size:16px;
		line-height:1.3;
		@media(min-width:768px){
			font-size:18px;
		}
	}
	> div > div {
		@media(min-width:768px){
			display:flex;
		}
	}
	.button-investir {
		display:block;
		&__link {
			display:block;
			width:180px;
			line-height:1;
			font-size:16px;
			padding:15px 0 18px 0;
			transition:.2s;
			@media(min-width:768px){
				width:230px;
				font-size:18px;
				padding:22px 0 24px 0
			}
			&:hover {
				opacity:.8;
			}
		}
	}
	.button-doubt {
		padding: 0;
		margin: 23px;
		height: 23px;
		border: none;
		color: #F8BC49;
		background-color: transparent;
		text-decoration: underline;
		font-size:14px;
		@media(min-width:768px){
			font-size:16px;
		}
	}
`;

export { StyledHeader };