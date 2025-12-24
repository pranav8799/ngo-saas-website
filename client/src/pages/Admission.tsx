import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAdmissionSchema } from "@shared/schema";
import { type InsertAdmission } from "@shared/schema";
import { useCreateAdmission } from "@/hooks/use-admissions";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function Admission() {
  const mutation = useCreateAdmission();
  
  const form = useForm<InsertAdmission>({
    resolver: zodResolver(insertAdmissionSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      programInterest: "",
      address: "",
      message: ""
    }
  });

  function onSubmit(data: InsertAdmission) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary opacity-90" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Admission Application</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join our community as a volunteer, beneficiary, or partner. Fill out the form below to get started.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100"
        >
          {mutation.isSuccess ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Application Submitted!</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for your interest. Our team will review your application and get back to you within 48 hours.
              </p>
              <Button onClick={() => mutation.reset()} variant="outline">
                Submit Another Application
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input type="date" className="h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" className="h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" className="h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="programInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Program of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl">
                              <SelectValue placeholder="Select a program" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="volunteering">Volunteering</SelectItem>
                            <SelectItem value="education">Education Support</SelectItem>
                            <SelectItem value="healthcare">Healthcare Assistance</SelectItem>
                            <SelectItem value="donation">Donation Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, City, Country" className="h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want to join us?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your motivation..." 
                          className="min-h-[150px] rounded-xl resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto rounded-xl px-12 h-14 text-lg font-semibold shadow-lg shadow-primary/25"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
