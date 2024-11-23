---
layout: home

hero:
  name: "Asterism"
  text: "One of the most powerful AntiCheat solutions for Nukkit"
  tagline: Robust, Reliable and Cutting-Edge
  image:
    src: /logo.png
    alt: Asterism
  actions:
    - theme: brand
      text: Getting Started
      link: /en/getting-started/introduction
    - theme: alt
      text: Purchase
      link: /en/getting-started/pricing

features:
  - icon: ⚙️
    title: Customizable configuration
    details: We offer flexible configuration, empowering you to seamlessly update settings post-plugin loaded.
  - icon: 🛡️
    title: Stability
    details: Ensuring stability is our priority. Our system is designed to deliver reliable performance, minimizing disruptions and guaranteeing a steadfast user experience.
  - icon: 🎮
    title: Easy to use
    details: Experience effortless usage with our streamlined process – from purchasing to downloading the plugin, installation, and activation. Simplifying every step for your convenience.
  - icon: ⚡
    title: Performance
    details: We ensure high performance by using packet inspection instead of monitoring many events, keeping the system fast and efficient.
  - icon: 🎯
    title: Precision
    details: Through meticulous calculations, our system minimizes false positives, ensuring the most accurate outcomes.
  - icon: 🔄
    title: Long-term support
    details: We provide continuous maintenance and updates to ensure that our users receive ongoing assistance and benefit from the latest enhancements throughout their subscription period.
  - icon: 🚀
    title: Flexible APIs
    details: We offer a range of event APIs that allow you to listen and leverage our provided interfaces, enabling you to accomplish even more robust functionalities tailored to your specific needs.
  - icon: 💵
    title: Affordable
    details: Our cost-effective plans ensure access to high-quality services, making advanced features accessible.
  - icon: 🤝
    title: Compatibility
    details: We support all forks of NukkitX, ensuring seamless integration with both Windows versions of Minecraft Bedrock and mobile editions, providing a versatile solution for diverse user platforms.

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
  filter: blur(160px);
  animation: gradient 6s ease-in-out infinite;
  transition: filter 0.5s;
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
</style>