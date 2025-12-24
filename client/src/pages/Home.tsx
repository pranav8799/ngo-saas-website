import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Heart, Globe, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

// Abstract shapes for visual interest
const Blob = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.3C93.4,8.6,81.8,21.5,70.5,32.4C59.2,43.3,48.2,52.2,36.4,59.3C24.6,66.4,12,71.7,-1.1,73.6C-14.2,75.5,-28.3,74,-40.8,67.6C-53.3,61.2,-64.1,49.9,-72.3,36.9C-80.5,23.9,-86,9.2,-84.3,-4.8C-82.6,-18.8,-73.7,-32.1,-63.1,-43.3C-52.5,-54.5,-40.2,-63.6,-27.4,-71.4C-14.6,-79.2,0,-85.7,14.7,-85.5C29.4,-85.3,44.7,-78.4,44.7,-76.4Z" transform="translate(100 100)" />
  </svg>
);

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-white">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 transform origin-top-right pointer-events-none" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div 
          className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ animationDelay: '2s' }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(250, 108, 211, 0.3)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Making the world a better place
              </motion.div>
              <motion.h1 
                className="text-5xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Empowering <motion.span 
                  className="gradient-text inline-block"
                  animate={{ backgroundPosition: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >Lives</motion.span>,<br />
                Building Futures.
              </motion.h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Join our mission to provide education, healthcare, and sustainable resources to communities in need worldwide.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link href="/donation">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="rounded-full px-8 text-base h-12 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                      Donate Now <Heart className="ml-2 w-4 h-4 fill-white/20" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/who-we-are">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12 hover:bg-secondary/50">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                       {/* Unsplash Avatar placeholders */}
                       <img 
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop`} 
                        alt="Supporter" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p>Joined by 10k+ supporters worldwide</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                {/* Unsplash: Happy children studying outdoors */}
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=80" 
                  alt="Children learning" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-display font-bold text-2xl">Education First Initiative</p>
                    <p className="opacity-90">Providing quality education to 500+ schools.</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Impact</p>
                    <p className="font-display font-bold text-2xl text-foreground">
                      $<CountUp end={2500000} prefix="" separator="," duration={2.5} /> Raised
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, count: 50, label: "Countries Reached", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Users, count: 120000, label: "Lives Impacted", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: Heart, count: 850, label: "Volunteers", color: "text-red-500", bg: "bg-red-50" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all text-center group"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-display font-bold text-foreground mb-2">
                  <CountUp end={stat.count} duration={2.5} separator="," />+
                </h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Highlights */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Our Core Mission</h2>
            <p className="text-lg text-muted-foreground">We focus on three key pillars to ensure sustainable development and lasting impact in the communities we serve.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Education",
                description: "Providing access to learning resources, scholarships, and school infrastructure.",
                img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
              },
              {
                title: "Healthcare Access",
                description: "Mobile clinics and medical camps reaching the most remote villages.",
                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
              },
              {
                title: "Clean Water",
                description: "Building wells and filtration systems to provide safe drinking water.",
                img: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?w=800&q=80"
              }
            ].map((item, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                  <Link href="/services">
                    <span className="text-white font-medium inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <Blob className="absolute top-0 right-0 w-96 h-96 text-primary/5 -translate-y-1/2 translate-x-1/2" />
        <Blob className="absolute bottom-0 left-0 w-96 h-96 text-accent/5 translate-y-1/2 -translate-x-1/2 rotate-180" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Your contribution can change a life today. Join thousands of others who are helping us build a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donation">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                Donate Now
              </Button>
            </Link>
            <Link href="/admission">
              <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg bg-white hover:bg-gray-50">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
