# License Pricing
We offer various types of licenses; please choose the appropriate license based on your specific requirements. All our subscriptions are for **one year (366 days)**.

Before purchasing, please carefully read our **Terms of Service (ToS)**.

::: warning
**By purchasing, you acknowledge and agree to our Terms of Service and Privacy Policy.**
:::

## Pricing
<script setup>
const pricingPlans = [
  {
    name: 'Professional',
    price: '50',
    period: 'year',
    description: 'Suitable for small PVP servers',
    features: [
      { text: 'Complete basic detection', included: true },
      { text: 'ATN Plan', included: true },
      { text: 'Basic technical support', included: true },
      { text: 'One server instance', included: true },
      { text: 'Updates guaranteed during subscription', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: '100',
    period: 'year',
    description: 'Suitable for network minigame servers',
    popular: true,
    features: [
      { text: 'Complete basic detection', included: true },
      { text: 'ATN Plan', included: true },
      { text: 'Basic technical support', included: true },
      { text: 'Updates guaranteed during subscription', included: true },
      { text: 'Basic technical support', included: true },
      { text: '✨ One VPS instance', included: true },
      { text: '✨ Heuristic combat checks', included: true },
      { text: '✨ Remote technical support', included: true },
    ],
  }
]
</script>

<PricingCard :plans="pricingPlans" />

## Difference Between Server Instance and VPS Instance
### Server Instance
A server instance refers to a single Nukkit server running on a specified port (e.g., 19132). The Professional license is valid for running a single Nukkit server instance.

### VPS Instance
A VPS instance refers to multiple Nukkit servers running on the same Virtual Private Server (VPS). The Enterprise license covers all Nukkit server instances running on a single VPS.