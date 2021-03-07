<template>
	<div class="glide slider">
		<div data-glide-el="track" class="glide__track">
			<ul class="glide__slides">
				<li class="glide__slide">
					<img src="/images/car-light-trail.jpg" />
				</li>
				<li class="glide__slide">
					<img src="/images/dark-mountain.jpg" />
				</li>
				<li class="glide__slide">
					<img src="/images/dark-water.jpg" />
				</li>
				<li class="glide__slide">
					<img src="/images/dark-sky.jpg" />
				</li>
			</ul>
		</div>

		<div class="prev-next-wrapper" v-if="type == 'prev-next'">
			<div class="cursor-prev" @click="prev"></div>
			<div class="cursor-next" @click="next"></div>
		</div>
	</div>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
	props: {
		type: {
			type: String,
			default: 'drag'
		}
	},
	data: () => ({
		glide: null
	}),
	methods: {
		prev() {
			this.glide.go('<')
		},
		next() {
			this.glide.go('>')
		}
	},
	mounted() {
		this.glide = new Glide(this.$el, {
			type: 'carousel',
			perView: 4,
			gap: 40
		}).mount()
	}
}
</script>

<style lang="scss" scoped>
// Required Core Stylesheet
@import 'node_modules/@glidejs/glide/src/assets/sass/glide.core';

.drag-slider {
	overflow: visible;
	opacity: 0;
	transition: opacity 800ms ease-out;

	&.glide--swipeable {
		opacity: 1;
	}
}

.prev-next-slider {
	cursor: pointer;

	.prev-next-wrapper {
		display: flex;
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;

		& > div {
			width: 50%;
		}
	}
}

.glide__track {
	transition: transform 420ms ease;
	overflow: visible;
}

.slider:hover .glide__track {
	transform: scale(0.98);
}

.glide__slide {
	background-color: rgb(51, 46, 46);
	position: relative;

	&::before {
		content: '';
		display: block;
		padding-top: 75%;
		width: 100%;
	}

	img {
		position: absolute;
		height: 100%;
		top: 0;
		left: 0;
		width: 100%;
		object-fit: cover;
		z-index: 10;
	}
}

.glide--dragging {
	.glide__track {
		transform: scale(0.9) !important;
	}
}
</style>
