import styled from "styled-components";

const StyledSellProperty = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background-image: url(/static/images/sell-bg.png);
	background-position: center;
	background-size: cover;
	padding: 50px 0;
	color: white;
	@media(min-width:768px){
		height: 320px;
		padding: 113px 0;
	}
	.title {
		font-size: 29px;
		line-height: 1.3;
		max-width: 340px;
		text-align:center;
		@media(min-width:768px){
			font-size:36px;
		}
		@media(min-width:1024px){
			text-align:left;
		}
	}
	.description {
		color: #F5CE49;
		font-size: 16px;
		line-height: 24px;
		max-width: 410px;
		margin: 30px 0;
		text-align:center;
		@media(min-width:1024px){
			margin:0 10px;
			text-align:left;
			font-size: 18px;
		}
	}
	button {
		display:block;
		width:100%;
		max-width: 280px;
		font-size: 16px;
		padding:0 25px 5px;
		transition:.2s;
		&:hover {
			opacity:.8;
		}
	}
`;

export { StyledSellProperty };