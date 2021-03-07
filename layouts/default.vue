<template>
	<div class="layout">
		<header>
			<a href="https://github.com/SeanGrindal/custom-cursor.js" target="_blank">Source Code</a
			><a href="https://www.npmjs.com/package/custom-cursor.js" target="_blank">NPM</a>
		</header>
		<Nuxt />
	</div>
</template>

<style lang="scss" scoped>
.layout {
	min-height: 100vh;

	header {
		@extend %side-padding;

		align-items: center;
		background-color: rgb(26, 26, 26);
		display: flex;
		justify-content: space-between;
		padding-top: 40px;
		padding-bottom: 40px;
		font-weight: 700;
		position: relative;
		z-index: 999;

		a {
			transition: all 600ms cubic-bezier(0.23, 1, 0.32, 1);

			&:hover {
				transform: scale(1.1);
				opacity: 0.8;
			}
		}
	}
}
</style>
