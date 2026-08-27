<template>
  <Header />

  <!-- Hero / About Me & Personal Details Section -->
  <section id="about" class="hero-section">
    <div class="container">
      <div class="row align-items-center gy-5">
        <!-- Hero Copy -->
        <div class="col-lg-7 order-2 order-lg-1">
          <div class="hero-content">
            <span class="section-label">Developer Profile</span>
            <h1 class="hero-title mb-2">
              Hi, I'm <span class="text-cyan text-glow">VONG VATHANA</span>
            </h1>
            <h2 class="hero-subtitle mb-4">
              Backend Web Developer
            </h2>
            <p class="hero-desc mb-4">
              I am a fourth-year Computer Science student at RUPP with an interest in backend development. I have experience building web applications using Vue.js, API Consumption. I enjoy building real projects, solving problems, collaborating with others, and continuously improving my web development skills.
            </p>

            <!-- Personal Details Chips -->
            <div class="row g-3 mb-4">
              <div class="col-sm-6">
                <div class="personal-chip">
                  <div class="personal-chip-icon">
                    <i class="bi bi-calendar3"></i>
                  </div>
                  <div>
                    <div class="text-gray-300 extra-small">Date of Birth</div>
                    <div class="fw-semibold text-white small">25, May, 2006</div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="personal-chip">
                  <div class="personal-chip-icon">
                    <i class="bi bi-flag-fill"></i>
                  </div>
                  <div>
                    <div class="text-gray-300 extra-small">Nationality</div>
                    <div class="fw-semibold text-white small">Cambodian</div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="personal-chip">
                  <div class="personal-chip-icon">
                    <i class="bi bi-translate"></i>
                  </div>
                  <div>
                    <div class="text-gray-300 extra-small">Languages</div>
                    <div class="fw-semibold text-white small">Khmer and English</div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="personal-chip">
                  <div class="personal-chip-icon">
                    <i class="bi bi-mortarboard-fill"></i>
                  </div>
                  <div>
                    <div class="text-gray-300 extra-small">University</div>
                    <div class="fw-semibold text-white small">RUPP (4th Year)</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA Actions -->
            <div class="hero-actions d-flex flex-wrap gap-3">
              <router-link class="btn btn-primary-glow width-200 rounded-pill text-decoration-none" :to="{ path: '/', hash: '#contact' }">
                Contact Me &nbsp;<i class="bi bi-arrow-right-circle-fill"></i>
              </router-link>
              <a href="/Vong_Vathana_CV.pdf" download="Vong_Vathana_CV.pdf" class="btn btn-outline-glow width-200 rounded-pill text-decoration-none d-inline-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-down-circle-fill me-2"></i> Download CV
              </a>
            </div>
          </div>
        </div>
        <!-- Hero Avatar -->
        <div class="col-lg-5 order-1 order-lg-2 d-flex justify-content-center">
          <div class="avatar-frame">
            <div class="avatar-inner">
              <img src="../assets/img/DSC_5425.JPG" alt="Vong Vathana Profile Photo">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Education & Scholarship Section -->
  <section id="education" class="education-section">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-8">
          <span class="section-label">Academic Background</span>
          <h2 class="section-title">Education &amp; Scholarship</h2>
          <p class="section-copy">
            Rigorous foundation in computer science principles, database engineering, and modern full-stack web development.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <!-- University Degree Card -->
        <div class="col-lg-6">
          <div class="timeline-card glass-card p-4 p-md-5 rounded-4 h-100">
            <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
              <div>
                <span class="timeline-badge mb-2">
                  <i class="bi bi-calendar-check"></i> 2024 – Present
                </span>
                <h3 class="text-white fs-4 fw-bold mb-1">Bachelor of Computer Science</h3>
                <p class="text-cyan fw-semibold mb-0">Royal University of Phnom Penh (RUPP)</p>
              </div>
              <div class="contact-icon-box">
                <i class="bi bi-mortarboard-fill"></i>
              </div>
            </div>

            <p class="text-gray-300 small mb-4">
              Currently in the 4th year pursuing deep knowledge in software engineering, computing algorithms, and web infrastructure.
            </p>

            <h4 class="text-white fs-6 fw-bold mb-3"><i class="bi bi-book-half text-cyan me-2"></i> Relevant Courses:</h4>
            <div class="d-flex flex-wrap gap-2">
              <span class="subcourse-chip"><i class="bi bi-cloud-arrow-up-fill"></i> Web and Cloud Technology</span>
              <span class="subcourse-chip"><i class="bi bi-database-fill-gear"></i> Database Design and Management</span>
              <span class="subcourse-chip"><i class="bi bi-code-slash"></i> Object-Oriented and Programming</span>
              <span class="subcourse-chip"><i class="bi bi-diagram-3-fill"></i> Data Structure</span>
            </div>
          </div>
        </div>

        <!-- Scholarship & Specialized Training Card -->
        <div class="col-lg-6">
          <div class="timeline-card glass-card p-4 p-md-5 rounded-4 h-100">
            <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
              <div>
                <div class="d-flex flex-wrap gap-2 mb-2">
                  <span class="scholarship-badge">
                    <i class="bi bi-award-fill"></i> SCHOLARSHIP
                  </span>
                  <span class="timeline-badge">
                    <i class="bi bi-calendar-event"></i> 16 June 2025 – 17 July 2026
                  </span>
                </div>
                <h3 class="text-white fs-4 fw-bold mb-1">
                  <a href="https://www.facebook.com/ant.com.kh" target="_blank" class="text-white text-decoration-none hover-cyan">
                    ANT Technology Training Center <i class="bi bi-box-arrow-up-right fs-6 ms-1"></i>
                  </a>
                </h3>
                <p class="text-cyan fw-semibold mb-2">Sponsored by Ministry of Post and Telecommunications &amp; CBRD Fund</p>
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <a href="https://www.facebook.com/ant.com.kh" target="_blank" class="quick-link-chip">
                    <i class="bi bi-facebook text-cyan"></i> ant.com.kh
                  </a>
                  <a href="https://t.me/anttechnology" target="_blank" class="quick-link-chip">
                    <i class="bi bi-telegram text-cyan"></i> @anttechnology
                  </a>
                </div>
              </div>
              <div class="contact-icon-box text-warning">
                <i class="bi bi-patch-check-fill"></i>
              </div>
            </div>

            <!-- Web Development Course Breakdown -->
            <div class="mb-4">
              <h4 class="text-white fs-6 fw-bold mb-2"><i class="bi bi-laptop text-cyan me-2"></i> Web Development Course:</h4>
              <div class="mb-2">
                <strong class="text-gray-100 small">Frontend:</strong>
                <span class="text-gray-300 small ms-1">HTML, CSS, Bootstrap, JavaScript, Vue.js, API Consumption</span>
              </div>
              <div class="mb-2">
                <strong class="text-gray-100 small">Backend:</strong>
                <span class="text-gray-300 small ms-1">Node.js, Express.js, API Design, JWT Authentication, MVC Architecture</span>
              </div>
              <div class="mb-2">
                <strong class="text-gray-100 small">Extra Courses:</strong>
                <span class="text-gray-300 small ms-1">C++, UX/UI Advanced Concepts, Cyber Security Fundamentals</span>
              </div>
              <div>
                <strong class="text-gray-100 small">Collaboration:</strong>
                <span class="text-gray-300 small ms-1">Git GitHub Version Control Team Collaboration</span>
              </div>
            </div>

            <!-- Short Courses -->
            <div>
              <h4 class="text-white fs-6 fw-bold mb-2"><i class="bi bi-tags-fill text-cyan me-2"></i> Short Courses:</h4>
              <span class="subcourse-chip"><i class="bi bi-filetype-html"></i> HTML + HTML5 &amp; CSS3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Work Experience / Academic Projects Section -->
  <section id="experience" class="experience-section">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-8">
          <span class="section-label">Hands-On Practice</span>
          <h2 class="section-title">Work &amp; Academic Experience</h2>
          <p class="section-copy">
            Real-world academic systems and full-stack projects built at ANT Technology Training Center.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <!-- Experience 1: ANTForum -->
        <div class="col-lg-6">
          <div class="timeline-card glass-card p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                <div>
                  <span class="timeline-badge mb-2">
                    <i class="bi bi-building"></i> ANT Technology Training Center
                  </span>
                  <h3 class="text-white fs-4 fw-bold mb-1">Project: ANT Forum Community</h3>
                  <p class="text-cyan fw-semibold mb-0">Role: UX-UI, Frontend &amp; Hosting Server</p>
                  <p class="text-gray-400 extra-small">Academic Project Developer</p>
                </div>
                <a href="https://frontend-ant-forum.vtn.work.gd/" target="_blank" class="btn btn-outline-glow btn-sm rounded-pill px-3 py-1">
                  <i class="bi bi-box-arrow-up-right me-1"></i> Live Site
                </a>
              </div>

              <h4 class="text-white fs-6 fw-bold mb-3 mt-4">Key Responsibilities:</h4>
              <ul class="responsibility-list mb-4">
                <li>Designed the UI/UX user experience and planned the frontend component architecture for the ANT Forum.</li>
                <li>Integrated RESTful APIs into the user interface using modern frontend frameworks (e.g., Vue) to display and manage dynamic data.</li>
                <li>State Management using Pinia to create stores that manage global data (like user authentication, complex dashboard metrics) efficiently across application.</li>
                <li>API Integration: Connecting to backends (like Node.js/Express or Supabase) using tools like Axios or the native Fetch API within Vue's lifecycle hooks (e.g., onMounted).</li>
                <li>Application Deployment: Updating production environments on a Contabo VPS by pulling the latest code commits directly from GitHub repositories.</li>
                <li>Process Management: Utilizing PM2 within the aaPanel environment to restart backend services (such as Node.js applications), monitor application health, and ensure consistent uptime after updates.</li>
                <li>Collaborated with instructors and teammates to refine requirements and improve system functionality.</li>
              </ul>
            </div>

            <div class="d-flex flex-wrap gap-2 pt-3 border-top border-white border-opacity-10">
              <span class="tech-tag-badge">Vue.js</span>
              <span class="tech-tag-badge">Pinia</span>
              <span class="tech-tag-badge">Node.js</span>
              <span class="tech-tag-badge">Contabo VPS</span>
              <span class="tech-tag-badge">aaPanel</span>
              <span class="tech-tag-badge">PM2</span>
              <span class="tech-tag-badge">Figma</span>
            </div>
          </div>
        </div>

        <!-- Experience 2: Phsar Yerng -->
        <div class="col-lg-6">
          <div class="timeline-card glass-card p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                <div>
                  <span class="timeline-badge mb-2">
                    <i class="bi bi-building"></i> ANT Technology Training Center
                  </span>
                  <h3 class="text-white fs-4 fw-bold mb-1">Project: Phsar Yerng Ecommerce</h3>
                  <p class="text-cyan fw-semibold mb-0">Role: UX-UI &amp; Frontend</p>
                  <p class="text-gray-400 extra-small">Academic Project Developer</p>
                </div>
                <a href="https://vue-e-commerce-ant.vercel.app/" target="_blank" class="btn btn-outline-glow btn-sm rounded-pill px-3 py-1">
                  <i class="bi bi-box-arrow-up-right me-1"></i> Live Site
                </a>
              </div>

              <h4 class="text-white fs-6 fw-bold mb-3 mt-4">Key Responsibilities:</h4>
              <ul class="responsibility-list mb-4">
                <li>Organized comprehensive design systems, components, cohesive color palettes, typography hierarchy, and UI icons.</li>
                <li>Designed intuitive and responsive user interfaces using Figma from wireframes to high-fidelity mockups.</li>
                <li>Improved end-user experience and component responsiveness based on structured feedback from course instructors and teammates.</li>
                <li>Implemented frontend UI components and connected layout designs with clean, responsive web code.</li>
              </ul>
            </div>

            <div class="d-flex flex-wrap gap-2 pt-3 border-top border-white border-opacity-10">
              <span class="tech-tag-badge">Figma</span>
              <span class="tech-tag-badge">UI/UX Design</span>
              <span class="tech-tag-badge">Design Systems</span>
              <span class="tech-tag-badge">HTML5</span>
              <span class="tech-tag-badge">CSS3 / Bootstrap</span>
              <span class="tech-tag-badge">Vue.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Technical Skills Section -->
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-8">
          <span class="section-label">Expertise</span>
          <h2 class="section-title">Technical Arsenal</h2>
          <p class="section-copy">
            Continuously evolving my stack to build efficient, scalable backend architectures with polished, fast, and accessible user interfaces.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <div v-for="group in skills" :key="group.category" class="col-md-6">
          <div class="skill-card h-100 p-4 p-md-5 rounded-4 glass-card">
            <div class="card-header d-flex justify-content-between align-items-start border-0 bg-transparent p-0 mb-4">
              <div>
                <h3 class="card-title mb-1 text-white fs-4 fw-bold">{{ group.category }}</h3>
                <p class="card-subtitle mb-0 text-gray-300 small">{{ group.description }}</p>
              </div>
              <span class="badge bg-info-custom">{{ group.level }}</span>
            </div>

            <ul class="list-unstyled mb-0">
              <li v-for="skill in group.items" :key="skill.name" class="mb-3">
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-value text-cyan font-mono small">{{ skill.level }}</span>
                </div>
                <div class="progress skill-progress">
                  <div class="progress-bar bg-gradient-cyan" role="progressbar" :style="{ width: skill.level }" :aria-valuenow="parseInt(skill.level)" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Hobbies & Interests Section -->
  <section id="interests" class="interests-section py-5">
    <div class="container">
      <div class="glass-card rounded-4 p-4 p-md-5 border border-info border-opacity-25">
        <div class="row align-items-center gy-4">
          <div class="col-lg-4 text-lg-start text-center">
            <span class="section-label">Passion &amp; Focus</span>
            <h3 class="text-white fs-3 fw-bold mb-3">Hobbies &amp; Interests</h3>
            <div class="d-flex flex-wrap gap-2 justify-content-lg-start justify-content-center">
              <span class="interest-tag"><i class="bi bi-laptop"></i> Web Applications</span>
              <span class="interest-tag"><i class="bi bi-hdd-network"></i> RESTful APIs</span>
              <span class="interest-tag"><i class="bi bi-shield-lock-fill"></i> Secure Auth</span>
              <span class="interest-tag"><i class="bi bi-server"></i> Cloud &amp; VPS Hosting</span>
            </div>
          </div>
          <div class="col-lg-8">
            <p class="text-gray-100 fs-6 leading-relaxed mb-0">
              "Passionate about learning backend development and building practical, scalable web applications. Interested in exploring database design, RESTful APIs, secure authentication (JWT), component-driven UI architecture, and modern web technologies. I also enjoy collaborating with other developers, sharing knowledge, and continuously improving my technical skills through hands-on projects and learning new technologies."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Selected Projects Section -->
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="row align-items-end mb-5">
        <div class="col-lg-6">
          <span class="section-label">Portfolio Works</span>
          <h2 class="section-title text-dark-override">Featured Projects</h2>
          <p class="section-copy text-dark-copy">
            Hands-on systems demonstrating API architecture, frontend components, and payment/database flows.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <div v-for="(project, index) in projects" :key="project.id || project.title" class="col-md-6 col-lg-4">
          <div class="project-card-custom h-100 rounded-4 overflow-hidden shadow-sm">
            <div class="project-banner-custom" :class="'banner-' + (index % 3)">
              <span class="project-type-badge text-glow text-uppercase">{{ project.project_type || project.type }}</span>
            </div>
            <div class="project-body-custom p-4 d-flex flex-column justify-content-between">
              <div>
                <h3 class="project-title-text text-white mb-2">{{ project.title }}</h3>
                <p class="project-desc-text text-gray-300 small mb-4">{{ project.description }}</p>
              </div>
              <div>
                <div class="d-flex flex-wrap gap-2 mb-4">
                  <span v-for="tech in (Array.isArray(project.tech) ? project.tech : splitTech(project.technologies))" :key="tech" class="tech-tag-badge">
                    {{ tech }}
                  </span>
                </div>
                <div class="d-flex flex-wrap gap-3 mt-3">
                  <!-- Live Demo website URL -->
                  <a v-if="project.live_demo_url && project.live_demo_url !== '#'" :href="project.live_demo_url" target="_blank" class="project-link-custom text-decoration-none d-inline-flex align-items-center gap-1">
                    Visit Website <i class="bi bi-box-arrow-up-right fs-6 align-middle"></i>
                  </a>
                  <!-- Fallback link if missing -->
                  <span v-else class="text-muted small">
                    Academic Showcase <i class="bi bi-check-circle-fill text-cyan ms-1"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Certificate & References Section -->
  <section id="certificate" class="certificate-section py-5">
    <div class="container">
      <div class="row gy-5">
        
        <!-- Certificate Card -->
        <div class="col-lg-7">
          <span class="section-label">Accreditation</span>
          <h2 class="section-title">Certificate of Completion</h2>
          <p class="section-copy mb-4">
            Official certificate awarded upon completing intensive Web Application Development with Node.js.
          </p>

          <div class="certificate-card p-4 p-md-5">
            <div class="d-flex justify-content-between align-items-start mb-4">
              <div class="cert-seal">
                <i class="bi bi-patch-check-fill"></i>
              </div>
              <span class="badge bg-warning bg-opacity-25 text-warning border border-warning border-opacity-50 px-3 py-2 rounded-pill">
                Verified Credential
              </span>
            </div>

            <div class="row g-4 align-items-center mb-4">
              <div class="col-md-7">
                <div class="text-cyan small fw-bold text-uppercase letter-spacing-1 mb-1">
                  ANT Technology Training Center
                </div>
                <h3 class="text-white fs-3 fw-bold mb-2">Web Application Development with Node.js</h3>
                <p class="text-gray-300 small mb-3">
                  This certifies that <strong>VONG VATHANA</strong> (វង្ស វឌ្ឍនា) has successfully completed the training course sponsored by the Ministry of Post and Telecommunications and CBRD Fund.
                </p>

                <div class="text-gray-300 small mb-2">
                  <div><strong>Training Period:</strong> 16 June 2025 – 03 July 2026</div>
                  <div><strong>Issued Date:</strong> 25 July 2026</div>
                  <div><strong>Director:</strong> Mr. OENG CHENDA</div>
                </div>
              </div>

              <!-- Certificate Picture Preview Thumbnail -->
              <div class="col-md-5">
                <div class="cert-preview-wrapper" @click="openCertModal" title="Click to view full certificate">
                  <img src="../assets/img/certificate.png" alt="ANT Certificate - Vong Vathana" class="cert-preview-img" />
                  <div class="cert-preview-overlay">
                    <i class="bi bi-zoom-in text-white fs-3 mb-1"></i>
                    <span class="text-white small fw-bold">Click to Expand</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex flex-wrap gap-3 pt-3 border-top border-white border-opacity-10">
              <button class="btn btn-primary-glow rounded-pill px-4" @click="openCertModal">
                <i class="bi bi-eye-fill me-2"></i> View Full Certificate
              </button>
              <a href="/Vong_Vathana_CV.pdf" download="Vong_Vathana_CV.pdf" class="btn btn-outline-glow rounded-pill px-4">
                <i class="bi bi-file-earmark-pdf-fill me-2"></i> Download CV PDF
              </a>
            </div>
          </div>
        </div>

        <!-- References Card -->
        <div class="col-lg-5">
          <span class="section-label">Verification</span>
          <h2 class="section-title">References</h2>
          <p class="section-copy mb-4">
            Professional &amp; academic reference contact from ANT Technology Training Center.
          </p>

          <div class="reference-card">
            <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
              <div class="d-flex align-items-center gap-3">
                <div class="contact-icon-box">
                  <i class="bi bi-buildings-fill"></i>
                </div>
                <div>
                  <h4 class="text-white fs-5 fw-bold mb-0">ANT Technology</h4>
                  <p class="text-cyan small mb-0">Training Center &amp; Academic Supervisor</p>
                </div>
              </div>
              <a href="https://www.facebook.com/ant.com.kh" target="_blank" class="btn btn-outline-glow btn-sm rounded-pill px-3 py-1">
                <i class="bi bi-facebook me-1"></i> Page
              </a>
            </div>

            <div class="d-flex flex-column gap-3 mb-4">
              <!-- Facebook Page -->
              <div class="d-flex align-items-center gap-3">
                <i class="bi bi-facebook text-cyan fs-5"></i>
                <a href="https://www.facebook.com/ant.com.kh" target="_blank" class="text-gray-300 text-decoration-none small hover-cyan">
                  facebook.com/ant.com.kh
                </a>
              </div>
              <!-- Telegram -->
              <div class="d-flex align-items-center gap-3">
                <i class="bi bi-telegram text-cyan fs-5"></i>
                <a href="https://t.me/anttechnology" target="_blank" class="text-gray-300 text-decoration-none small hover-cyan">
                  @anttechnology
                </a>
              </div>
              <!-- Email -->
              <div class="d-flex align-items-center gap-3">
                <i class="bi bi-envelope-fill text-cyan fs-5"></i>
                <a href="mailto:anttraining2023@gmail.com" class="text-gray-300 text-decoration-none small hover-cyan">
                  anttraining2023@gmail.com
                </a>
              </div>
              <!-- Phone -->
              <div class="d-flex align-items-center gap-3">
                <i class="bi bi-telephone-fill text-cyan fs-5"></i>
                <a href="tel:016666653" class="text-gray-300 text-decoration-none small hover-cyan">
                  016 666 653
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Contact & Get In Touch Section -->
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-8">
          <span class="section-label">Connect</span>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-copy mb-0">
            Have a project idea, job inquiry, or want to discuss collaboration? Drop me a message or connect through my socials!
          </p>
        </div>
      </div>

      <div class="row g-4 justify-content-center">
        <!-- Email -->
        <div class="col-md-6 col-lg-3">
          <a href="mailto:vong.vathana.2006@gmail.com" class="text-decoration-none">
            <div class="contact-info-card glass-card p-4 rounded-4 text-center h-100 flex-column align-items-center mb-0">
              <div class="contact-icon-box mb-3">
                <i class="bi bi-envelope-at-fill"></i>
              </div>
              <h4 class="fs-6 mb-1 text-white fw-bold">Email Address</h4>
              <p class="text-cyan small mb-0 text-break">vong.vathana.2006@gmail.com</p>
            </div>
          </a>
        </div>

        <!-- Telegram -->
        <div class="col-md-6 col-lg-3">
          <a href="https://t.me/Vong_Vathana" target="_blank" class="text-decoration-none">
            <div class="contact-info-card glass-card p-4 rounded-4 text-center h-100 flex-column align-items-center mb-0">
              <div class="contact-icon-box mb-3">
                <i class="bi bi-telegram"></i>
              </div>
              <h4 class="fs-6 mb-1 text-white fw-bold">Telegram</h4>
              <p class="text-cyan small mb-0">@Vong_Vathana</p>
            </div>
          </a>
        </div>

        <!-- Phone -->
        <div class="col-md-6 col-lg-3">
          <a href="tel:+855962745657" class="text-decoration-none">
            <div class="contact-info-card glass-card p-4 rounded-4 text-center h-100 flex-column align-items-center mb-0">
              <div class="contact-icon-box mb-3">
                <i class="bi bi-telephone-fill"></i>
              </div>
              <h4 class="fs-6 mb-1 text-white fw-bold">Phone Number</h4>
              <p class="text-cyan small mb-0">+855 96 274 56 57</p>
            </div>
          </a>
        </div>

        <!-- Location -->
        <div class="col-md-6 col-lg-3">
          <div class="contact-info-card glass-card p-4 rounded-4 text-center h-100 flex-column align-items-center mb-0">
            <div class="contact-icon-box mb-3">
              <i class="bi bi-geo-alt-fill"></i>
            </div>
            <h4 class="fs-6 mb-1 text-white fw-bold">Location</h4>
            <p class="text-gray-300 small mb-0">Phnom Penh, Cambodia</p>
          </div>
        </div>
      </div>

      <!-- Social handles -->
      <div class="text-center mt-5">
        <h4 class="fs-6 mb-3 text-white fw-bold">Follow &amp; Message</h4>
        <div class="d-flex gap-3 justify-content-center">
          <a href="https://github.com/Asycn2006" target="_blank" class="social-circle-btn" aria-label="GitHub">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://t.me/Vong_Vathana" target="_blank" class="social-circle-btn" aria-label="Telegram">
            <i class="bi bi-telegram"></i>
          </a>
          <a href="mailto:vong.vathana.2006@gmail.com" class="social-circle-btn" aria-label="Email">
            <i class="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Certificate Viewer Modal Overlay -->
  <div class="modal-overlay d-flex align-items-center justify-content-center" v-if="isCertModalOpen" @click.self="closeCertModal">
    <div class="modal-content-custom glass-card p-3 p-md-4 rounded-4 shadow-lg animate-fade-in text-white" style="max-width: 800px; width: 95%;">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="modal-title fw-bold m-0 text-glow">
          <i class="bi bi-award-fill text-warning me-2"></i> Official Training Certificate
        </h5>
        <button type="button" class="btn-close btn-close-white" @click="closeCertModal" aria-label="Close"></button>
      </div>

      <div class="mb-3 rounded-3 overflow-hidden border border-warning border-opacity-25 shadow-lg bg-black text-center">
        <img src="../assets/img/certificate.png" alt="ANT Certificate of Completion - Vong Vathana" class="img-fluid w-100" />
      </div>

      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 text-start p-3 rounded-3 mb-3" style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08);">
        <div>
          <div class="text-white fw-bold small">Web Application Development with Node.js</div>
          <div class="text-gray-300 extra-small">ANT Technology Training Center • Issued: 25 July 2026</div>
        </div>
        <span class="badge bg-warning bg-opacity-25 text-warning border border-warning border-opacity-50 px-2 py-1 small">
          <i class="bi bi-patch-check-fill me-1"></i> Verified Credential
        </span>
      </div>

      <div class="d-flex justify-content-center gap-3">
        <a href="/Vong_Vathana_CV.pdf" download="Vong_Vathana_CV.pdf" class="btn btn-primary-glow rounded-pill px-4">
          <i class="bi bi-file-earmark-pdf-fill me-2"></i> Download CV PDF
        </a>
        <button type="button" class="btn btn-outline-glow rounded-pill px-4" @click="closeCertModal">
          Close
        </button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer-section">
    <div class="container text-center">
      <div class="row align-items-center justify-content-between flex-column flex-md-row gy-3">
        <div class="col-auto">
          <p class="m-0 text-gray-300 small">
            &copy; 2026 Vong Vathana-Portfolio
          </p>
        </div>
        <div class="col-auto">
          <div class="d-flex gap-3 justify-content-center flex-wrap">
            <a href="#about" class="text-decoration-none text-gray-300 small hover-cyan">About</a>
            <span class="text-muted">|</span>
            <a href="#education" class="text-decoration-none text-gray-300 small hover-cyan">Education</a>
            <span class="text-muted">|</span>
            <a href="#experience" class="text-decoration-none text-gray-300 small hover-cyan">Experience</a>
            <span class="text-muted">|</span>
            <a href="#skills" class="text-decoration-none text-gray-300 small hover-cyan">Skills</a>
            <span class="text-muted">|</span>
            <a href="#projects" class="text-decoration-none text-gray-300 small hover-cyan">Projects</a>
            <span class="text-muted">|</span>
            <a href="#certificate" class="text-decoration-none text-gray-300 small hover-cyan">Certificate</a>
            <span class="text-muted">|</span>
            <a href="#contact" class="text-decoration-none text-gray-300 small hover-cyan">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from "../Layouts/header.vue";

// Modal state
const isCertModalOpen = ref(false);

const openCertModal = () => {
  isCertModalOpen.value = true;
};

const closeCertModal = () => {
  isCertModalOpen.value = false;
};

// Default Projects (Accurately reflecting CV projects & backend systems)
const defaultProjects = [
  {
    id: 1,
    title: 'Future Tech',
    project_type: 'Web Design',
    description: 'Modern, cutting-edge technology showcase web interface designed with clean aesthetics, responsive layout, and interactive components.',
    technologies: 'Web Design, UI/UX, HTML5, CSS3, JavaScript, Vercel',
    live_demo_url: 'https://future-tech-pro.vercel.app/',
    github_url: 'https://github.com/Asycn2006'
  },
  {
    id: 2,
    title: 'Phsar Yerng Ecommerce',
    project_type: 'UX-UI, Frontend',
    description: 'Complete e-commerce platform with design system in Figma, translated into responsive Vue & Bootstrap interfaces with dynamic catalog.',
    technologies: 'Figma, HTML5, CSS3, Bootstrap 5, Vue.js, JavaScript',
    live_demo_url: 'https://vue-e-commerce-ant.vercel.app/',
    github_url: 'https://github.com/Asycn2006'
  },
  {
    id: 3,
    title: 'ANT Forum Community',
    project_type: 'UX-UI, Frontend and Hosting Server',
    description: 'Designed UI/UX component architecture, integrated RESTful APIs, global state with Pinia, and deployed on Contabo VPS via aaPanel and PM2.',
    technologies: 'Vue.js, Pinia, Node.js, Express, Contabo VPS, aaPanel, PM2, Figma',
    live_demo_url: 'https://frontend-ant-forum.vtn.work.gd/',
    github_url: 'https://github.com/Asycn2006'
  }
];

const projects = ref<any[]>(defaultProjects);

// Split technologies list string
const splitTech = (techStr: string) => {
  if (!techStr) return [];
  return techStr.split(',').map((s: string) => s.trim()).filter(Boolean);
};

// Skills Data Structure matching CV exactly
const skills = [
  {
    category: 'Backend Development',
    description: 'APIs, MVC structure, authentication, and servers.',
    level: 'Core',
    items: [
      { name: 'Node.js & Express.js', level: '92%' },
      { name: 'RESTful API Development', level: '90%' },
      { name: 'Authentication (JWT)', level: '88%' },
      { name: 'API Integration & MVC', level: '86%' }
    ]
  },
  {
    category: 'Frontend Development',
    description: 'Component architecture, reactive stores, and UI.',
    level: 'Advanced',
    items: [
      { name: 'Vue.js & Pinia', level: '90%' },
      { name: 'HTML5, CSS3 & Bootstrap', level: '95%' },
      { name: 'Responsive Web Design', level: '92%' },
      { name: 'API Consumption (Axios / Fetch)', level: '88%' }
    ]
  },
  {
    category: 'Programming Languages',
    description: 'Core syntax, OOP concepts, and data queries.',
    level: 'Strong',
    items: [
      { name: 'JavaScript (ES6+)', level: '92%' },
      { name: 'SQL (Database Management)', level: '85%' },
      { name: 'C++ (OOP & Algorithms)', level: '80%' }
    ]
  },
  {
    category: 'DevOps, Tools & UX/UI',
    description: 'Deployment, version control, and design tools.',
    level: 'Proficient',
    items: [
      { name: 'Git & GitHub', level: '92%' },
      { name: 'Contabo VPS & aaPanel / PM2', level: '85%' },
      { name: 'Postman (API Testing)', level: '88%' },
      { name: 'Figma (UI/UX Design)', level: '84%' }
    ]
  }
];

</script>

<style scoped>
/* Page Layout Sections default */
section {
  padding: 90px 0;
  scroll-margin-top: 80px;
}

/* About / Hero Section Styles */
.hero-section {
  padding: 130px 0 90px 0;
  background: radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 10% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
}

.hero-title {
  font-size: 3.4rem;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.6rem;
  color: var(--accent-cyan);
  font-weight: 600;
}

.hero-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-gray-300);
  max-width: 650px;
}

.text-cyan {
  color: var(--accent-cyan);
}

.text-glow {
  text-shadow: 0 0 20px rgba(6, 182, 212, 0.35);
}

.extra-small {
  font-size: 0.75rem;
}

.education-section {
  background: linear-gradient(180deg, var(--bg-dark-900) 0%, #0c1425 100%);
}

.experience-section {
  background: linear-gradient(180deg, #0c1425 0%, #121b2f 100%);
}

.skills-section {
  background: linear-gradient(180deg, #121b2f 0%, var(--bg-dark-900) 100%);
}

.interests-section {
  background: var(--bg-dark-900);
}

.certificate-section {
  background: linear-gradient(180deg, var(--bg-dark-900) 0%, #0d1527 100%);
}

.contact-section {
  background: linear-gradient(180deg, #0d1527 0%, var(--bg-dark-900) 100%);
}

/* Skills progress tweaks */
.skills-intro {
  border-color: var(--glass-border);
}

.bg-info-custom {
  background-color: rgba(6, 182, 212, 0.12) !important;
  color: var(--accent-cyan) !important;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.45rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

.skill-name {
  font-weight: 600;
  color: var(--text-white);
  font-size: 0.95rem;
}

.skill-progress {
  height: 8px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  overflow: hidden;
}

.bg-gradient-cyan {
  background: linear-gradient(90deg, var(--accent-cyan) 0%, var(--accent-blue) 100%);
  border-radius: 999px;
}

/* Projects overrides */
.projects-section {
  background-color: #f8fafc;
  padding: 90px 0;
}

.text-dark-override {
  background: linear-gradient(135deg, #0f172a 30%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-dark-copy {
  color: #475569;
}

.project-card-custom {
  background: #0f172a;
  border: 1px solid rgba(15, 23, 42, 0.08);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card-custom:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(7, 11, 19, 0.25);
  border-color: rgba(6, 182, 212, 0.3);
}

.project-banner-custom {
  height: 180px;
  display: flex;
  align-items: flex-end;
  padding: 1.25rem;
  background-size: cover;
  background-position: center;
  position: relative;
}

.banner-0 { background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); }
.banner-1 { background: linear-gradient(135deg, #0f172a 0%, #064e3b 100%); }
.banner-2 { background: linear-gradient(135deg, #0f172a 0%, #1c1917 100%); }
.banner-3 { background: linear-gradient(135deg, #0f172a 0%, #311042 100%); }

.project-banner-custom::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.project-type-badge {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--text-white);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 99px;
  padding: 0.45rem 0.85rem;
  z-index: 2;
}

.project-body-custom {
  flex-grow: 1;
}

.project-title-text {
  font-size: 1.35rem;
  font-weight: 700;
}

.project-desc-text {
  line-height: 1.7;
}

.tech-tag-badge {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-gray-100);
  font-size: 0.72rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 0.35rem 0.7rem;
}

.project-link-custom {
  color: var(--accent-cyan);
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: transform 0.2s ease, color 0.2s ease;
}

.project-link-custom:hover {
  color: var(--text-white);
}

.project-link-custom:hover i {
  transform: translateX(3px);
}

/* Contact Section & Form Styling */
.contact-form-wrapper {
  border-color: var(--glass-border);
}

.success-icon-wrapper {
  animation: pulse-success 2s infinite;
}

.hover-cyan:hover {
  color: var(--accent-cyan) !important;
}

@keyframes pulse-success {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.85; }
  100% { transform: scale(1); opacity: 1; }
}

@media (max-width: 991.98px) {
  .hero-section {
    padding: 110px 0 50px 0;
    text-align: center;
  }
  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-actions {
    justify-content: center;
  }
}

/* Modal Overlay and Content Animation */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(7, 11, 19, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 99999;
  padding: 1.25rem;
}

.modal-content-custom {
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(6, 182, 212, 0.35);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
}

.animate-fade-in {
  animation: modal-fade-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modal-fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>