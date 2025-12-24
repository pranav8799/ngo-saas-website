import { motion } from "framer-motion";
import { Calendar, Award, Target } from "lucide-react";

export default function WhoWeAre() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-display font-bold text-foreground mb-6">Who We Are</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driven by compassion, fueled by action. We are a global community dedicated to sustainable change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Unsplash: Diverse team meeting */}
              <motion.img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="flex gap-6 p-6 rounded-2xl hover:bg-blue-50/50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Target className="w-7 h-7 text-blue-600" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower underprivileged communities by providing equitable access to education, healthcare, and essential resources, fostering self-reliance and sustainable growth.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-6 p-6 rounded-2xl hover:bg-purple-50/50 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Award className="w-7 h-7 text-purple-600" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every individual, regardless of background, has the opportunity to thrive, contribute to society, and live with dignity and hope.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold">Our Journey</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {[
                { year: "2015", title: "The Beginning", desc: "Started with a small team of 5 volunteers in a garage." },
                { year: "2018", title: "First Major Milestone", desc: "Built our first school serving 200 children." },
                { year: "2020", title: "Global Expansion", desc: "Expanded operations to 3 countries during the pandemic." },
                { year: "2023", title: "Impact Award", desc: "Recognized by UN for sustainable development goals." },
              ].map((item, i) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold text-primary">{item.year}</h3>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-primary shadow-lg z-10 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our Leaders</h2>
            <p className="text-muted-foreground">Dedicated professionals driving our mission forward.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Executive Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
              { name: "David Chen", role: "Head of Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Maria Rodriguez", role: "Community Outreach", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" }
            ].map((member, i) => (
              <motion.div 
                key={i} 
                className="group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <motion.div 
                  className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold font-display"
                  whileHover={{ color: "#fa6cd3" }}
                >{member.name}</motion.h3>
                <p className="text-primary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
