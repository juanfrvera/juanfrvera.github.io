<script lang="ts">
	export let githubUrl: string | undefined = undefined;
</script>

<div>
	<h3 id="title">
		<slot name="name" />
	</h3>
	<div id="techs">
		<slot name="techs" />
	</div>
	<div id="description">
		<slot />
	</div>
	<div id="links">
		{#if githubUrl}
			<a href={githubUrl} target="_blank">GitHub</a>
		{/if}
	</div>
</div>

<style>
	#title {
		margin: 0;
		color: #283618;
	}
	#techs {
		color: #505a2e;
	}
	#description {
		text-align: justify;
		text-justify: inter-word;
	}
</style>
