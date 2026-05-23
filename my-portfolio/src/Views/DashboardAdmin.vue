<template>
  <div class="admin-dashboard-container py-5 min-vh-100">
    <div class="container py-4">
      
      <!-- Top header / Navigation -->
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-3">
        <div>
          <router-link to="/" class="back-link mb-2 d-inline-block text-decoration-none">
            <i class="bi bi-arrow-left"></i> Back to Portfolio
          </router-link>
          <h1 class="dashboard-title text-glow">Admin <span class="text-cyan">Dashboard</span></h1>
          <p class="text-gray-300 m-0 small">Manage your portfolio projects directly via the backend API.</p>
        </div>
        <div>
          <button class="btn btn-primary-glow px-4 py-2 rounded-pill" @click="openCreateModal">
            <i class="bi bi-plus-circle-fill me-2"></i> Add New Project
          </button>
        </div>
      </div>

      <!-- Error alert -->
      <div v-if="errorMessage" class="alert alert-danger glass-card border border-danger border-opacity-25 rounded-3 mb-4 d-flex justify-content-between align-items-center">
        <span><i class="bi bi-exclamation-triangle-fill me-2"></i> {{ errorMessage }}</span>
        <button class="btn-close btn-close-white" @click="errorMessage = ''"></button>
      </div>

      <!-- Success toast/banner -->
      <div v-if="successMessage" class="alert alert-success glass-card border border-success border-opacity-25 rounded-3 mb-4 d-flex justify-content-between align-items-center">
        <span><i class="bi bi-check-circle-fill me-2"></i> {{ successMessage }}</span>
        <button class="btn-close btn-close-white" @click="successMessage = ''"></button>
      </div>

      <!-- Stats Grid -->
      <div class="row g-4 mb-5">
        <div class="col-6 col-lg-3">
          <div class="stat-card glass-card p-4 rounded-4 text-center">
            <div class="stat-icon-wrapper text-cyan mb-2">
              <i class="bi bi-folder-fill"></i>
            </div>
            <h3 class="stat-value text-white fw-bold m-0">{{ projects.length }}</h3>
            <p class="stat-label text-gray-300 small m-0">Total Projects</p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="stat-card glass-card p-4 rounded-4 text-center">
            <div class="stat-icon-wrapper text-indigo mb-2">
              <i class="bi bi-database-fill"></i>
            </div>
            <h3 class="stat-value text-white fw-bold m-0">{{ getCount('backend') }}</h3>
            <p class="stat-label text-gray-300 small m-0">Backend</p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="stat-card glass-card p-4 rounded-4 text-center">
            <div class="stat-icon-wrapper text-success-custom mb-2">
              <i class="bi bi-window-fullscreen"></i>
            </div>
            <h3 class="stat-value text-white fw-bold m-0">{{ getCount('frontend') }}</h3>
            <p class="stat-label text-gray-300 small m-0">Frontend</p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="stat-card glass-card p-4 rounded-4 text-center">
            <div class="stat-icon-wrapper text-warning mb-2">
              <i class="bi bi-star-fill"></i>
            </div>
            <h3 class="stat-value text-white fw-bold m-0">{{ getFeaturedCount() }}</h3>
            <p class="stat-label text-gray-300 small m-0">Featured</p>
          </div>
        </div>
      </div>

      <!-- Search & Filters -->
      <div class="d-flex flex-column flex-md-row gap-3 mb-4">
        <div class="flex-grow-1">
          <div class="search-input-wrapper position-relative">
            <i class="bi bi-search search-icon"></i>
            <input type="text" class="form-control form-control-custom w-100 ps-5" v-model="searchQuery" placeholder="Search by project title or tech stack...">
          </div>
        </div>
        <div class="width-200">
          <select class="form-control form-control-custom w-100" v-model="filterType">
            <option value="all">All Types</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
      </div>

      <!-- Projects Table -->
      <div class="glass-card rounded-4 overflow-hidden border-0">
        <div class="table-responsive">
          <table class="table table-dark-custom align-middle mb-0">
            <thead>
              <tr>
                <th scope="col" class="ps-4">Project Title</th>
                <th scope="col">Type</th>
                <th scope="col">Technologies</th>
                <th scope="col" class="text-center">Featured</th>
                <th scope="col" class="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="isLoading">
                <td colspan="5" class="text-center py-5 text-gray-300">
                  <div class="spinner-border text-info spinner-border-sm me-2" role="status"></div>
                  Loading projects from database...
                </td>
              </tr>
              <tr v-else-if="filteredProjects.length === 0">
                <td colspan="5" class="text-center py-5 text-gray-300">
                  <i class="bi bi-folder-x fs-2 d-block mb-2"></i> No projects found. Add one to get started!
                </td>
              </tr>
              <tr v-else v-for="project in filteredProjects" :key="project.id">
                <!-- Title & Slug -->
                <td class="ps-4 py-3">
                  <div class="fw-bold text-white fs-6">{{ project.title }}</div>
                  <div class="text-cyan font-mono extra-small">/{{ project.slug }}</div>
                </td>
                <!-- Type -->
                <td>
                  <span class="badge text-uppercase type-badge text-glow" :class="project.project_type">
                    {{ project.project_type }}
                  </span>
                </td>
                <!-- Technologies -->
                <td>
                  <div class="d-flex flex-wrap gap-1">
                    <span v-for="tech in splitTech(project.technologies)" :key="tech" class="badge tech-badge-admin">
                      {{ tech }}
                    </span>
                  </div>
                </td>
                <!-- Featured -->
                <td class="text-center">
                  <span v-if="project.featured" class="text-warning fs-5"><i class="bi bi-star-fill"></i></span>
                  <span v-else class="text-gray-400 opacity-50"><i class="bi bi-star"></i></span>
                </td>
                <!-- Actions -->
                <td class="text-end pe-4">
                  <div class="d-flex justify-content-end gap-2">
                    <button class="btn btn-outline-glow btn-sm rounded-circle p-2 d-inline-flex" @click="openEditModal(project)" title="Edit Project">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm rounded-circle p-2 d-inline-flex" @click="confirmDelete(project)" title="Delete Project">
                      <i class="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <!-- Custom Glassmorphic CRUD Modal Overlay (v-if based) -->
    <div class="modal-overlay d-flex align-items-center justify-content-center" v-if="isModalOpen" @click.self="closeModal">
      <div class="modal-content-custom glass-card p-4 p-md-5 rounded-4 shadow-lg animate-fade-in text-white">
        
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-bold text-glow m-0">{{ modalTitle }}</h3>
          <button class="btn-close btn-close-white" @click="closeModal"></button>
        </div>

        <form @submit.prevent="saveProject">
          <div class="row g-3">
            <!-- Title -->
            <div class="col-12">
              <label class="form-label-custom">Project Title *</label>
              <input type="text" class="form-control form-control-custom w-100" v-model="form.title" required placeholder="e.g. Realtime Analytics Sync">
            </div>

            <!-- Slug (Optional) -->
            <div class="col-md-6">
              <label class="form-label-custom">Slug (Optional URL ID)</label>
              <input type="text" class="form-control form-control-custom w-100" v-model="form.slug" placeholder="e.g. realtime-analytics-sync">
            </div>

            <!-- Type -->
            <div class="col-md-6">
              <label class="form-label-custom">Project Type *</label>
              <select class="form-control form-control-custom w-100" v-model="form.project_type" required>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>

            <!-- Technologies -->
            <div class="col-12">
              <label class="form-label-custom">Technologies * (Comma-separated)</label>
              <input type="text" class="form-control form-control-custom w-100" v-model="form.technologies" required placeholder="e.g. Node.js,Express,PostgreSQL,Redis">
            </div>

            <!-- Description -->
            <div class="col-12">
              <label class="form-label-custom">Description</label>
              <textarea class="form-control form-control-custom w-100" rows="3" v-model="form.description" placeholder="Write a short summary of what this project accomplishes..."></textarea>
            </div>

            <!-- Github URL -->
            <div class="col-md-6">
              <label class="form-label-custom">GitHub URL</label>
              <input type="url" class="form-control form-control-custom w-100" v-model="form.github_url" placeholder="https://github.com/vathana/...">
            </div>

            <!-- Live Demo URL -->
            <div class="col-md-6">
              <label class="form-label-custom">Live Demo URL</label>
              <input type="url" class="form-control form-control-custom w-100" v-model="form.live_demo_url" placeholder="https://demo.example.com">
            </div>

            <!-- Status & Featured -->
            <div class="col-md-6">
              <label class="form-label-custom">Status</label>
              <select class="form-control form-control-custom w-100" v-model="form.status">
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            
            <div class="col-md-6 d-flex align-items-center pt-4">
              <div class="form-check form-switch custom-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="featuredSwitch" v-model="form.featured">
                <label class="form-check-label text-gray-300 fs-6 ms-2" for="featuredSwitch">Mark as Featured</label>
              </div>
            </div>

            <!-- Buttons -->
            <div class="col-12 d-flex justify-content-end gap-3 mt-4">
              <button type="button" class="btn btn-outline-glow px-4 rounded-pill" @click="closeModal">Cancel</button>
              <button type="submit" class="btn btn-primary-glow px-4 rounded-pill" :disabled="isSaving">
                <span v-if="isSaving">Saving...</span>
                <span v-else>Save Changes</span>
              </button>
            </div>

          </div>
        </form>

      </div>
    </div>

    <!-- Custom Delete Modal -->
    <div class="modal-overlay d-flex align-items-center justify-content-center" v-if="isDeleteModalOpen" @click.self="isDeleteModalOpen = false">
      <div class="modal-content-custom glass-card p-4 rounded-4 shadow-lg text-white" style="max-width: 450px;">
        <h3 class="fw-bold mb-3 text-glow"><i class="bi bi-trash-fill text-danger me-2"></i> Delete Project</h3>
        <p class="text-gray-300 small mb-4">
          Are you sure you want to delete project <strong class="text-white">"{{ projectToDelete?.title }}"</strong>? This action is permanent and cannot be undone.
        </p>
        <div class="d-flex justify-content-end gap-3">
          <button class="btn btn-outline-glow px-4 rounded-pill" @click="isDeleteModalOpen = false">Cancel</button>
          <button class="btn btn-danger px-4 rounded-pill btn-delete-custom" @click="deleteProject">
            Delete Project
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Project {
  id?: number;
  title: string;
  slug?: string;
  description?: string;
  technologies: string;
  image_url?: string;
  github_url?: string;
  live_demo_url?: string;
  project_type: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  status: 'draft' | 'published';
  featured: boolean;
}

const API_BASE = 'http://localhost:3000';

// Loading & Message states
const projects = ref<Project[]>([]);
const isLoading = ref(false);
const isSaving = ref(false);
const isModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
const modalTitle = ref('Add New Project');
const successMessage = ref('');
const errorMessage = ref('');

// Filters & Search
const searchQuery = ref('');
const filterType = ref('all');

// Form States
const form = ref<Project>({
  title: '',
  slug: '',
  description: '',
  technologies: '',
  image_url: '',
  github_url: '',
  live_demo_url: '',
  project_type: 'frontend',
  status: 'published',
  featured: false
});

const isEditing = ref(false);
const editingId = ref<number | null>(null);
const projectToDelete = ref<Project | null>(null);

// Fetch all projects on mount
const fetchProjects = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const response = await fetch(API_BASE);
    const result = await response.json();
    if (result.result) {
      projects.value = result.data;
    } else {
      throw new Error(result.msg || 'Failed to fetch projects');
    }
  } catch (error: any) {
    console.error(error);
    errorMessage.value = `Backend Connection Failed: Is your Node server running on port 3000? Details: ${error.message}`;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchProjects();
});

// Helper stats counts
const getCount = (type: string) => {
  return projects.value.filter(p => p.project_type === type).length;
};

const getFeaturedCount = () => {
  return projects.value.filter(p => p.featured).length;
};

// Search and Filtered projects list
const filteredProjects = computed(() => {
  return projects.value.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          (p.technologies && p.technologies.toLowerCase().includes(searchQuery.value.toLowerCase()));
    const matchesFilter = filterType.value === 'all' || p.project_type === filterType.value;
    return matchesSearch && matchesFilter;
  });
});

// Utility method for technology split
const splitTech = (techStr: string) => {
  if (!techStr) return [];
  return techStr.split(',').map(s => s.trim()).filter(Boolean);
};

// Modal Operations
const openCreateModal = () => {
  isEditing.value = false;
  editingId.value = null;
  modalTitle.value = 'Add New Project';
  form.value = {
    title: '',
    slug: '',
    description: '',
    technologies: '',
    image_url: '',
    github_url: '',
    live_demo_url: '',
    project_type: 'frontend',
    status: 'published',
    featured: false
  };
  isModalOpen.value = true;
};

const openEditModal = (project: Project) => {
  isEditing.value = true;
  editingId.value = project.id || null;
  modalTitle.value = 'Edit Project';
  // Copy project details
  form.value = {
    title: project.title,
    slug: project.slug || '',
    description: project.description || '',
    technologies: project.technologies || '',
    image_url: project.image_url || '',
    github_url: project.github_url || '',
    live_demo_url: project.live_demo_url || '',
    project_type: project.project_type,
    status: project.status,
    featured: !!project.featured
  };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

// Save Project (Create / Update)
const saveProject = async () => {
  isSaving.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  const payload = {
    ...form.value,
    featured: form.value.featured ? 1 : 0 // mysql expects true/false or 1/0
  };

  try {
    let response;
    if (isEditing.value && editingId.value) {
      response = await fetch(`${API_BASE}/updateProject/${editingId.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } else {
      response = await fetch(`${API_BASE}/createProject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    const result = await response.json();
    if (result.result) {
      successMessage.value = result.msg || 'Action completed successfully!';
      isModalOpen.value = false;
      fetchProjects(); // Reload project table list
    } else {
      throw new Error(result.msg || 'Operation failed');
    }
  } catch (error: any) {
    console.error(error);
    errorMessage.value = `Operation Failed: ${error.message}`;
  } finally {
    isSaving.value = false;
  }
};

// Delete Project
const confirmDelete = (project: Project) => {
  projectToDelete.value = project;
  isDeleteModalOpen.value = true;
};

const deleteProject = async () => {
  if (!projectToDelete.value || !projectToDelete.value.id) return;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await fetch(`${API_BASE}/deleteProject/${projectToDelete.value.id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    if (result.result) {
      successMessage.value = result.msg || 'Project deleted successfully';
      isDeleteModalOpen.value = false;
      fetchProjects();
    } else {
      throw new Error(result.msg || 'Failed to delete project');
    }
  } catch (error: any) {
    console.error(error);
    errorMessage.value = `Delete Failed: ${error.message}`;
  }
};
</script>

<style scoped>
.admin-dashboard-container {
  background: var(--bg-dark-900);
  color: var(--text-white);
}

.dashboard-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-white);
  margin-bottom: 0.25rem;
}

.back-link {
  color: var(--accent-cyan);
  font-weight: 600;
  font-size: 0.9rem;
  transition: transform 0.2s ease;
}

.back-link:hover {
  transform: translateX(-3px);
  color: var(--text-white);
}

/* Statistics cards */
.stat-card {
  border-color: var(--glass-border);
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
}

.stat-icon-wrapper {
  font-size: 2rem;
}

.stat-value {
  font-size: 1.8rem;
  letter-spacing: -0.02em;
}

.stat-label {
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Custom icon colors */
.text-indigo { color: #818cf8; }
.text-success-custom { color: #34d399; }

/* Table styling */
.table-dark-custom {
  background-color: var(--glass-bg);
  --bs-table-bg: transparent;
  color: var(--text-gray-100);
}

.table-dark-custom th {
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid var(--glass-border);
  color: var(--text-white);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 1rem 0.5rem;
}

.table-dark-custom td {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  font-size: 0.95rem;
}

/* Search input elements */
.search-icon {
  position: absolute;
  top: 50%;
  left: 1.25rem;
  transform: translateY(-50%);
  color: var(--text-gray-300);
}

/* Modal overlays styling */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(7, 11, 19, 0.8);
  backdrop-filter: blur(8px);
  z-index: 99999;
}

.modal-content-custom {
  width: 92%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid var(--glass-border);
}

/* Custom button classes */
.btn-outline-danger {
  color: #f87171;
  border-color: #ef4444;
  background-color: transparent;
  transition: var(--transition-smooth);
}

.btn-outline-danger:hover {
  background-color: #ef4444;
  color: white;
  box-shadow: 0 0 12px rgba(239, 68, 68, 0.35);
  transform: translateY(-2px);
}

.btn-delete-custom {
  background-color: #ef4444;
  color: white;
  border: none;
  font-weight: 600;
  transition: var(--transition-smooth);
}

.btn-delete-custom:hover {
  background-color: #dc2626;
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.5);
  transform: translateY(-1px);
}

/* Custom switch form input */
.custom-switch .form-check-input {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: var(--glass-border);
}

.custom-switch .form-check-input:checked {
  background-color: var(--accent-cyan);
  border-color: var(--accent-cyan);
}

/* Badges styling */
.type-badge {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.35rem 0.6rem;
  border-radius: 4px;
}

.type-badge.backend {
  background-color: rgba(129, 140, 248, 0.15) !important;
  color: #818cf8 !important;
  border: 1px solid rgba(129, 140, 248, 0.3);
}

.type-badge.frontend {
  background-color: rgba(52, 211, 153, 0.15) !important;
  color: #34d399 !important;
  border: 1px solid rgba(52, 211, 153, 0.3);
}

.type-badge.fullstack {
  background-color: rgba(6, 182, 212, 0.15) !important;
  color: #06b6d4 !important;
  border: 1px solid rgba(6, 182, 212, 0.3);
}

.type-badge.mobile {
  background-color: rgba(251, 191, 36, 0.15) !important;
  color: #fbbf24 !important;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.tech-badge-admin {
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--text-gray-100);
  font-size: 0.72rem;
  font-weight: 500;
  border-radius: 4px;
}

.extra-small {
  font-size: 0.75rem;
}

/* CSS Keyframe animations */
.animate-fade-in {
  animation: modal-zoom 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modal-zoom {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>
