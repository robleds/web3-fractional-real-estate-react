import styled from "styled-components";

const StyledEnotariado = styled.div`
	position: relative;
	z-index: 50;
	width: 90%;
	max-width: 1145px;
	border-radius: 10px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .25);
	padding: 20px 40px;
	margin: -42px auto 0;
	background-color: white;
	color: #242424;
	@media(min-width:1024px){
		height: 85px;
	}
	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		flex-direction: column;
		@media(min-width:768px){
			flex-direction: row;
			max-width:875px;
		}
		img {
			min-width: 132px;
		}
		h3 {
			margin: 20px auto;
			font-size: 15px;
			color: #0099AF;
			text-align:center;
			@media(min-width:768px){
				margin:0 auto 20px;
			}
			@media(min-width:1024px){
				margin: 0 24px 0 auto;
			}
		}
		p {
			font-size: 13px;
			text-align:center;
		}
	}
	.enotariado-text {
		@media(min-width:1024px){
			display:flex;
		}
	}
`;

export { StyledEnotariado };