import styled from "styled-components";

const StyledWhyInvest = styled.div`
	width: 100%;
	background-color: white;
	padding: 50px 0 40px;
	color: #242424;
	@media(min-width:1024px){
		height: 590px;
		padding: 140px 0 40px;
	}
	> div {
		display:block;
		@media(min-width:1024px){
			display:flex;
		}
	}
	h2 {
		margin: 0 0 40px 0;
		font-size: 33px;
		line-height: 1.5;
		color: #2B70A8;
		text-align:center;
		@media(min-width:1024px){
			width: 400px;
			min-width: 400px;
			font-size: 36px;
			text-align:left;
		}
	}
	.buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 18px;
		@media(min-width:1024px){
			align-items: flex-start;
		}
		@media(min-width:1100px){
			flex-direction: row;
		}
		> a:first-child {
			button {
				transition:.2s;
				&:hover {
					opacity:.8;
				}
			}
		}
		.button-doubt {
			text-align: left;
			padding: 0;
			margin: 20px auto 50px;
			border: none;
			background-color: transparent;
			text-decoration: underline;
			@media(min-width:1100px){
				padding: 0 0 0 30px;
			}
		}
	}

	.info {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		@media(min-width:1024px){
			max-width: 580px;
		}
		.info-grid {
			@media(min-width:768px){
				display: grid;
				grid-template-columns: 1fr 1fr;
			}
			li {
				margin: 0 10px 70px;
			}
			h4 {
				 font-weight: 700;
				 font-size: 22px;
				 line-height: 29px;

				 margin-bottom: 5px;
			}
			p {
				font-size: 16px;
				line-height: 21px;

				color: #727272;
			}
		}
		> p {
			font-size: 10px;
			line-height: 13px;
		}
	}
`;

export { StyledWhyInvest };