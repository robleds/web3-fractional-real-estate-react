import styled from "styled-components";

const StyledBannerOportunity = styled.div`
	.container {
		width:100%;
		max-width:1180px;
		height:100%;
		margin:0 auto;
		padding:0 20px;
		box-sizing:border-box;
		@media(min-width:1220px){
			padding:0;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		padding-bottom: 35px;
		@media(min-width:768px){
			align-items: flex-end;
			flex-direction: row;
		}
	}
	.oportunity-banner {
		height:370px;
		background-repeat:no-repeat;
		background-position:center center;
		background-size:cover;
		backgrund-color:transparent;
		&__titles {
			padding-top:20px;
			@media(min-width:768px){
				padding:0;
				display:block;
				padding-right: 30px;
			}
		}
		&__tag {
			font-family: 'PT Serif',serif;
			font-size: 14px;
			line-height: 19px;
			color: #FFF;
			text-transform:uppercase;
			padding:9px 27px;
			border-radius:25px;
			border:0;
			margin-right:15px;
		}
		&__name {
			font-family: 'PT Serif',serif;
			font-size: 42px;
			line-height: 56px;
			color: #FFF;
			padding: 20px 0 15px;
		}
		&__address {
			display:flex;
			align-items: center;
			img {}
			span {
			font-family: 'PT Serif',serif;
			font-size: 16px;
			line-height: 21px;
			color: #FFF;
			padding-left:12px;
			}
		}
		&__infos {
			@media(min-width:500px){
				display:flex;
				justify-content: flex-end;
				min-width:380px;
			}
			&-area {
				@media(min-width:500px){
					padding:0 30px;
				}
				&:first-child {
					padding:0 0 10px 0;
					@media(min-width:500px){
						padding:0 30px;
					}
				}
				span {
					display:block;
					font-family: 'PT Serif',serif;
					font-size: 16px;
					line-height: 24px;
					color: #FFF;
					strong {
						display:block;
						font-size: 28px;
						line-height: 1;
						color: #F8BC49;
					}
				}
			}
		}
	}
`;

export { StyledBannerOportunity };