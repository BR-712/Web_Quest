import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Building2, Layers, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Calendar, value: 6, label: "Años de experiencia", prefix: "+" },
  { icon: Building2, value: 35, label: "Empresas atendidas", prefix: "+" },
  { icon: Layers, value: 8, label: "Sectores cubiertos", prefix: "+" },
  { icon: ShieldCheck, value: 10, label: "Estándares ISO", prefix: "+" },
];

const Counter = ({ target, prefix }: { target: number; prefix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count}</span>;
};

const ImpactStats = () => {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="font-heading font-bold text-4xl md:text-5xl text-primary">
                <Counter target={stat.value} prefix={stat.prefix} />
              </div>
              <p className="mt-2 text-muted-foreground text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
