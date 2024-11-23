import DefaultTheme from 'vitepress/theme'
import Card from './components/Card.vue'
import PricingCard from './components/PricingCard.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Card', Card)
    app.component('PricingCard', PricingCard)
  }
}