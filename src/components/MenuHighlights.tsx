"use client";

import { useEffect, useRef, useState } from "react";

type MenuItem = {
  name: string;
  chinese: string;
  price: string;
  description: string;
};

type MenuCategory = {
  title: string;
  titleChinese: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    title: "Steamed Dim Sum",
    titleChinese: "蒸点",
    items: [
      {
        name: "House Shrimp Dumpling",
        chinese: "本楼鲜虾饺",
        price: "$5.95",
        description: "Crystal-skinned dumplings bursting with plump, fresh shrimp",
      },
      {
        name: "Steamed Pork & Shrimp SiuMai",
        chinese: "白玉靓烧麦",
        price: "$5.95",
        description: "Classic open-topped dumplings with pork and shrimp filling",
      },
      {
        name: "Shanghai Soup Dumpling",
        chinese: "灌汤小笼包",
        price: "$5.95",
        description: "Delicate dumplings filled with rich, savory broth",
      },
      {
        name: "Lava Custard Bun",
        chinese: "金枕流沙包",
        price: "$5.95",
        description: "Fluffy steamed bun with molten salted-egg custard center",
      },
    ],
  },
  {
    title: "House Specials",
    titleChinese: "特点",
    items: [
      {
        name: "Swan Durian Crisp",
        chinese: "天鹅榴莲酥",
        price: "$9.95",
        description: "Swan-shaped pastry with premium durian cream filling",
      },
      {
        name: "Crab Meat Dumpling",
        chinese: "金尊蟹肉饺",
        price: "$7.95",
        description: "Luxurious dumpling packed with real crab meat",
      },
      {
        name: "Crispy Shrimp Roll",
        chinese: "鲜虾脆皮卷",
        price: "$6.95",
        description: "Golden crispy roll wrapped around whole shrimp",
      },
      {
        name: "Black Gold Quicksand Bun",
        chinese: "黑金流沙包",
        price: "$7.95",
        description: "Black sesame bun with flowing golden custard core",
      },
    ],
  },
  {
    title: "Chef's Specials",
    titleChinese: "厨点推荐",
    items: [
      {
        name: "Famous Roast Duck",
        chinese: "招牌烤鸭",
        price: "$13.95",
        description: "Our signature — crispy skin, tender meat, aromatic glaze",
      },
      {
        name: "Salt & Pepper Shrimp",
        chinese: "椒盐虾",
        price: "$13.95",
        description: "Wok-tossed with fragrant salt, pepper, and chili",
      },
      {
        name: "Honey Glazed BBQ Pork",
        chinese: "蜜汁叉烧",
        price: "$9.95",
        description: "Cantonese-style char siu with a caramelized honey finish",
      },
      {
        name: "Fried Clams with Black Bean",
        chinese: "鼓椒炒蚬",
        price: "$13.95",
        description: "Fresh clams wok-fired with fermented black bean sauce",
      },
    ],
  },
  {
    title: "Noodles & Rice",
    titleChinese: "面類",
    items: [
      {
        name: "Beef Chow Fun",
        chinese: "干炒牛河",
        price: "$17.00",
        description: "Iconic wok-charred rice noodles with tender sliced beef",
      },
      {
        name: "Singapore Rice Noodle",
        chinese: "星洲炒米粉",
        price: "$18.00",
        description: "Curry-spiced thin noodles with shrimp, pork, and vegetables",
      },
      {
        name: "Wonton Noodle Soup",
        chinese: "云吞面",
        price: "$10.00",
        description: "Silky wontons in a clear, savory broth with springy noodles",
      },
      {
        name: "Yifu Noodles in Abalone Sauce",
        chinese: "鲍汁北菇伊麺",
        price: "$19.00",
        description: "E-fu noodles braised in luxurious abalone-mushroom sauce",
      },
    ],
  },
];

export default function MenuHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#0a0a0a] via-[#0d0906] to-[#0a0a0a]"
      aria-labelledby="menu-heading"
    >
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="font-[var(--font-chinese)] text-brand-600 text-sm tracking-[0.5em]" aria-hidden="true">
            精选菜单
          </span>
          <h2 id="menu-heading" className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              Menu
            </span>
          </h2>
          <p className="mt-6 text-neutral-300 text-lg max-w-xl mx-auto">
            Every dish is handcrafted fresh daily — from the dough to the
            filling, from the wok to your table.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4" aria-hidden="true">
            <div className="w-12 h-[1px] bg-brand-600" />
            <div className="w-2 h-2 rotate-45 bg-brand-500" />
            <div className="w-12 h-[1px] bg-brand-600" />
          </div>
        </div>

        {/* Category tabs */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          role="tablist"
          aria-label="Menu categories"
        >
          {menuCategories.map((cat, i) => (
            <button
              key={cat.title}
              role="tab"
              id={`tab-${i}`}
              aria-selected={activeCategory === i}
              aria-controls={`tabpanel-${i}`}
              onClick={() => setActiveCategory(i)}
              className={`px-6 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === i
                  ? "bg-brand-500 text-navy-900 shadow-lg shadow-brand-500/25"
                  : "bg-white/[0.05] text-neutral-300 hover:text-brand-400 hover:bg-white/[0.08] border border-white/[0.08]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
          className="mt-12 grid md:grid-cols-2 gap-4"
        >
          {menuCategories[activeCategory].items.map((item, i) => (
            <article
              key={item.name}
              className={`group p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl hover:border-brand-500/30 hover:bg-brand-500/[0.03] transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms",
              }}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold text-white group-hover:text-brand-400 transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-[var(--font-chinese)] text-brand-700 text-sm" aria-label={`Chinese name: ${item.chinese}`}>
                      {item.chinese}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="font-[var(--font-display)] text-xl font-bold text-brand-400" aria-label={`Price: ${item.price}`}>
                    {item.price}
                  </span>
                </div>
              </div>
              {/* Decorative line */}
              <div className="mt-4 h-[1px] bg-gradient-to-r from-brand-500/20 via-brand-500/10 to-transparent w-0 group-hover:w-full transition-all duration-700" aria-hidden="true" />
            </article>
          ))}
        </div>

        {/* Full menu CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://tentenseafoodgrill.kwickmenu.com/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase bg-brand-500 text-navy-900 rounded-full hover:bg-brand-400 transition-all duration-500 shadow-2xl shadow-brand-500/25 hover:shadow-brand-400/40 hover:scale-105"
          >
            View Full Menu & Order Online
          </a>
          <p className="mt-4 text-sm text-neutral-400">
            Browse our complete menu with 100+ dishes
          </p>
        </div>
      </div>
    </section>
  );
}
