<template>
	<div class="home-page">
		<CustomCursor ref="cursor" />

		<LandingSection />

		<main class="examples">
			<display-section
				header="1. Hint at User Interaction"
				description="Transform the cursor into various forms to create exciting desings and user interface options"
				class="slider-section cursor-lag-behind"
			>
				<slider type="drag" class="drag-slider" />
				<slider type="prev-next" class="prev-next-slider" />
			</display-section>

			<display-section
				header="2. Hide the True Cursor"
				description="Hide the true mouse cursor and display text and other information through the custom cursor"
				class="info-section"
			>
				<div class="img-wrapper">
					<img class="cursor-info-window" src="/images/moon-phases.jpg" />
				</div>
			</display-section>

			<display-section
				header="3. Disable and Enable"
				description="Freely disable and enable the custom cursor as needed. For example, you can disable the custom cursor when hovering important media you don't want obstructed"
				class="disable-section"
			>
				<div class="disable-row">
					<img class="cursor-disable" src="/images/city-lights.jpg" />
					<img class="cursor-disable" src="/images/dark-sky.jpg" />
					<img class="cursor-disable" src="/images/car-light-trail.jpg" />
				</div>
			</display-section>

			<display-section
				header="4. Override the true cursor completely"
				description="If you want more control you can disable the true cursor entirely and use the custom-cursor solely on it's own"
				class="override-section"
			>
				<div class="override-wrapper">
					<ChaseSection />
				</div>
			</display-section>

			<!-- <ChaseSection /> -->
		</main>

		<footer class="footer">
			<p><span>Released under the MIT license</span></p>
			<p>
				<span>Copyright &copy; {{ new Date().getFullYear() }}</span>
				<a href="https://seangrindal.dev" target="_blank">Sean Grindal</a>
			</p>
		</footer>
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
			object-fit: cover;
			width: calc(33.3333% - 40px);
			margin-right: 60px;

			&:last-child {
				margin-right: 0;
			}
		}
	}
}

.override-section {
	.override-wrapper {
		background-color: #181111;
		box-shadow: 0px 1px 15px 4px rgb(0 0 0 / 20%);
		cursor: none !important;
		position: relative;

		&::before {
			content: '';
			display: block;
			width: 100%;
			padding-top: 40%;
		}
	}
}

.footer {
	@extend %side-padding;

	display: flex;
	justify-content: space-between;
	font-size: rem(14px);
	padding-top: 68px;
	padding-bottom: 50px;
	position: relative;

	span {
		opacity: 0.8;
	}

	a {
		&:hover {
			opacity: 0.5;
		}
	}
}
</style>
