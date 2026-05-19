import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface FieldDef {
  label: string;
  page: string;
  section: string;
  field: string;
  rows?: number;
}

interface SectionDef {
  id: string;
  title: string;
  icon: string;
  fields: FieldDef[];
}

const sectionsConfig: SectionDef[] = [
  {
    id: "hero-stats",
    title: "Hero Section",
    icon: "ri-home-smile-line",
    fields: [
      { label: "MAIN HEADLINE", page: "home", section: "hero", field: "main_title", rows: 2 },
      { label: "SUBTITLE / DESCRIPTION", page: "home", section: "hero", field: "subtitle", rows: 4 },
      { label: "LOCATION BADGE", page: "home", section: "hero", field: "badge_text" },
      { label: "PRIMARY BUTTON TEXT", page: "home", section: "hero", field: "primary_button" },
      { label: "SECONDARY BUTTON TEXT", page: "home", section: "hero", field: "secondary_button" },
      { label: "FORM TITLE", page: "home", section: "hero", field: "form_title" },
      { label: "FORM SUBTITLE", page: "home", section: "hero", field: "form_subtitle" },
      { label: "Stat 1 Value", page: "home", section: "stats", field: "stat1_value" },
      { label: "Stat 1 Label", page: "home", section: "stats", field: "stat1_label" },
      { label: "Stat 1 Description", page: "home", section: "stats", field: "stat1_desc", rows: 2 },
      { label: "Stat 2 Value", page: "home", section: "stats", field: "stat2_value" },
      { label: "Stat 2 Label", page: "home", section: "stats", field: "stat2_label" },
      { label: "Stat 2 Description", page: "home", section: "stats", field: "stat2_desc", rows: 2 },
      { label: "Stat 3 Value", page: "home", section: "stats", field: "stat3_value" },
      { label: "Stat 3 Label", page: "home", section: "stats", field: "stat3_label" },
      { label: "Stat 3 Description", page: "home", section: "stats", field: "stat3_desc", rows: 2 },
      { label: "Stat 4 Value", page: "home", section: "stats", field: "stat4_value" },
      { label: "Stat 4 Label", page: "home", section: "stats", field: "stat4_label" },
      { label: "Stat 4 Description", page: "home", section: "stats", field: "stat4_desc", rows: 2 },
    ],
  },
  {
    id: "about",
    title: "About Us",
    icon: "ri-user-smile-line",
    fields: [
      { label: "BADGE", page: "home", section: "about", field: "badge" },
      { label: "TITLE", page: "home", section: "about", field: "title", rows: 2 },
      { label: "PARAGRAPH 1", page: "home", section: "about", field: "paragraph1", rows: 4 },
      { label: "PARAGRAPH 2", page: "home", section: "about", field: "paragraph2", rows: 4 },
      { label: "BUTTON TEXT", page: "home", section: "about", field: "button_text" },
      { label: "YEARS BADGE VALUE", page: "home", section: "about", field: "years_badge_value" },
      { label: "YEARS BADGE LABEL", page: "home", section: "about", field: "years_badge_label" },
    ],
  },
  {
    id: "cta",
    title: "CTA Section",
    icon: "ri-phone-camera-line",
    fields: [
      { label: "BADGE", page: "home", section: "cta", field: "badge" },
      { label: "TITLE", page: "home", section: "cta", field: "title", rows: 2 },
      { label: "SUBTITLE", page: "home", section: "cta", field: "subtitle", rows: 3 },
      { label: "PRIMARY BUTTON", page: "home", section: "cta", field: "primary_button" },
      { label: "PHONE BUTTON", page: "home", section: "cta", field: "phone_button" },
    ],
  },
  {
    id: "services",
    title: "Services",
    icon: "ri-service-line",
    fields: [
      { label: "SECTION BADGE", page: "home", section: "services", field: "badge" },
      { label: "SECTION TITLE", page: "home", section: "services", field: "title", rows: 2 },
      { label: "SECTION SUBTITLE", page: "home", section: "services", field: "subtitle", rows: 3 },
      { label: "STAT VALUE", page: "home", section: "services", field: "stat_value" },
      { label: "STAT LABEL", page: "home", section: "services", field: "stat_label" },
      { label: "STAT DESCRIPTION", page: "home", section: "services", field: "stat_desc", rows: 2 },
      { label: "CARD 1 TITLE", page: "home", section: "services", field: "card1_title" },
      { label: "CARD 1 DESCRIPTION", page: "home", section: "services", field: "card1_desc", rows: 3 },
      { label: "CARD 2 TITLE", page: "home", section: "services", field: "card2_title" },
      { label: "CARD 2 DESCRIPTION", page: "home", section: "services", field: "card2_desc", rows: 3 },
      { label: "CARD 3 TITLE", page: "home", section: "services", field: "card3_title" },
      { label: "CARD 3 DESCRIPTION", page: "home", section: "services", field: "card3_desc", rows: 3 },
      { label: "BOTTOM TITLE", page: "home", section: "services", field: "bottom_title" },
      { label: "BOTTOM DESCRIPTION", page: "home", section: "services", field: "bottom_desc", rows: 3 },
    ],
  },
  {
    id: "how-it-works",
    title: "How It Works",
    icon: "ri-calendar-event-line",
    fields: [
      { label: "BADGE", page: "home", section: "howItWorks", field: "badge" },
      { label: "TITLE", page: "home", section: "howItWorks", field: "title", rows: 2 },
      { label: "STEP 1 TITLE", page: "home", section: "howItWorks", field: "step1_title" },
      { label: "STEP 1 DESCRIPTION", page: "home", section: "howItWorks", field: "step1_desc", rows: 3 },
      { label: "STEP 2 TITLE", page: "home", section: "howItWorks", field: "step2_title" },
      { label: "STEP 2 DESCRIPTION", page: "home", section: "howItWorks", field: "step2_desc", rows: 3 },
      { label: "STEP 3 TITLE", page: "home", section: "howItWorks", field: "step3_title" },
      { label: "STEP 3 DESCRIPTION", page: "home", section: "howItWorks", field: "step3_desc", rows: 3 },
      { label: "STEP 4 TITLE", page: "home", section: "howItWorks", field: "step4_title" },
      { label: "STEP 4 DESCRIPTION", page: "home", section: "howItWorks", field: "step4_desc", rows: 3 },
    ],
  },
  {
    id: "why-choose",
    title: "Performance",
    icon: "ri-bar-chart-box-line",
    fields: [
      { label: "BADGE", page: "home", section: "whyChooseUs", field: "badge" },
      { label: "TITLE", page: "home", section: "whyChooseUs", field: "title", rows: 2 },
      { label: "SUBTITLE", page: "home", section: "whyChooseUs", field: "subtitle", rows: 3 },
    ],
  },
  {
    id: "reviews",
    title: "Reviews",
    icon: "ri-star-line",
    fields: [
      { label: "TITLE", page: "home", section: "reviews", field: "title", rows: 2 },
      { label: "SUBTITLE", page: "home", section: "reviews", field: "subtitle", rows: 3 },
      { label: "RATING VALUE", page: "home", section: "reviews", field: "rating_value" },
      { label: "REVIEWS COUNT", page: "home", section: "reviews", field: "reviews_count" },
    ],
  },
  {
    id: "final-cta",
    title: "Final CTA",
    icon: "ri-lightbulb-flash-line",
    fields: [
      { label: "BADGE", page: "home", section: "finalCta", field: "badge" },
      { label: "TITLE", page: "home", section: "finalCta", field: "title", rows: 2 },
      { label: "SUBTITLE", page: "home", section: "finalCta", field: "subtitle", rows: 3 },
      { label: "PRIMARY BUTTON", page: "home", section: "finalCta", field: "primary_button" },
      { label: "PHONE BUTTON", page: "home", section: "finalCta", field: "phone_button" },
    ],
  },
  {
    id: "contact",
    title: "Contact Info",
    icon: "ri-contacts-line",
    fields: [
      { label: "HERO TITLE", page: "contact", section: "hero", field: "title" },
      { label: "PHONE LABEL", page: "contact", section: "info", field: "phone_label" },
      { label: "PHONE NUMBER", page: "contact", section: "info", field: "phone" },
      { label: "PHONE SUBTITLE", page: "contact", section: "info", field: "phone_sub" },
      { label: "EMAIL LABEL", page: "contact", section: "info", field: "email_label" },
      { label: "EMAIL ADDRESS", page: "contact", section: "info", field: "email" },
      { label: "SOCIAL LABEL", page: "contact", section: "info", field: "social_label" },
      { label: "SOCIAL HANDLE", page: "contact", section: "info", field: "social_handle" },
      { label: "LOCATION LABEL", page: "contact", section: "info", field: "location_label" },
      { label: "LOCATION ADDRESS", page: "contact", section: "info", field: "location", rows: 2 },
    ],
  },
  {
    id: "about-page",
    title: "About Page",
    icon: "ri-file-info-line",
    fields: [
      { label: "HERO TITLE", page: "about", section: "hero", field: "title" },
      { label: "STORY BADGE", page: "about", section: "story", field: "badge" },
      { label: "STORY TITLE", page: "about", section: "story", field: "title", rows: 2 },
      { label: "STORY PARAGRAPH 1", page: "about", section: "story", field: "paragraph1", rows: 4 },
      { label: "STORY PARAGRAPH 2", page: "about", section: "story", field: "paragraph2", rows: 4 },
    ],
  },
  {
    id: "faqs",
    title: "FAQs",
    icon: "ri-questionnaire-line",
    fields: [
      { label: "BADGE", page: "about", section: "faqs", field: "badge" },
      { label: "TITLE", page: "about", section: "faqs", field: "title", rows: 2 },
      { label: "SUBTITLE", page: "about", section: "faqs", field: "subtitle", rows: 3 },
    ],
  },
  {
    id: "values",
    title: "Our Values",
    icon: "ri-heart-3-line",
    fields: [
      { label: "BADGE", page: "about", section: "values", field: "badge" },
      { label: "TITLE", page: "about", section: "values", field: "title", rows: 2 },
      { label: "SUBTITLE", page: "about", section: "values", field: "subtitle", rows: 4 },
    ],
  },
];

interface AdminEditorProps {
  activeSection: string;
}

export default function AdminEditor({ activeSection }: AdminEditorProps) {
  const [values, setValues] = useState<Record<string, string>>();
  const [original, setOriginal] = useState<Record<string, string>>();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  const section = sectionsConfig.find((s) => s.id === activeSection);

  useEffect(() => {
    if (!section) return;
    setLoading(true);
    supabase
      .from("site_content")
      .select("*")
      .then(({ data }) => {
        const map: Record<string, string> = {};
        data?.forEach((row: any) => {
          map[`${row.page}.${row.section}.${row.field_key}`] = row.field_value ?? "";
        });
        const sectionValues: Record<string, string> = {};
        section.fields.forEach((f) => {
          const key = `${f.page}.${f.section}.${f.field}`;
          sectionValues[key] = map[key] ?? "";
        });
        setValues(sectionValues);
        setOriginal(sectionValues);
        setLoading(false);
      });
  }, [activeSection]);

  const hasChanges = () => {
    if (!values || !original) return false;
    return Object.keys(values).some((k) => values[k] !== original[k]);
  };

  const handleSave = async () => {
    if (!section || !hasChanges()) return;
    setSaving(true);
    const updates = section.fields.map((f) => ({
      page: f.page,
      section: f.section,
      field_key: f.field,
      field_value: values[`${f.page}.${f.section}.${f.field}`] ?? "",
    }));
    const { error } = await supabase
      .from("site_content")
      .upsert(updates, { onConflict: "page,section,field_key" });
    setSaving(false);
    if (!error) {
      setOriginal({ ...values });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    }
  };

  const handleChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  if (!section) return null;

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0d0d0d]">
      <div className="flex items-center gap-3 px-6 pt-6 pb-2">
        <div className="w-8 h-8 flex items-center justify-center bg-[#FACC15]/15 rounded-lg">
          <i className={`${section.icon} text-[#FACC15] text-lg`}></i>
        </div>
        <div>
          <h2 className="text-white font-bold text-base leading-tight">{section.title}</h2>
          <p className="text-gray-500 text-xs">Edit text fields and click Save Changes</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4">
        {loading ? (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm">
            <i className="ri-loader-4-line animate-spin mr-2"></i> Cargando...
          </div>
        ) : (
          <div className="max-w-3xl space-y-5">
            {section.fields.map((f) => {
              const key = `${f.page}.${f.section}.${f.field}`;
              const changed = values[key] !== original[key];
              return (
                <div key={key}>
                  <label className="block text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                    {f.label}
                  </label>
                  {f.rows && f.rows > 1 ? (
                    <textarea
                      value={values[key] ?? ""}
                      onChange={(e) => handleChange(key, e.target.value)}
                      rows={f.rows}
                      className={`w-full bg-[#161616] border text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#FACC15]/60 focus:bg-[#1a1a1a] transition-all resize-none ${
                        changed ? "border-[#FACC15]/40" : "border-white/10"
                      }`}
                    />
                  ) : (
                    <input
                      type="text"
                      value={values[key] ?? ""}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className={`w-full bg-[#161616] border text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#FACC15]/60 focus:bg-[#1a1a1a] transition-all ${
                        changed ? "border-[#FACC15]/40" : "border-white/10"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="px-6 py-4 border-t border-white/10 bg-[#111111] flex items-center justify-between">
        <div className="flex items-center gap-2">
          {saved && (
            <span className="text-green-400 text-xs font-medium flex items-center gap-1">
              <i className="ri-check-line"></i> Cambios guardados
            </span>
          )}
          {hasChanges() && !saved && (
            <span className="text-[#FACC15] text-xs font-medium flex items-center gap-1">
              <i className="ri-edit-circle-line"></i> Cambios sin guardar
            </span>
          )}
        </div>
        <button
          onClick={handleSave}
          disabled={saving || !hasChanges()}
          className={`whitespace-nowrap px-5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
            hasChanges()
              ? "bg-[#FACC15] hover:bg-[#E5B314] text-[#111111]"
              : "bg-white/5 text-gray-500 cursor-not-allowed"
          }`}
        >
          {saving ? (
            <>
              <i className="ri-loader-4-line animate-spin"></i> Guardando...
            </>
          ) : (
            <>
              <i className="ri-save-line"></i> Save Changes
            </>
          )}
        </button>
      </div>
    </div>
  );
}