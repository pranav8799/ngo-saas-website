import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CreditCard, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const amounts = [
  { value: "25", label: "$25", impact: "Provides school supplies for 5 children" },
  { value: "50", label: "$50", impact: "Feeds a family for 2 weeks" },
  { value: "100", label: "$100", impact: "Provides clean water for a village for a month" },
  { value: "500", label: "$500", impact: "Sponsors a child's education for a year" },
];

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState("50");
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonate = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Thank You for Your Donation!",
        description: "Your generosity makes a huge difference. A receipt has been sent to your email.",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Story & Impact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-24">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Your Support Changes Lives
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                100% of your donation goes directly to our programs. We believe in complete transparency and maximum impact.
              </p>
              
              <div className="rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80" 
                  alt="Helping hands" 
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Secure & Encrypted</h3>
                    <p className="text-muted-foreground text-sm">Every transaction is protected with military-grade encryption.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Immediate Impact</h3>
                    <p className="text-muted-foreground text-sm">Funds are deployed within 7 days to where they are needed most.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Donation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold font-display mb-2">Select Amount</h2>
                <p className="text-muted-foreground">Choose how much you want to donate today.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {amounts.map((amount) => (
                  <button
                    key={amount.value}
                    onClick={() => setSelectedAmount(amount.value)}
                    className={`p-4 rounded-xl border-2 transition-all text-left relative overflow-hidden group ${
                      selectedAmount === amount.value
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-gray-100 hover:border-primary/50 text-foreground"
                    }`}
                  >
                    <div className="font-display font-bold text-2xl mb-1">{amount.label}</div>
                    <div className="text-xs opacity-80">{amount.impact}</div>
                    {selectedAmount === amount.value && (
                      <div className="absolute top-2 right-2 text-primary">
                        <Heart className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <Label className="mb-2 block">Custom Amount</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                  <Input 
                    type="number" 
                    placeholder="Enter custom amount" 
                    className="pl-8 h-12 rounded-xl text-lg font-semibold"
                    onChange={(e) => setSelectedAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold mb-4">Payment Method</h3>
                <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4">
                  <div>
                    <RadioGroupItem value="card" id="card" className="peer sr-only" />
                    <Label
                      htmlFor="card"
                      className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                    >
                      <CreditCard className="mb-3 h-6 w-6" />
                      Card
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                    <Label
                      htmlFor="paypal"
                      className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                    >
                      <div className="mb-3 font-bold italic">Pay<span className="text-blue-600">Pal</span></div>
                      PayPal
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                onClick={handleDonate} 
                disabled={isProcessing}
                size="lg" 
                className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/25 font-bold"
              >
                {isProcessing ? "Processing..." : `Donate $${selectedAmount}`}
              </Button>

              <div className="mt-6 flex justify-center gap-4 grayscale opacity-50">
                {/* Visual trust indicators */}
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
