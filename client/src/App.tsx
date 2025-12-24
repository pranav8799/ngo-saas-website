import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WhoWeAre from "@/pages/WhoWeAre";
import Services from "@/pages/Services";
import Admission from "@/pages/Admission";
import Donation from "@/pages/Donation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/who-we-are" component={WhoWeAre} />
      <Route path="/services" component={Services} />
      <Route path="/admission" component={Admission} />
      <Route path="/donation" component={Donation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
