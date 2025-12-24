import styled from "styled-components";

const StyledOpportunitues = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 50px 0 70px;
	background-color: white;
	@media(min-width:980px){
		height: 610px;
	}
	.see-opportunities {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		margin: 0 0 45px;
		@media(min-width:768px){
			flex-direction: row;
			justify-content: space-between;
			margin: 0 0 30px;
		}
		span {
			color: #2B70A8;
			font-weight: 700;
			font-size: 24px;
			line-height:1.2;
			padding-bottom:20px;
			text-align:center;
			@media(min-width:768px){
				padding:0;
				text-align:left;
			}
		}
		button {
			width: 180px;
			border: 1px solid #242424;
			border-radius: 4px;
			background-color: transparent;
			color: #242424;
			font-weight: 700;
			font-size: 16px;
			padding:11px 0 13px;
			transition:.2s;
			&:hover {
				background-color:#242424;
				color:#fff;
			}
		}
	}
	.list-invest {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 24px 20px;
		width: 100%;
		@media(min-width:980px){
			grid-template-columns: 1fr 1fr 1fr;
		}
		a {
			display:block;
			width:100%;
			max-width: 380px;
			margin:0 auto 20px;
		}
	}
`;

export { StyledOpportunitues };