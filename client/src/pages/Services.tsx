import { motion } from "framer-motion";
import { BookOpen, Stethoscope, Droplets, Sun, Users, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: BookOpen,
    title: "Education Programs",
    desc: "From building schools to providing scholarships, we ensure every child has access to quality education.",
    color: "bg-blue-50 text-blue-600",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80"
  },
  {
    icon: Stethoscope,
    title: "Healthcare Initiatives",
    desc: "Mobile medical camps and permanent clinics providing essential healthcare to remote communities.",
    color: "bg-red-50 text-red-600",
    img: "https://images.unsplash.com/photo-1579684385136-137af18db00e?w=600&q=80"
  },
  {
    icon: Droplets,
    title: "Clean Water & Sanitation",
    desc: "Installing wells and filtration systems to provide safe drinking water and reduce disease.",
    color: "bg-cyan-50 text-cyan-600",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f037085?w=600&q=80"
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    desc: "Bringing solar power to off-grid villages, powering homes and schools sustainably.",
    color: "bg-yellow-50 text-yellow-600",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"
  },
  {
    icon: Users,
    title: "Women Empowerment",
    desc: "Vocational training and micro-finance loans to help women start their own businesses.",
    color: "bg-purple-50 text-purple-600",
    img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80"
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    desc: "Teaching modern farming techniques to improve crop yields and food security.",
    color: "bg-green-50 text-green-600",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-display font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Holistic programs designed to create lasting impact and sustainable development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link href="/admission">
                    <Button variant="link" className="p-0 text-primary font-semibold hover:no-underline hover:gap-2 transition-all">
                      Get Involved <span className="ml-1">&rarr;</span>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
