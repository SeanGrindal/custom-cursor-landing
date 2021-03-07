<template>
	<div class="cursor">
		<div class="cursor-border"></div>

		<span class="cursor-text" ref="cursor-text"></span>
	</div>
</template>

<script>
import CustomCursor from 'custom-cursor.js'

export default {
	data: () => ({
		cursorInstance: null,
		text: ''
	}),
	mounted() {
		const options = {
			hideTrueCursor: false,
			focusElements: [
				{
					selector: '.drag-slider',
					focusClass: 'cursor--drag',
					mouseenter: () => {
						this.$refs['cursor-text'].innerHTML = 'drag'
					}
				},
				{
					selector: '.cursor-prev',
					focusClass: 'cursor--prev',
					mouseenter: () => {
						this.$refs['cursor-text'].innerHTML = '< prev'
					}
				},
				{
					selector: '.cursor-next',
					focusClass: 'cursor--next',
					mouseenter: () => {
						this.$refs['cursor-text'].innerHTML = 'next >'
					}
				},
				{
					selector: '.cursor-info-window',
					focusClass: 'cursor--info-window',
					mouseenter: () => {
						this.cursorInstance.hideTrueCursor()

						this.$refs[
							'cursor-text'
						].innerHTML = `Our Moon takes about 29.5 days to complete one cycle of phases`
					},
					mouseleave: () => {
						this.cursorInstance.unhideTrueCursor()
					}
				},
				{
					selector: '.cursor-disable',
					focusClass: '',
					mouseenter: () => {
						this.cursorInstance.disable()
					},
					mouseleave: () => {
						this.cursorInstance.enable()
					}
				},
				'a',
				'button'
			],
			focusClass: 'cursor--focused'
		}

		this.cursorInstance = new CustomCursor('.cursor', options).initialize()
	},
	beforeDestroy() {
		this.cursorInstance.destroy()
	}
}
</script>

<style lang="scss" scoped>
.cursor {
	color: #ff5050;
	display: none;
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	top: 0;
	left: 0;
	position: fixed;
	will-change: transform;
	transition: opacity 400ms cubic-bezier(0.23, 1, 0.32, 1),
		transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
	z-index: 998;

	&.cursor--initialized {
		display: block;
	}

	&.cursor--off-screen,
	&.cursor--disabled {
		opacity: 0;
	}

	.cursor-border {
		position: absolute;
		box-sizing: border-box;
		align-items: center;
		border: 1px solid #ff5050;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		height: 16px;
		width: 16px;
		left: 0;
		top: 0;
		transform: translate(-50%, -50%);
		transition: all 360ms cubic-bezier(0.23, 1, 0.32, 1);
		will-change: height, width;
	}

	.cursor-text {
		font-size: rem(14px);
		opacity: 0;
		transition: opacity 120ms cubic-bezier(0.23, 1, 0.32, 1);
		will-change: opacity;
		position: relative;
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 200px;
	}

	// =========================================
	// Interaction Effects
	// =========================================
	&.cursor--drag {
		.cursor-border {
			width: 90px;
			height: 90px;
		}

		&.cursor--clicking {
			.cursor-border {
				width: 74px;
				height: 74px;
				border-color: rgba(#ff5050, 0.1);
			}

			.cursor-text::after,
			.cursor-text::before {
				opacity: 1 !important;
			}
		}

		.cursor-text {
			opacity: 1;
			transition: opacity 360ms cubic-bezier(0.23, 1, 0.32, 1);
		}

		.cursor-text {
			&::after,
			&::before {
				content: '>';
				position: absolute;
				display: block;
				top: -4px;
				right: 28px;
				font-size: 1.25rem;
				transition: opacity 360ms cubic-bezier(0.23, 1, 0.32, 1);
				opacity: 0.5;
			}

			&::before {
				content: '<';
				right: initial;
				left: 28px;
			}
		}
	}

	&.cursor--prev,
	&.cursor--next {
		.cursor-border {
			border-color: rgba(#ff5050, 0);
			transition: border-color 80ms;
		}

		.cursor-text {
			opacity: 1;
			transition: opacity 360ms cubic-bezier(0.23, 1, 0.32, 1);
			font-size: rem(18px);
		}

		&.cursor--clicking {
			opacity: 0.7;
		}
	}

	&.cursor--info-window {
		transition: transform 240ms cubic-bezier(0.23, 1, 0.32, 1);

		.cursor-border {
			opacity: 0;
			transition: opacity 80ms cubic-bezier(0.23, 1, 0.32, 1);
		}

		.cursor-text {
			opacity: 1;
			transition: opacity 360ms cubic-bezier(0.23, 1, 0.32, 1);
		}
	}
}
</style>
