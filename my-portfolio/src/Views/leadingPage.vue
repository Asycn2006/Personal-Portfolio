<template>
    <Header/>
    <section id="about" class="about-me">
        <div class="container">
            <div class="row">
                <div class="col-7">
                    <div class="card border-0">
                        <div class="card-description bg-gradient-1 height-350 align-content-center rounded-5 p-4 border-0">
                            <h3 class="mb-4">Hi, I'm <span class="text-info">Vong Vathana</span>.</h3>
                            <span class="fs-5">
                                I’m Vong Vathana, a junior backend developer in training passionate about building scalable and efficient web applications.
                                I study at Royal University of Phnom Penh (RUPP)
                                I focus on backend development, including APIs, databases, and server-side systems, and continuously improve through real-world projects.
                            </span>
                            <div class="row-btn mt-4 d-flex justify-content-between">
                                <router-link class="text-decoration-none fw-bold text-black py-2 width-200 bg-info text-white rounded-pill" :to="{ path: '/', hash: '#contact' }">
                                    Contact&nbsp;<i class="bi bi-arrow-right-circle"></i>
                                </router-link>
                                <router-link class="text-decoration-none fw-bold text-black py-2 width-200 bg-info text-white rounded-pill" :to="{ path: '/', hash: '#contact' }">
                                    <i class="bi bi-arrow-down-circle"></i>&nbsp;Download CV
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="card rounded-5 overflow-hidden">
                        <div class="card-img d-flex justify-content-center align-items-center height-350">
                            <img src="../assets/img/DSC_5425.JPG" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="skills">
        <h1>Skills</h1>
    </section>
    <section id="services">
        <h1>Services</h1>
    </section>
    <section id="projects">
        <h1>Projects</h1>
    </section>
    <section id="contact">
        <h1>Contact</h1>
    </section>
</template>
<script setup>
    import Header from "../Layouts/header.vue";
</script>
<style scoped>
    section {
        padding: 50px;
        border-bottom: 1px solid #ddd;
        scroll-margin-top: 80px;
    }
</style>