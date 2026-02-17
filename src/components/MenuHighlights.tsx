"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type MenuItem = {
  name: string;
  chinese: string;
  price: string;
};

type MenuCategory = {
  title: string;
  titleChinese: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    title: "Steamed",
    titleChinese: "蒸点",
    items: [
      { name: "House Shrimp Dumpling", chinese: "本楼鲜虾饺", price: "$5.95" },
      { name: "Steamed Pork Shrimp SiuMai", chinese: "白玉靓烧麦", price: "$5.95" },
      { name: "Chicken Feet", chinese: "金酱蒸凤爪", price: "$5.95" },
      { name: "Ribs with Garlic, Gold & Silver", chinese: "金银蒜排骨", price: "$5.95" },
      { name: "Fresh Shrimp Yuchi Dumpling", chinese: "鲜虾鱼翅饺", price: "$5.95" },
      { name: "Stuffed Beef Curd Skin", chinese: "婷皇鲜竹卷", price: "$5.95" },
      { name: "Beef Tripe", chinese: "七彩牛栢叶", price: "$5.95" },
      { name: "Black Pepper Beef Ribs", chinese: "黑椒牛仔骨", price: "$5.95" },
      { name: "Beef Ball", chinese: "山竹牛肉球", price: "$5.95" },
      { name: "Steamed Shrimp Ball", chinese: "百花蒸虾丸", price: "$5.95" },
      { name: "Sticky Rice in Lotus Leaves", chinese: "荷香糯米鸡", price: "$5.95" },
      { name: "Corn & Scallop Dumpling", chinese: "玉米带子饺", price: "$5.95" },
      { name: "Shrimp Chive Dumpling", chinese: "鲜虾九菜饺", price: "$5.95" },
      { name: "BBQ Pork Bun Steamed", chinese: "蜜汁叉烧包", price: "$4.65" },
      { name: "Lava Bun Steamed", chinese: "金枕流沙包", price: "$5.95" },
      { name: "Egg Custard Bun", chinese: "香滑奶皇包", price: "$4.65" },
      { name: "Shanghai Dumpling", chinese: "灌汤小笼包", price: "$5.95" },
      { name: "Beef Honeycomb", chinese: "柱侯金錢肚", price: "$5.95" },
    ],
  },
  {
    title: "House Special",
    titleChinese: "特点",
    items: [
      { name: "Swan Durian Crisp", chinese: "天鹅榴莲酥", price: "$9.95" },
      { name: "Crab Meat Dumpling", chinese: "金尊蟹肉饺", price: "$7.95" },
      { name: "Crispy Shrimp Roll", chinese: "鲜虾脆皮卷", price: "$6.95" },
      { name: "Fresh Shrimp Crispy Rice Noodle", chinese: "特式脆皮肠粉", price: "$7.95" },
      { name: "Baked Egg Custard", chinese: "葡式煸蛋挞", price: "$6.95" },
      { name: "Walnut Bun", chinese: "金牌核桃包", price: "$6.95" },
      { name: "Cow Stomach Mix", chinese: "飘香牛杂", price: "$7.95" },
      { name: "Black Gold Quicksand Dumpling", chinese: "黑金流沙包", price: "$7.95" },
    ],
  },
  {
    title: "Crispy",
    titleChinese: "炸点",
    items: [
      { name: "Beehive Fried Taro", chinese: "蜂巢炸芋角", price: "$4.65" },
      { name: "Cantonese Fried Dough Sticks", chinese: "广式炸油条", price: "$5.95" },
      { name: "Bean Paste Sesame Balls", chinese: "豆沙芝麻球", price: "$4.65" },
      { name: "Crisp Mixed Dumpling", chinese: "五香咸水角", price: "$4.65" },
      { name: "Fried Shrimp Balls", chinese: "龙须炸虾球", price: "$5.95" },
      { name: "Gold Medal Durian Crisp", chinese: "金牌榴莲酥", price: "$6.95" },
    ],
  },
  {
    title: "Pan-Fried",
    titleChinese: "煎点",
    items: [
      { name: "Pan-Fried Shrimp Green Pepper", chinese: "煎酿青椒", price: "$5.95" },
      { name: "Pan-Fried Shrimp Eggplant", chinese: "煎釀茄子", price: "$5.95" },
      { name: "Pan-Fried Shrimp Bean Curd", chinese: "煎酿豆腐", price: "$5.95" },
      { name: "Pan-Fried Turnip", chinese: "香煎萝卜糕", price: "$4.65" },
      { name: "Pan-Fried Pork Dumpling", chinese: "香煎猪肉饺", price: "$5.95" },
      { name: "Shrimp Pancake with Chive", chinese: "香煎韭菜饼", price: "$6.95" },
    ],
  },
  {
    title: "Pastry",
    titleChinese: "西点",
    items: [
      { name: "Pineapple Bun Hong Kong Style", chinese: "港式菠萝包", price: "$4.95" },
      { name: "Baked Roast Pork Bun", chinese: "叉烧煸餐包", price: "$4.95" },
      { name: "Crispy Egg Custard", chinese: "酥皮煸蛋挞", price: "$4.95" },
      { name: "Baked BBQ Pork Pastry", chinese: "金牌叉烧酥", price: "$4.95" },
    ],
  },
  {
    title: "Rice Paste",
    titleChinese: "肠粉",
    items: [
      { name: "Shrimp Rice Rolls", chinese: "鲜虾肠粉", price: "$5.95" },
      { name: "Roast Pork Rice Rolls", chinese: "叉烧肠粉", price: "$5.95" },
      { name: "Beef Rice Rolls", chinese: "牛肉肠粉", price: "$5.95" },
      { name: "Fried Dough Rice Rolls", chinese: "港式炸两", price: "$5.95" },
      { name: "Cilantro Rice Rolls", chinese: "芫茜肠粉", price: "$5.95" },
    ],
  },
  {
    title: "Noodles",
    titleChinese: "面類",
    items: [
      { name: "Wonton Noodle Soup", chinese: "云吞面", price: "$10.00" },
      { name: "Stew Beef Noodle Soup", chinese: "牛腩麺", price: "$10.00" },
      { name: "Stew Beef Wonton Noodle Soup", chinese: "牛腩雾吞麺", price: "$11.00" },
      { name: "Stir-Fried Egg Noodle in Soy Sauce", chinese: "豉油皇炒麺", price: "$18.00" },
      { name: "Chicken or Roast Pork Wok-Fried Noodle", chinese: "鸡丝或叉烧两面黄", price: "$18.00" },
      { name: "Beef or Shrimp Wok-Fried Noodle", chinese: "牛肉或蝦两面黄", price: "$19.00" },
      { name: "Beef Chow Fun", chinese: "干炒牛河", price: "$17.00" },
      { name: "Beef Black Pepper Chow Fun", chinese: "温炒牛河", price: "$18.00" },
      { name: "XiaMen Style Rice Noodle", chinese: "厦门炒米粉", price: "$18.00" },
      { name: "Singapore Rice Noodle", chinese: "星洲炒米粉", price: "$18.00" },
      { name: "Seafood Rice Noodle", chinese: "海鲜炒米粉", price: "$18.00" },
      { name: "Yifu Noodles in Abalone Sauce", chinese: "鲍汁北菇伊麺", price: "$19.00" },
      { name: "Seafood Yifu Noodle", chinese: "海鲜芠伊麺", price: "$21.00" },
    ],
  },
  {
    title: "Congee",
    titleChinese: "养生粥",
    items: [
      { name: "Preserved Egg & Pork Congee", chinese: "皮蛋瘦肉粥", price: "$9.95" },
      { name: "Fish & Parsley Congee", chinese: "鱼片粥", price: "$9.95" },
      { name: "Beef Congee", chinese: "生滚牛肉粥", price: "$9.95" },
      { name: "Boat Guy Congee", chinese: "艇仔粥", price: "$9.95" },
      { name: "Seafood Congee", chinese: "海鲜粥", price: "$9.95" },
    ],
  },
  {
    title: "Chef's Special",
    titleChinese: "厨点推荐",
    items: [
      { name: "Jelly Fish Salad", chinese: "凉拌海蜇", price: "$9.95" },
      { name: "BBQ Pork with Honey Sauce", chinese: "蜜汁叉烧", price: "$9.95" },
      { name: "Fuqi Feipian", chinese: "夫妻肺片", price: "$13.95" },
      { name: "Fried Clams with Black Bean Sauce", chinese: "鼓椒炒蚬", price: "$13.95" },
      { name: "Salt and Pepper Shrimp", chinese: "椒盐虾", price: "$13.95" },
      { name: "The Famous Roast Duck", chinese: "招牌烤鸭", price: "$13.95" },
      { name: "Spring Fish with Salt and Pepper", chinese: "椒盐多春鱼", price: "$13.95" },
      { name: "Salt and Pepper Whiteboard Fish", chinese: "椒盐白板鱼", price: "$13.95" },
      { name: "Stir-Fried Seasonal Vegetable with Garlic", chinese: "各式时菜", price: "$9.95" },
      { name: "Salt & Pepper Chicken Wings", chinese: "椒盐鸡中翅", price: "$9.95" },
      { name: "Salt & Pepper Squid Tentacles", chinese: "椒盐鱿鱼须", price: "$13.95" },
      { name: "Sands Pumpkin Bars", chinese: "金沙南瓜条", price: "$9.95" },
      { name: "Golden Sand Head Shrimp", chinese: "金沙有头虾", price: "$13.95" },
    ],
  },
  {
    title: "Dessert",
    titleChinese: "甜点",
    items: [
      { name: "Little Rabbit Bun", chinese: "形象小白兔", price: "$8.00" },
    ],
  },
];

function AccordionCategory({
  category,
  index,
  isOpen,
  onToggle,
  isVisible,
}: {
  category: MenuCategory;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isVisible: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className={`border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-500 ${
        isOpen
          ? "bg-white/[0.03] border-brand-500/20"
          : "bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.12]"
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isVisible ? `${200 + index * 60}ms` : "0ms",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
        aria-expanded={isOpen}
        aria-controls={`menu-panel-${index}`}
        id={`menu-header-${index}`}
      >
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/10 text-brand-500 font-bold text-sm">
            {category.items.length}
          </span>
          <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-brand-400 transition-colors">
            {category.title}
          </h3>
          <span
            className="font-[var(--font-chinese)] text-brand-700 text-sm hidden sm:inline"
            aria-hidden="true"
          >
            {category.titleChinese}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-brand-500 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`menu-panel-${index}`}
        role="region"
        aria-labelledby={`menu-header-${index}`}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden"
      >
        <div ref={contentRef} className="px-5 sm:px-6 pb-5 sm:pb-6">
          <div className="h-[1px] bg-gradient-to-r from-brand-500/20 via-brand-500/10 to-transparent mb-4" aria-hidden="true" />
          <div className="grid gap-[1px] bg-white/[0.04] rounded-xl overflow-hidden">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 px-4 py-3 bg-[#0a0a0a] hover:bg-brand-500/[0.04] transition-colors group/item"
              >
                <div className="flex items-center gap-3 flex-wrap min-w-0">
                  <span className="text-sm sm:text-base text-white group-hover/item:text-brand-400 transition-colors truncate">
                    {item.name}
                  </span>
                  <span
                    className="font-[var(--font-chinese)] text-brand-800 text-xs shrink-0"
                    aria-label={`Chinese: ${item.chinese}`}
                  >
                    {item.chinese}
                  </span>
                </div>
                <span
                  className="text-brand-400 font-semibold text-sm sm:text-base whitespace-nowrap"
                  aria-label={`Price: ${item.price}`}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MenuHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openCategories, setOpenCategories] = useState<Set<number>>(
    new Set([0])
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleCategory = (index: number) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenCategories(new Set(menuCategories.map((_, i) => i)));
  };

  const collapseAll = () => {
    setOpenCategories(new Set());
  };

  const totalItems = menuCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

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

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span
            className="font-[var(--font-chinese)] text-brand-600 text-sm tracking-[0.5em]"
            aria-hidden="true"
          >
            精选菜单
          </span>
          <h2
            id="menu-heading"
            className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              Full Menu
            </span>
          </h2>
          <p className="mt-6 text-neutral-300 text-lg max-w-xl mx-auto">
            {totalItems} handcrafted dishes across {menuCategories.length}{" "}
            categories — made fresh daily from the dough to the filling, from
            the wok to your table.
          </p>
          <div
            className="mt-6 flex items-center justify-center gap-4"
            aria-hidden="true"
          >
            <div className="w-12 h-[1px] bg-brand-600" />
            <div className="w-2 h-2 rotate-45 bg-brand-500" />
            <div className="w-12 h-[1px] bg-brand-600" />
          </div>
        </div>

        {/* Expand / Collapse controls */}
        <div
          className={`mt-12 flex items-center justify-center gap-4 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={expandAll}
            className="px-5 py-2 text-xs font-semibold tracking-widest uppercase text-brand-400 border border-brand-500/30 rounded-full hover:bg-brand-500/10 hover:border-brand-500/50 transition-all duration-300"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-5 py-2 text-xs font-semibold tracking-widest uppercase text-neutral-400 border border-white/[0.08] rounded-full hover:bg-white/[0.05] hover:text-neutral-300 transition-all duration-300"
          >
            Collapse All
          </button>
        </div>

        {/* Accordion categories */}
        <div className="mt-8 space-y-3">
          {menuCategories.map((category, index) => (
            <AccordionCategory
              key={category.title}
              category={category}
              index={index}
              isOpen={openCategories.has(index)}
              onToggle={() => toggleCategory(index)}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Order Online CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/maps/reserve/v/dine/c/m9_x0F7SRec?source=pa&opi=89978449&hl=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase border-2 border-brand-500 text-brand-400 rounded-full hover:bg-brand-500 hover:text-navy-900 transition-all duration-500 hover:scale-105"
            >
              Reserve a Table
            </a>
            <a
              href="https://tentenseafoodgrill.kwickmenu.com/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase bg-brand-500 text-navy-900 rounded-full hover:bg-brand-400 transition-all duration-500 shadow-2xl shadow-brand-500/25 hover:shadow-brand-400/40 hover:scale-105"
            >
              Order Online
            </a>
          </div>
          <p className="mt-4 text-sm text-neutral-400">
            Prices may vary &middot; Ask about daily specials
          </p>
        </div>
      </div>
    </section>
  );
}
