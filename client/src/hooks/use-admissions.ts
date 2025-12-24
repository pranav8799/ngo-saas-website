import { useMutation } from "@tanstack/react-query";
import { api, type InsertAdmission } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateAdmission() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertAdmission) => {
      // Validate data against schema before sending
      const validated = api.admissions.create.input.parse(data);
      
      const res = await fetch(api.admissions.create.path, {
        method: api.admissions.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.admissions.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit admission request');
      }

      return api.admissions.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "We have received your admission request and will contact you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
