---
layout: home

hero:
  name: "Asterism"
  text: "最强大的 Nukkit 反作弊解决方案之一"
  tagline: 稳健、可靠、先进
  image:
    src: /logo.png
    alt: Asterism
  actions:
    - theme: brand
      text: 开始使用
      link: /zh/getting-started/introduction
    - theme: alt
      text: 购买
      link: /zh/getting-started/pricing

features:
  - icon: ⚙️
    title: 自定义配置
    details: 我们提供灵活的配置选项，让你能够在插件加载后轻松更新设置
  - icon: 🛡️
    title: 稳定性
    details: 确保稳定性是我们的首要任务，系统设计旨在提供可靠的性能，最大限度减少中断
  - icon: 🎮
    title: 易于使用
    details: 从购买到下载插件、安装和激活，体验简单的使用过程，简化每个步骤
  - icon: ⚡
    title: 高性能
    details: 通过使用数据包检测而不是监控大量事件来确保高性能，保持系统快速高效
  - icon: 🎯
    title: 精确检测
    details: 通过精密的计算，我们的系统最大限度地减少误报，确保最准确的检测结果
  - icon: 🔄
    title: 长期支持
    details: 我们提供持续的维护和更新，确保用户在订阅期间获得持续的支持和最新改进
  - icon: 🚀
    title: 灵活的API
    details: 提供丰富的事件API，让你能够监听和利用我们提供的接口，实现更强大的自定义功能
  - icon: 💵
    title: 价格实惠
    details: 我们的性价比计划确保你能以合理的价格访问高质量服务
  - icon: 🤝
    title: 广泛兼容
    details: 支持所有 NukkitX 分支，确保与 Windows 版和手机版我的世界完美集成
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
}

.VPHero .name {
  background: linear-gradient(
    to right,
    #bd34fe 25%,
    #47caff 50%,
    #47caff 75%,
    #bd34fe 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

.VPHero .image-bg {
  background-image: linear-gradient(
    -45deg,
    #bd34fe,
    #47caff,
    #bd34fe,
    #47caff
  );
  background-size: 400%;
  filter: blur(0px);
  opacity: 0.8;
  animation: gradient 6s ease-in-out infinite;
  transition: opacity 0.5s, filter 0.5s;
}

.VPHero .image-container:hover .image-bg {
  opacity: 1;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.VPHero .image-container {
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.VPHero .image-container:hover {
  transform: translateY(-5px);
}

@media (max-width: 639px) {
  .VPHero .image-bg {
    filter: blur(48px);
    background-size: 200%;
  }
}

@media (min-width: 640px) and (max-width: 959px) {
  .VPHero .image-bg {
    filter: blur(48px);
  }
}

@media (min-width: 960px) {
  .VPHero .image-bg {
    filter: blur(48px);
  }
}
</style>
