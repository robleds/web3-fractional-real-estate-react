import styled from "styled-components";

const StyledExplanations = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 15px;
	line-height: 20px;
	color: white;
	padding: 50px 0 110px;
	background-color: #2B70A8;
	@media(min-width:980px){
		height: 470px;
	}
	.title {
		font-size: 22px;
		line-height:1.3;
		text-align:center;
		margin: 0 0 100px;
		@media(min-width:768px){
			font-size:24px;
		}
	}
	.explanations-list {
		display: flex;
		justify-content: space-between;
		flex-wrap:wrap;
		width: 100%;
		li {
			width:100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin:0 0 100px 0;
			@media(min-width:400px){
				width:calc((100% / 2) - 20px);
			}
			@media(min-width:768px){
				width:calc((100% / 4) - 20px);
			}
			span {
				display:block!important;
				width:100%!important;
				height:auto!important;
				margin-bottom: 20px!important;
				overflow:visible!important;
				@media(min-width:400px){
					margin-bottom:40px!important;
				}
				> span {
					display:none!important;
				}
				> img {
					display:block!important;
					width:auto!important;
					min-width:auto!important;
					height:auto!important;
					position:relative!important;
					margin:0 auto!important;
				}
			}
			p {
				text-align: center;
				max-width: 215px;
			}
		}
	}
`;

export { StyledExplanations };