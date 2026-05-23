<template>
  <Header />

  <!-- Hero / About Me Section -->
  <section id="about" class="hero-section">
    <div class="container">
      <div class="row align-items-center gy-5">
        <!-- Hero Copy -->
        <div class="col-lg-7 order-2 order-lg-1">
          <div class="hero-content">
            <span class="section-label">Developer Profile</span>
            <h1 class="hero-title mb-4">
              Hi, I'm <span class="text-cyan text-glow">Vong Vathana</span>
            </h1>
            <h2 class="hero-subtitle mb-4">
              Backend Developer in Training
            </h2>
            <p class="hero-desc mb-5">
              I study at the Royal University of Phnom Penh (RUPP). I am passionate about building scalable, secure backend systems, database logic, and high-performance server integrations. I love continuous learning and translating complex logic into seamless experiences.
            </p>
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

  <!-- Technical Skills Section -->
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="row gy-5 align-items-stretch">
        <div class="col-lg-4">
          <div class="skills-intro rounded-4 p-4 h-100 glass-card">
            <span class="section-label">Expertise</span>
            <h2 class="section-title">Technical Arsenal</h2>
            <p class="section-copy mb-4">
              Continuously evolving my stack to build efficient, scalable backend architectures with polished, fast, and accessible user interfaces.
            </p>
            <div class="skill-tag"><i class="bi bi-cpu-fill text-cyan"></i> Skill Distribution</div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="row g-4">
            <div v-for="group in skills" :key="group.category" class="col-md-6">
              <div class="skill-card h-100 p-4 rounded-4 glass-card">
                <div class="card-header d-flex justify-content-between align-items-start border-0 bg-transparent p-0 mb-4">
                  <div>
                    <h3 class="card-title mb-1 text-white">{{ group.category }}</h3>
                    <p class="card-subtitle mb-0 text-gray-300">{{ group.description }}</p>
                  </div>
                  <span class="badge bg-info-custom">{{ group.level }}</span>
                </div>

                <ul class="list-unstyled mb-0">
                  <li v-for="skill in group.items" :key="skill.name" class="mb-4">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <span class="skill-name">{{ skill.name }}</span>
                      <span class="skill-value text-cyan font-mono">{{ skill.level }}</span>
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
      </div>
    </div>
  </section>

  <!-- Services Section (NEW) -->
  <section id="services" class="services-section">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-8">
          <span class="section-label">What I Offer</span>
          <h2 class="section-title">Professional Services</h2>
          <p class="section-copy">
            Providing high-quality development solutions centered around system reliability, performant databases, and modular architecture.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <div v-for="service in services" :key="service.title" class="col-md-6 col-lg-3">
          <div class="service-card glass-card text-center h-100">
            <div class="service-icon-wrapper mx-auto">
              <i :class="service.icon"></i>
            </div>
            <h3 class="text-white mb-3 fs-5 fw-bold">{{ service.title }}</h3>
            <p class="text-gray-300 small mb-0">{{ service.description }}</p>
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
          <span class="section-label">My Works</span>
          <h2 class="section-title text-dark-override">Featured Projects</h2>
          <p class="section-copy text-dark-copy">
            Selected applications focused on backend integrations, API efficiency, and clean UI engineering.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <div v-for="(project, index) in projects" :key="project.id || project.title" class="col-md-6">
          <div class="project-card-custom h-100 rounded-4 overflow-hidden shadow-sm">
            <div class="project-banner-custom" :class="'banner-' + (index % 4)">
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
                  <!-- GitHub source URL -->
                  <a v-if="project.github_url && project.github_url !== '#'" :href="project.github_url" target="_blank" class="project-link-custom text-decoration-none d-inline-flex align-items-center gap-1">
                    Source Code <i class="bi bi-github fs-6 align-middle"></i>
                  </a>
                  <!-- Fallback link if both are missing -->
                  <span v-if="(!project.live_demo_url || project.live_demo_url === '#') && (!project.github_url || project.github_url === '#')" class="text-muted small">
                    Details coming soon <i class="bi bi-arrow-right-short fs-5 align-middle"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact & Get In Touch Section (NEW) -->
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="row gy-5">
        <!-- Contact Information Info -->
        <div class="col-lg-5">
          <span class="section-label">Connect</span>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-copy mb-5">
            Have a project idea, job inquiry, or want to discuss collaboration? Drop me a message or connect through my socials!
          </p>

          <div class="contact-details">
            <!-- Email -->
            <div class="contact-info-card">
              <div class="contact-icon-box">
                <i class="bi bi-envelope-at-fill"></i>
              </div>
              <div>
                <h4 class="fs-6 mb-1 text-white fw-bold">Email Address</h4>
                <a href="mailto:vong.vathana.2006@gmail.com" class="text-decoration-none text-cyan">vong.vathana.2006@gmail.com</a>
              </div>
            </div>

            <!-- Location -->
            <div class="contact-info-card">
              <div class="contact-icon-box">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h4 class="fs-6 mb-1 text-white fw-bold">Location</h4>
                <p class="text-gray-300 m-0 small">Phnom Penh, Cambodia</p>
              </div>
            </div>

            <!-- RUPP student status -->
            <div class="contact-info-card">
              <div class="contact-icon-box">
                <i class="bi bi-mortarboard-fill"></i>
              </div>
              <div>
                <h4 class="fs-6 mb-1 text-white fw-bold">Education</h4>
                <p class="text-gray-300 m-0 small">Royal University of Phnom Penh (RUPP)</p>
              </div>
            </div>
          </div>

          <!-- Social handles -->
          <div class="mt-5">
            <h4 class="fs-6 mb-3 text-white fw-bold">Follow & Message</h4>
            <div class="d-flex gap-3">
              <a href="https://github.com" target="_blank" class="social-circle-btn" aria-label="GitHub">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" class="social-circle-btn" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://t.me/Vong_Vathana" target="_blank" class="social-circle-btn" aria-label="Telegram">
                <i class="bi bi-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form Box -->
        <div class="col-lg-7">
          <div class="contact-form-wrapper glass-card p-4 p-md-5 rounded-4">
            <h3 class="text-white fs-4 fw-bold mb-4">Send a Message</h3>
            
            <form @submit.prevent="handleFormSubmit" v-if="!formSubmitted">
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label-custom">Your Name</label>
                    <input type="text" class="form-control form-control-custom w-100" v-model="form.name" required placeholder="e.g. John Doe">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label-custom">Email Address</label>
                    <input type="email" class="form-control form-control-custom w-100" v-model="form.email" required placeholder="e.g. john@example.com">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label class="form-label-custom">Subject</label>
                    <input type="text" class="form-control form-control-custom w-100" v-model="form.subject" required placeholder="Project discussion, Job inquiry, etc.">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label class="form-label-custom">Message</label>
                    <textarea rows="5" class="form-control form-control-custom w-100" v-model="form.message" required placeholder="Hi Vong, I'd love to chat about..."></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary-glow width-200 rounded-pill mt-2" :disabled="isSubmitting">
                    <span v-if="isSubmitting">Sending...</span>
                    <span v-else>Send Message <i class="bi bi-send-fill ms-2 small"></i></span>
                  </button>
                </div>
              </div>
            </form>

            <!-- Submission Success feedback -->
            <div class="text-center py-5" v-else>
              <div class="success-icon-wrapper mb-4">
                <i class="bi bi-check-circle-fill text-success fs-1"></i>
              </div>
              <h4 class="text-white fw-bold mb-3">Message Sent Successfully!</h4>
              <p class="text-gray-300 small mb-4">
                Thank you, {{ form.name }}. Your message has been received. I will review it and get back to you shortly.
              </p>
              <button class="btn btn-outline-glow rounded-pill px-4" @click="resetForm">
                Send another message
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CV Download Modal -->
  <div class="modal fade" id="cvModal" tabindex="-1" aria-labelledby="cvModalLabel" aria-hidden="true" ref="cvModalRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content glass-card border border-info border-opacity-25 rounded-4 text-white">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title fw-bold" id="cvModalLabel">Curriculum Vitae</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center py-4">
          <div class="cv-icon-wrapper mb-3">
            <i class="bi bi-file-earmark-pdf-fill text-danger fs-1"></i>
          </div>
          <h4 class="fw-bold mb-2">Vong Vathana - CV</h4>
          <p class="text-gray-300 small mb-4">
            The developer curriculum vitae is prepared. Click the link below to view or save the mock CV.
          </p>
          <a href="/Vong_Vathana_CV.pdf" download="Vong_Vathana_CV.pdf" class="btn btn-primary-glow px-5 rounded-pill" @click="closeCVModal">
            <i class="bi bi-cloud-arrow-down-fill"></i> Download PDF
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer-section">
    <div class="container text-center">
      <div class="row align-items-center justify-content-between flex-column flex-md-row gy-3">
        <div class="col-auto">
          <p class="m-0 text-gray-300 small">
            &copy; 2026 Vong Vathana. Built with Vue 3 &amp; Bootstrap.
          </p>
        </div>
        <div class="col-auto">
          <div class="d-flex gap-3 justify-content-center">
            <a href="#about" class="text-decoration-none text-gray-300 small hover-cyan">About</a>
            <span class="text-muted">|</span>
            <a href="#skills" class="text-decoration-none text-gray-300 small hover-cyan">Skills</a>
            <span class="text-muted">|</span>
            <a href="#services" class="text-decoration-none text-gray-300 small hover-cyan">Services</a>
            <span class="text-muted">|</span>
            <a href="#projects" class="text-decoration-none text-gray-300 small hover-cyan">Projects</a>
            <span class="text-muted">|</span>
            <a href="#contact" class="text-decoration-none text-gray-300 small hover-cyan">Contact</a>
            <span class="text-muted">|</span>
            <router-link to="/admin" class="text-decoration-none text-gray-300 small hover-cyan">
              <i class="bi bi-shield-lock-fill"></i> Admin
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from "../Layouts/header.vue";

// Bootstrap Modal reference (requires Bootstrap's bundle loaded globally)
let cvModalInstance: any = null;
const cvModalRef = ref<HTMLElement | null>(null);

// Projects list loading state
const projects = ref<any[]>([]);

const defaultProjects = [
  {
    id: 1,
    title: 'API Service Manager',
    project_type: 'backend',
    description: 'Scalable REST APIs with JWT authentication, request logging, and PostgreSQL persistence.',
    technologies: 'Node.js,Express,PostgreSQL',
    github_url: '#'
  },
  {
    id: 2,
    title: 'Admin Control Panel',
    project_type: 'frontend',
    description: 'Responsive dashboard for order management, analytics visualization, and API status monitoring.',
    technologies: 'Vue,Bootstrap,Vite',
    github_url: '#'
  },
  {
    id: 3,
    title: 'Realtime Sync Engine',
    project_type: 'backend',
    description: 'High-throughput data synchronization powered by Redis caching layers and Docker orchestration.',
    technologies: 'Redis,Docker,AWS',
    github_url: '#'
  },
  {
    id: 4,
    title: 'Portfolio UI Redesign',
    project_type: 'frontend',
    description: 'Modern developer portfolio optimized for loading performance, contrast levels, and responsiveness.',
    technologies: 'Vue,CSS,JavaScript',
    github_url: '#'
  }
];

onMounted(async () => {
  // Access Modal from Bootstrap bundle globally loaded in main.js
  if ((window as any).bootstrap) {
    cvModalInstance = new (window as any).bootstrap.Modal(cvModalRef.value);
  }

  // Fetch projects from the backend API on port 3000 (mounted at root /)
  try {
    const response = await fetch('http://localhost:3000/');
    const result = await response.json();
    if (result.result && result.data && result.data.length > 0) {
      projects.value = result.data;
    } else {
      projects.value = defaultProjects;
    }
  } catch (error) {
    console.warn('Backend database offline. Seeding default projects as local fallback.', error);
    projects.value = defaultProjects;
  }
});

const openCVModal = () => {
  if (cvModalInstance) {
    cvModalInstance.show();
  } else {
    alert("CV Download requested! (PDF file placeholder)");
  }
};

const closeCVModal = () => {
  if (cvModalInstance) {
    cvModalInstance.hide();
  }
};

// Split technologies list string
const splitTech = (techStr: string) => {
  if (!techStr) return [];
  return techStr.split(',').map((s: string) => s.trim()).filter(Boolean);
};

// Skills Data Structure
const skills = [
  {
    category: 'Backend',
    description: 'APIs, databases, and server-side architecture.',
    level: 'Core',
    items: [
      { name: 'Node.js', level: '90%' },
      { name: 'Express', level: '85%' },
      { name: 'PostgreSQL', level: '82%' },
      { name: 'Redis', level: '75%' },
      { name: 'GraphQL', level: '70%' }
    ]
  },
  {
    category: 'Frontend',
    description: 'Responsive interfaces, accessibility, and client logic.',
    level: 'Strong',
    items: [
      { name: 'Vue.js', level: '88%' },
      { name: 'Bootstrap', level: '90%' },
      { name: 'JavaScript', level: '92%' },
      { name: 'HTML/CSS', level: '95%' },
      { name: 'Responsive Design', level: '90%' }
    ]
  },
  {
    category: 'Tools & DevOps',
    description: 'Deployments, version control, and environments.',
    level: 'Trusted',
    items: [
      { name: 'Docker', level: '80%' },
      { name: 'Git & GitHub', level: '92%' },
      { name: 'Vite', level: '88%' },
      { name: 'AWS Services', level: '70%' },
      { name: 'Figma DevMode', level: '72%' }
    ]
  }
];

// Services Data Structure
const services = [
  {
    icon: 'bi bi-database-fill-gear',
    title: 'API Development',
    description: 'Building secure, validated RESTful and GraphQL API layers using Node.js & Express.'
  },
  {
    icon: 'bi bi-hdd-network-fill',
    title: 'Database Architecture',
    description: 'Structuring relational schemas, writing optimal queries, indexing, and migrations in PostgreSQL.'
  },
  {
    icon: 'bi bi-lightning-charge-fill',
    title: 'Caching & Queues',
    description: 'Optimizing application throughput using Redis caching layers and message queuing.'
  },
  {
    icon: 'bi bi-window-fullscreen',
    title: 'Frontend Integration',
    description: 'Connecting backends seamlessly with responsive, componentized Vue 3 client interfaces.'
  }
];

// Contact Form Reactive States & Logic
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});
const isSubmitting = ref(false);
const formSubmitted = ref(false);
// Replace this with your Web3Forms access key (Get one for free at https://web3forms.com)
const web3FormsAccessKey = ref('YOUR_ACCESS_KEY_HERE');

const handleFormSubmit = async () => {
  isSubmitting.value = true;

  // If the user hasn't set up Web3Forms, fall back to mailto:
  if (web3FormsAccessKey.value === 'YOUR_ACCESS_KEY_HERE') {
    const bodyText = `👤 Name: ${form.value.name}\n✉️ Email: ${form.value.email}\n\n💬 Message:\n${form.value.message}`;
    const mailtoUrl = `mailto:vong.vathana.2006@gmail.com?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(bodyText)}`;
    
    setTimeout(() => {
      isSubmitting.value = false;
      formSubmitted.value = true;
      window.location.href = mailtoUrl;
    }, 800);
    return;
  }

  // Web3Forms API Background Submission
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: web3FormsAccessKey.value,
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
        from_name: 'Portfolio Contact Form'
      })
    });
    
    if (response.ok) {
      formSubmitted.value = true;
    } else {
      throw new Error('Web3Forms submission failed');
    }
  } catch (error) {
    console.error(error);
    alert('Failed to send message via background service. Falling back to email client...');
    
    // Fallback to mailto
    const bodyText = `👤 Name: ${form.value.name}\n✉️ Email: ${form.value.email}\n\n💬 Message:\n${form.value.message}`;
    window.location.href = `mailto:vong.vathana.2006@gmail.com?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(bodyText)}`;
    formSubmitted.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  formSubmitted.value = false;
};
</script>

<style scoped>
/* Page Layout Sections default */
section {
  padding: 100px 0;
  scroll-margin-top: 80px;
}

/* About / Hero Section Styles */
.hero-section {
  padding: 140px 0 100px 0; /* Padding offsets fixed header */
  background: radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 10% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
}

.hero-title {
  font-size: 3.8rem;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.8rem;
  color: var(--text-gray-100);
  font-weight: 600;
}

.hero-desc {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-gray-300);
  max-width: 620px;
}

.text-cyan {
  color: var(--accent-cyan);
}

.text-glow {
  text-shadow: 0 0 20px rgba(6, 182, 212, 0.35);
}

/* Skills progress tweaks */
.skills-section {
  background: linear-gradient(180deg, var(--bg-dark-900) 0%, #121b2f 100%);
}

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

/* Projects overrides to look extremely premium */
.projects-section {
  background-color: #f8fafc;
  padding: 100px 0;
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
  height: 200px;
  display: flex;
  align-items: flex-end;
  padding: 1.25rem;
  background-size: cover;
  background-position: center;
  position: relative;
}

/* Set dynamic custom project banner colors */
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
.contact-section {
  background: linear-gradient(180deg, #121b2f 0%, var(--bg-dark-900) 100%);
  padding: 100px 0;
}

.contact-form-wrapper {
  border-color: var(--glass-border);
}

.success-icon-wrapper {
  animation: pulse-success 2s infinite;
}

.hover-cyan:hover {
  color: var(--accent-cyan) !important;
}

/* Animations */
@keyframes pulse-success {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.85; }
  100% { transform: scale(1); opacity: 1; }
}

/* Responsive tweaks */
@media (max-width: 991.98px) {
  .hero-section {
    padding: 120px 0 60px 0;
    text-align: center;
  }
  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-actions {
    justify-content: center;
  }
  .projects-section, .skills-section, .services-section, .contact-section {
    padding: 60px 0;
  }
  .hero-title {
    font-size: 2.8rem;
  }
  .hero-subtitle {
    font-size: 1.4rem;
  }
}
</style>