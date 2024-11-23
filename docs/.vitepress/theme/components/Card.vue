<template>
  <div class="custom-card" :class="{ 'has-icon': icon }">
    <div v-if="icon" class="card-icon">{{ icon }}</div>
    <div class="card-content">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <p v-if="description" class="card-description">{{ description }}</p>
      <div v-if="$slots.default" class="card-body">
        <slot></slot>
      </div>
      <div v-if="link" class="card-footer">
        <a :href="link" class="card-link">
          {{ linkText || 'Learn More' }}
          <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
  link: String,
  linkText: String
})
</script>

<style scoped>
.custom-card {
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 16px 20px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  gap: 16px;
  margin: 16px 0;
}

.custom-card:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft-up);
  transform: translateY(-2px);
}

.card-icon {
  font-size: 24px;
  min-width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}

.card-description {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0 0 12px;
  line-height: 1.5;
}

.card-body {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.card-footer {
  margin-top: 12px;
}

.card-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s;
}

.card-link:hover {
  color: var(--vp-c-brand-dark);
}

.arrow {
  margin-left: 4px;
  transition: transform 0.2s;
}

.card-link:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .custom-card {
    flex-direction: column;
    padding: 16px;
  }

  .card-icon {
    margin-bottom: 12px;
  }
}
</style>