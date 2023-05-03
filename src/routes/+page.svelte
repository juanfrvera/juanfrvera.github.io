<script>
	import Education from '../components/education.svelte';
	import Experience from '../components/experience.svelte';
	import Project from '../components/project.svelte';
</script>

<svelte:head>
	<title>Juan Vera</title>
</svelte:head>

<div id="container">
	<h1>Juan Vera</h1>
	I am a Full Stack Web Developer with 3+ years of professional experience.

	<h2>Projects</h2>
	<div class="section">
		<Project githubUrl="https://github.com/juanfrvera/finances" url="https://juanvera.dev/finances">
			<span slot="name">Finances</span>
			<span slot="techs">Svelte, GitHub pages</span>
			<div>
				Keep a list of your accounts, the services you need to pay, and the debts you have to pay or
				charge.
			</div>
		</Project>
		<Project githubUrl="https://github.com/juanfrvera/encarga">
			<span slot="name">Encarga</span>
			<span slot="techs">Angular, Node.Js, SQL</span>
			<div>
				Order anything from your favorite shop, generating an automatic message to send in WhatsApp.
			</div>
		</Project>
	</div>

	<h2>Experience</h2>
	<div class="section">
		<Experience>
			<span slot="company">DevSavant</span>
			<span slot="roles">Full Stack Developer</span>
			<span slot="date">Apr 2021 - Present</span>
			<span>
				I work in a multicultural team, communicating mainly in English. I collaborate with product
				managers and UI/UX designers to build innovative software solutions that improve customer
				experience. We use a flexible schedule, which allows me to balance my work and personal
				life, and I'm able to stay focused and achieve my objectives in a timely manner.
			</span>
		</Experience>
		<Experience>
			<span slot="company">Blaise</span>
			<span slot="roles">Full Stack Developer | Project Manager</span>
			<span slot="date">Dec 2020 - Apr 2021</span>
			<span>
				I created responsive web apps that were optimized for security and performance by
				implementing best practices such as JWT and lazy loading. These apps were designed to work
				seamlessly on multiple devices, resulting in increased user engagement and positive
				feedback. I had experience communicating with clients and have worked as a Project Manager.
				By effectively managing timelines, budgets, and resources, I ensured that the projects were
				completed on time, within budget, and to the satisfaction of clients.
			</span>
		</Experience>
		<Experience>
			<span slot="company">ITsynch</span>
			<span slot="roles">Software Engineer</span>
			<span slot="date">Jan 2020 - Nov 2020</span>
			<span>
				I worked in an agile team that was able to quickly adapt and deliver new features every
				month. I had experience designing and implementing RESTful APIs to provide secure and
				efficient communication between front-end and back-end systems. I have also developed
				multilingual applications using internationalization and localization techniques to support
				users in multiple languages.
			</span>
		</Experience>
	</div>

	<h2>Education</h2>
	<div class="section">
		<Education>
			<span slot="degree">Information Systems Engineer</span>
			<span slot="date">March 2016 - Aug 2021</span>
			<span slot="college">UTN Argentina</span>
		</Education>
		<Education>
			<span slot="degree">Computer Technician</span>
			<span slot="date">Mar 2009 - Dec 2015</span>
			<span slot="college">EET C.M. Etchebarne Argentina</span>
		</Education>
	</div>
</div>

<style>
	:global(body) {
		background-color: #fefae0;
		font-size: 18px;
	}
	#container {
		padding: 32px;
	}
	.section {
		display: flex;
		flex-direction: column;
		row-gap: 16px;
	}
</style>
