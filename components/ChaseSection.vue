<template>
	<div class="chase-section">
		<div class="center-wrapper">
			<div
				class="chase-button-wrapper"
				:class="{ visible: show }"
				@mousemove="moveButton"
				:style="`transform: translate(${pos[0]}px, ${pos[1]}px)`"
			>
				<button class="chase-button">{{ text }}</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		pos: [50, 50],
		show: false,
		texts: [
			'oops, too slow',
			'hehe ;)',
			`so close`,
			'still nothing?',
			`disappointing :(`,
			`one day...`
		],
		text: 'Click Me',
		textI: 0,
		timeout: null,
		allowMove: true
	}),
	methods: {
		moveButton() {
			if (this.allowMove) {
				this.allowMove = false
				this.timeout = setTimeout(() => {
					this.allowMove = true
				}, 80)
			} else {
				return
			}

			let oldX = this.pos[0]
			let oldY = this.pos[1]
			let newX = oldX
			let newY = oldY
			const width = this.$el.offsetWidth
			const height = this.$el.offsetHeight

			while (Math.abs(newX - oldX) < width * 0.2 || Math.abs(newY - oldY) < height * 0.2) {
				newX = Math.random() * width * 0.7 + width * 0.1
				newY = Math.random() * height * 0.7 + height * 0.1
			}

			this.pos = [newX, newY]

			setTimeout(() => {
				this.cycleText()
			}, 80)
		},
		positionInCenter() {
			const y = this.$el.offsetHeight * 0.5 - 110
			const x = this.$el.offsetWidth * 0.5 - 190

			this.pos = [x, y]

			this.text = 'Click Me'
		},
		cycleText() {
			let options = this.texts
			this.text = options[this.textI % options.length]
			this.textI++
		}
	},
	mounted() {
		this.positionInCenter()

		this.show = true

		window.addEventListener('resize', this.positionInCenter)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.positionInCenter)
	}
}
</script>

<style lang="scss" scoped>
.chase-section {
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;

	.chase-button-wrapper {
		position: absolute;
		padding: 80px;
		opacity: 0;
		transition: opacity 240ms ease-out, transform 80ms cubic-bezier(0.16, 1, 0.3, 1);

		&.visible {
			opacity: 1;
		}

		.chase-button {
			border: 1px solid #fff;
			cursor: none;
			padding: 12px 32px;
			width: 220px;
			text-align: center;
		}
	}
}
</style>
