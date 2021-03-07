<template>
	<section class="landing-section">
		<h1 class="site-heading">
			Custom <br />
			Cursor JS
		</h1>
		<p>
			Innovate UX on the web. A dependancy-free libaray that enables the creation and
			customization of javascript based cursors.
		</p>
	</section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.landing-section {
	align-items: center;
	padding-top: calc(10vw - 30px);
	background-color: rgb(26, 26, 26);
	box-shadow: 0px 1px 15px 4px rgba(#000, 0.2);
	padding-bottom: 10vw;
	position: relative;
	z-index: 998;

	@extend %side-padding;

	@media (min-width: 860px) {
		display: flex;
	}
}

.site-heading {
	font-size: 6rem;
	font-weight: 700;
	opacity: 0.5;
	line-height: 1;
	margin-bottom: 24px;

	@media (min-width: 860px) {
		margin-bottom: 0;
		width: grid-percentage(9);
	}

	@media (min-width: 1020px) {
		width: grid-percentage(7);
	}

	@media (min-width: 1480px) {
		width: grid-percentage(5);
	}
}

p {
	font-size: rem(18px);
	max-width: 560px;

	@media (min-width: 860px) {
		width: grid-percentage(3);
	}

	@media (min-width: 1180px) {
		width: grid-percentage(2);
	}
}
</style>
