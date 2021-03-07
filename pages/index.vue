<template>
	<div class="home-page">
		<CustomCursor ref="cursor" />

		<LandingSection />

		<main class="examples">
			<display-section
				header="1. Hint at User Interaction"
				class="slider-section cursor-lag-behind"
			>
				<slider type="drag" class="drag-slider" />
				<slider type="prev-next" class="prev-next-slider" />
			</display-section>

			<display-section header="2. Hide the True Cursor" class="info-section">
				<div class="img-wrapper">
					<img class="cursor-info-window" src="/images/moon-phases.jpg" />
				</div>
			</display-section>

			<display-section header="3. Disable and Enable" class="disable-section">
				<div class="disable-row">
					<img class="cursor-disable" src="/images/city-lights.jpg" />
					<img class="cursor-disable" src="/images/dark-sky.jpg" />
					<img class="cursor-disable" src="/images/car-light-trail.jpg" />
				</div>
			</display-section>

			<!-- <ChaseSection /> -->
		</main>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home-page {
	overflow: hidden;
	width: 100%;
}

.slider-section {
	.drag-slider {
		margin-bottom: 80px;
	}
}

.examples {
	background-color: #1d1d1d;
	padding-top: 120px;
	padding-bottom: 120px;

	.section-heading {
		font-size: rem(36px);
		font-weight: 700;
		text-align: center;
		margin-bottom: 60px;
	}
}

.info-section {
	.img-wrapper {
		@extend %side-padding;
	}

	img {
		max-height: 90vh;
		object-fit: cover;
		width: 100%;
	}
}

.disable-section {
	.disable-row {
		@extend %side-padding;

		display: flex;

		img {
			width: calc(33.3333% - 40px);
			margin-right: 60px;

			&:last-child {
				margin-right: 0;
			}
		}
	}
}
</style>
