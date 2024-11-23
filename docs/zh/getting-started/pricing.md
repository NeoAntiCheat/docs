# 许可证定价
我们提供各种类型的许可证；请根据您的具体要求选择合适的许可证。我们的所有订阅都是 **一年期（366 天）** 的。

在购买之前，请仔细阅读我们的**服务条款（ToS）**。

::: warning
**购买即表示您已知晓并同意我们的服务条款和隐私协议。**
:::
## 价格
<script setup>
const pricingPlans = [
  {
    name: '专业版',
    price: '50',
    period: '年',
    description: '适合小型 PVP 服务器',
    features: [
      { text: '完整的基础检测', included: true },
      { text: 'ATN 计划', included: true },
      { text: '基本技术支持', included: true },
      { text: '一台服务器实例', included: true },
      { text: '订阅期内的更新保证', included: true },
    ],
  },
  {
    name: '企业版',
    price: '100',
    period: '年',
    description: '适合群组小游戏服务器',
    popular: true,
    features: [
      { text: '完整的基础检测', included: true },
      { text: 'ATN 计划', included: true },
      { text: '基本技术支持', included: true },
      { text: '订阅期内的更新保证', included: true },
      { text: '基本技术支持', included: true },
      { text: '✨ 一台VPS实例', included: true },
      { text: '✨ 启发式的战斗检查', included: true },
      { text: '✨ 远程技术支持', included: true },
    ],
  }
]
</script>

<PricingCard :plans="pricingPlans" />

## 服务器实例与 VPS 实例的区别
### 服务器实例
服务器实例是指运行在指定端口（如 19132）上的单个 Nukkit 服务器。专业版授权仅适用于单个 Nukkit 服务器实例的运行。

### VPS 实例
VPS 实例是指在同一台虚拟专用服务器（VPS）上运行的多个 Nukkit 服务器。企业版授权覆盖单个 VPS 上所有运行的 Nukkit 服务器实例。

