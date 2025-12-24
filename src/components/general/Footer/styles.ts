import styled from "styled-components";

const StyledFooter = styled.footer`
	width: 100%;
	padding: 50px 0 20px;
	color: white;
	background-color: black;
	font-family: 'Open Sans', sans-serif;
	font-size: 12px;
	.top, .bot {
		@media(min-width:1024px){
			display: flex;
			width: 100%;
			justify-content: space-between;
		}
	}
	.top {
		@media(min-width:768px){
			display:flex;
		}
		@media(min-width:1024px){
			height: 135px;
		}
		.labels {
			text-align:center;
			@media(min-width:768px){
				display:flex;
				justify-content:space-between;
				flex-direction:column;
				height:135px;
				text-align:left;
			}
			.text-logo {
				margin: 25px 0 20px;
				@media(min-width:768px){
					margin:0;
					white-space:nowrap;
				}
			}
			.social-media {
				display: flex;
				justify-content: space-between;
				width: 125px;
				margin:50px auto 40px;
				@media(min-width:768px){
					margin:0;
				}
			}
		}
		.content {
			text-align:center;
			line-height:1.3;
			max-width:580px;
			@media(min-width:768px){
				text-align:left;
				margin:0 50px;
			}
		}
		.cards {
			display: flex;
			flex: none;
			justify-content: space-between;
			align-self: flex-end;
			width: 150px;
			margin:50px auto 0;
			@media(min-width:768px){
				margin:0;
				margin-left:auto;
			}
		}
	}
	.bot {
		@media(min-width:768px){
			display: flex;
			justify-content: space-between;
			flex-direction: row;
			align-items: center;
			width: 100%;
			margin-top:60px;
		}
		p {
			text-align:center;
			margin:50px 0 30px;
			line-height:1.3;
			@media(min-width:768px){
				margin:0;
			}
		}
		.privacy {
			display: flex;
			a {
				margin:0 20px;
				@media(min-width:768px){
					margin:0 0 0 40px;
				}
			}
		}
	}
`;

export {StyledFooter};