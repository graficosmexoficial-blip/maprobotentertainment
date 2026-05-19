interface AdminSidebarProps {
  activeSection: string;
  onSelect: (section: string) => void;
}

const sections = [
  { id: "hero-stats", label: "Hero & Stats", icon: "ri-home-line" },
  { id: "about", label: "About Us", icon: "ri-file-text-line" },
  { id: "cta", label: "CTA Section", icon: "ri-volume-up-line" },
  { id: "contact", label: "Contact Info", icon: "ri-phone-line" },
  { id: "services", label: "Services", icon: "ri-article-line" },
  { id: "faqs", label: "FAQs", icon: "ri-question-line" },
  { id: "how-it-works", label: "How It Works", icon: "ri-checkbox-circle-line" },
  { id: "values", label: "Our Values", icon: "ri-heart-line" },
  { id: "why-choose", label: "Performance", icon: "ri-bar-chart-box-line" },
  { id: "reviews", label: "Reviews", icon: "ri-star-line" },
  { id: "media", label: "Media", icon: "ri-image-line" },
  { id: "final-cta", label: "Final CTA", icon: "ri-lightbulb-flash-line" },
  { id: "about-page", label: "About Page", icon: "ri-file-info-line" },
];

export default function AdminSidebar({ activeSection, onSelect }: AdminSidebarProps) {
  return (
    <aside className="w-56 bg-[#111111] border-r border-white/10 flex flex-col h-full shrink-0 overflow-y-auto">
      <nav className="p-3 space-y-1.5">
        {sections.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelect(s.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer text-left ${
                isActive
                  ? "bg-[#4facec]/15 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className={`w-8 h-8 flex items-center justify-center rounded-lg shrink-0 transition-all ${
                isActive
                  ? "bg-[#4facec] shadow-[0_0_10px_rgba(79,172,236,0.4)]"
                  : "bg-[#4facec]/80"
              }`}>
                <i className={`${s.icon} text-base text-white`}></i>
              </div>
              {s.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}