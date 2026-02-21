import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import ConsultoriaAsesoria from "./pages/services/ConsultoriaAsesoria";
import EstrategiasIntervencion from "./pages/services/EstrategiasIntervencion";
import FormacionEspecializada from "./pages/services/FormacionEspecializada";
import TransformacionDigital from "./pages/services/TransformacionDigital";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/servicios/consultoria-y-asesoria" element={<ConsultoriaAsesoria />} />
            <Route path="/servicios/estrategias-e-intervencion" element={<EstrategiasIntervencion />} />
            <Route path="/servicios/formacion-especializada" element={<FormacionEspecializada />} />
            <Route path="/servicios/transformacion-digital" element={<TransformacionDigital />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
