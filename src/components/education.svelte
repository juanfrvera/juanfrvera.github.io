<div>
	<h3 id="title"><slot name="degree" />
	</h3>
	<div id="date"><slot name="date" /></div>
	<div id="degree">
		<slot name="college" /></div>
	<div id="description">
		<slot />
	</div>
</div>

<style>
	#title {
		margin: 0;
		color: #283618;
	}
	#date {
		color: #505a2e;
	}
	#description {
		text-align: justify;
		text-justify: inter-word;
	}
</style>
