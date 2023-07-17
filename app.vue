<template>
  <div class="container">
    <div class="header"></div>
    <main class="main">
      <!-- Main Info -->
      <section id="main-info-section" class="section">
        <!-- Profile -->
        <div class="square">
          <img class="profile-img" src="assets/mountains-cut.jpeg" />
        </div>
        <!-- About -->
        <div class="square info-square square-about square-with-padding">
          <h1 class="title">Hello, I'm Juan, a web developer with 3 years of experience</h1>
          <p class="about-text">I like to make minimalist websites, focusing on functionality and performance, keeping the
            essence of each application</p>
          <div class="contact">
            <a href="https://www.linkedin.com/in/juan-vera/" target="_blank">
              <img src="assets/icons/linkedin.svg" class="link-linkedin" />
            </a>
          </div>
        </div>
      </section>
      <!-- Projects -->
      <section id="projects-section" class="section">
        <!-- Finances -->
        <div class="square project-square square-finances project-vertical square-with-padding">
          <div class="title-and-link">
            <h2 class="project-title">Finances</h2>
            <a href="https://juanvera.dev/finances" target="_blank">
              <img src="assets/icons/arrow-up-right-from-square-solid.svg" class="project-link" />
            </a>
          </div>
          <p class="project-subtitle">Manage your accounts, set reminders for debts and services</p>
          <img src="assets/projects/finances.png" class="project-image" />
        </div>
        <!-- Encarga -->
        <div class="square project-square square-encarga project-vertical square-with-padding">
          <div class="title-and-link">
            <h2 class="project-title">Encarga</h2>
            <a href="https://encargarpedido.web.app/" target="_blank">
              <img src="assets/icons/arrow-up-right-from-square-solid.svg" class="project-link" />
            </a>
          </div>
          <div class="info-and-photo-horizontal">
            <ul class="thin-list">
              <li>Create your shop</li>
              <li>Let your clients order</li>
              <li>Receive automatic messages</li>
            </ul>
            <img src="assets/projects/encarga.webp" class="project-image" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.header {
  height: 32px;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.square {
  border-radius: 24px;
}

.square-with-padding {
  padding: 20px;
}

.project-vertical {
  display: flex;
  flex-direction: column;
}

.info-and-photo-horizontal {
  display: flex;
  column-gap: 12px;
}

.project-info {
  display: flex;
  flex-direction: column;
  max-width: 128px;
}

.thin-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.project-subtitle {
  margin-top: 0px;
}

.project-image {
  margin: auto;
  max-width: 100%;
  max-height: 400px;
}

.profile-img {
  border-radius: 24px;
  max-height: 400px;
  object-fit: cover;
}

.title-and-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-link {
  width: 20px;
  /** white color */
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(158deg) brightness(101%) contrast(101%);
}

.project-link:hover {
  filter: none;
}

@media (min-width: 768px) {
  .title {
    font-size: 40px;
    line-height: 47px;
  }

  .square {
    max-width: 400px;
  }

  .profile-img {
    width: calc(40vw - 40px);
    max-width: 400px;
  }
}

@media (min-width: 992px) {
  .container {
    padding-left: 3rem !important;
    padding-right: 3rem !important;
  }
}

@media (max-width: 767px) {
  .section {
    flex-direction: column !important;
    gap: 0;
  }

  .square {
    margin: 10px;
  }

  .profile-img {
    width: 100%;
  }
}

.square-about {
  background: #e8f3ff;
}

.square-finances {
  background-color: rgb(31, 110, 31);
  color: white;
}

.square-encarga {
  background: linear-gradient(to bottom, #eb3349, #f45c43);
  color: white;
}

.about-text {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 151.34%;
}

.link-linkedin:hover {
  filter: invert(23%) sepia(80%) saturate(2382%) hue-rotate(197deg) brightness(95%) contrast(92%);
}
</style>
