<template>
  <div class="pricing-container">
    <div 
      v-for="(plan, index) in plans" 
      :key="index"
      class="pricing-card"
      :class="{ 'popular': plan.popular }"
    >
      <div class="pricing-header">
        <span v-if="plan.popular" class="popular-badge">Popular</span>
        <h3 class="plan-name">{{ plan.name }}</h3>
        <div class="price-container">
          <span class="currency">¥</span>
          <span class="price">{{ plan.price }}</span>
          <span class="period">/{{ plan.period }}</span>
        </div>
      </div>
      
      <ul class="features-list">
        <li 
          v-for="(feature, fIndex) in plan.features" 
          :key="fIndex"
          :class="{ 'included': feature.included }"
        >
          <span class="feature-icon">
            {{ feature.included ? '✓' : '×' }}
          </span>
          {{ feature.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  plans: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.pricing-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.pricing-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.25rem;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft-up);
}

.pricing-card.popular {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft-up);
}

.popular-badge {
  position: absolute;
  top: -10px;
  right: 16px;
  background: var(--vp-c-brand);
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.pricing-header {
  text-align: center;
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid var(--vp-c-border);
}

.plan-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--vp-c-text-1);
}

.price-container {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.125rem;
}

.currency {
  font-size: 1rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1;
}

.period {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
}

.feature-icon {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

.included .feature-icon {
  color: var(--vp-c-brand);
}

@media (max-width: 768px) {
  .pricing-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .pricing-card {
    padding: 1rem;
  }
}
</style>