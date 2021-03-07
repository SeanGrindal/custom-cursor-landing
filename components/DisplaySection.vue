<template>
	<div :class="['display-section', { 'section--reverse': reverse }]">
		<div class="info-column">
			<div class="header">
				{{ header }}
			</div>
		</div>

		<div class="examples-column">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		header: {
			type: String
		},
		reverse: {
			type: Boolean
		}
	}
}
</script>

<style lang="scss" scoped>
.display-section {
	// display: flex;

	& ~ .display-section {
		margin-top: 10vw;
	}

	&.section--reverse {
		flex-direction: row-reverse;
	}

	.info-column {
		@extend %side-padding;

		font-size: rem(24px);
		margin-bottom: 3vw;
	}

	.examples-column {
		// margin-left: grid-percentage(1);
		// width: grid-percentage(9);
	}
}
</style>
