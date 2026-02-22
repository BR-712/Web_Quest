import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { getSupabase } from "@/lib/supabase";
import { toast } from "sonner";

const ContactForm = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const serviceOptions = [
    t("services.consultoria.title"),
    t("services.estrategias.title"),
    t("services.formacion.title"),
    t("services.digital.title"),
    t("contact.form.services_options.other"),
  ];

  const sizeOptions = [
    t("contact.form.sizes.1-10"),
    t("contact.form.sizes.11-50"),
    t("contact.form.sizes.51-200"),
    t("contact.form.sizes.200+"),
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Validación básica
    const required = ["name", "email", "company"];
    const newErrors: Record<string, boolean> = {};
    required.forEach((f) => {
      if (!formData.get(f)?.toString().trim()) newErrors[f] = true;
    });
    
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setLoading(true);

    try {
      const supabase = getSupabase();
      
      const { error } = await supabase.from('contacts').insert({
        name: formData.get('name')?.toString(),
        email: formData.get('email')?.toString(),
        company: formData.get('company')?.toString(),
        company_size: formData.get('size')?.toString(),
        service_interest: formData.get('service')?.toString(),
        message: formData.get('message')?.toString(),
      });

      if (error) throw error;

      setSubmitted(true);
      toast.success(t("contact.form.submitted_title"));
    } catch (error: any) {
      console.error('Error sending message:', error);
      // Mostrar el mensaje real del error para facilitar la depuración
      toast.error(`Error: ${error.message || "No se pudo enviar el mensaje. Verifica tu conexión."}`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl shadow-lg p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-primary mb-2">{t("contact.form.submitted_title")}</h3>
        <p className="text-muted-foreground">{t("contact.form.submitted_desc")}</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-primary underline hover:text-accent transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm font-body bg-card text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent ${
      errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg p-8 md:p-10 space-y-5">
      <div>
        <label className="block text-sm font-heading font-medium text-primary mb-1.5">{t("contact.form.name")} *</label>
        <input name="name" className={inputClass("name")} placeholder={t("contact.form.placeholders.name")} />
      </div>
      <div>
        <label className="block text-sm font-heading font-medium text-primary mb-1.5">{t("contact.form.email")} *</label>
        <input name="email" type="email" className={inputClass("email")} placeholder={t("contact.form.placeholders.email")} />
      </div>
      <div>
        <label className="block text-sm font-heading font-medium text-primary mb-1.5">{t("contact.form.company")} *</label>
        <input name="company" className={inputClass("company")} placeholder={t("contact.form.placeholders.company")} />
      </div>
      <div>
        <label className="block text-sm font-heading font-medium text-primary mb-1.5">{t("contact.form.size")}</label>
        <select name="size" className={inputClass("")}>
          <option value="">{t("contact.form.select")}</option>
          {sizeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-heading font-medium text-primary mb-1.5">{t("contact.form.service")}</label>
        <select name="service" className={inputClass("")}>
          <option value="">{t("contact.form.select")}</option>
          {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-heading font-medium text-primary mb-1.5">{t("contact.form.message")}</label>
        <textarea name="message" rows={4} className={inputClass("")} placeholder={t("contact.form.placeholders.message")} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold text-gold-foreground font-heading font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            {t("contact.form.sending")}
          </>
        ) : (
          t("contact.form.submit")
        )}
      </button>
    </form>
  );
};

export default ContactForm;
