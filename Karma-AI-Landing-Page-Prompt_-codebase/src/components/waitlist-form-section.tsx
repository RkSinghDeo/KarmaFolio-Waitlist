"use client";

import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Check, Lock, AlertCircle, LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ConfirmationSuccessBlock } from "@/components/blocks/confirmation-success-block";

const waitlistFormSchema = z.object({
  email: z.string({ required_error: "Email is required." }).email({
    message: "Please enter a valid email address.",
  })
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

export default function WaitlistFormSection() {
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: WaitlistFormValues) {
    setIsSubmitting(true);
    setSubmissionError(null);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to join waitlist. Try again.");
      }
      setFormState("success");
    } catch (error) {
      if (error instanceof Error) {
        setSubmissionError(error.message);
      } else {
        setSubmissionError("An unknown error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="waitlist-form" className="relative w-full bg-background py-20 md:py-28 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 h-full w-full"
        style={{
          background:
            "radial-gradient(ellipse 95% 80% at 50% -12%, rgba(143, 171, 146, 0.09), rgba(255,255,255,0.82) 60%, #fff 100%)"
        }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Join the Giving Revolution
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary md:text-xl" style={{ color: 'var(--color-primary)' }}>
          Be among the first to experience AI-powered charitable giving. Get early access and exclusive updates.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="flex -space-x-2 overflow-hidden">
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-slate-200"></div>
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-slate-300"></div>
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-slate-400"></div>
          </div>
          <p className="text-sm font-medium text-primary">
            Be one of the first to build your <span className="font-bold">Karmafolio</span>
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <AnimatePresence mode="wait">
            {formState === "idle" ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Form {...form}>
                  <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="relative rounded-xl bg-background p-2 shadow-xl shadow-primary/10 ring-1 ring-border/50 sm:flex sm:items-start sm:gap-2 flex-col sm:flex-row gap-4"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="relative w-full sm:w-auto sm:flex-1">
                          <FormLabel className="sr-only">Email address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="Enter your email address"
                              className="h-14 w-full rounded-lg border border-border shadow-sm bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[var(--color-sage)] sm:text-sm transition"
                              aria-label="Email address for waitlist"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage className="absolute left-0 top-full pt-1 pl-4 text-left text-sm" />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="h-14 px-8 w-full sm:w-auto mt-4 sm:mt-0 font-semibold text-base bg-accent text-white hover:brightness-110 transition flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (<LoaderCircle className="animate-spin h-5 w-5" />) : null}
                      Join Waitlist
                    </Button>
                  </form>
                </Form>
                {submissionError && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center justify-center gap-2 text-sm text-destructive"
                  >
                    <AlertCircle className="h-4 w-4" /> {submissionError}
                  </motion.p>
                )}
                 <p className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground sm:mt-4">
                    <Lock className="h-3 w-3 text-[var(--color-sage)]" aria-hidden="true" />
                    We respect your privacy. Unsubscribe at any time.
                 </p>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="relative flex flex-col items-center justify-center rounded-xl p-0 text-center max-w-md mx-auto w-full min-h-[220px] md:min-h-[210px] bg-transparent border-0 shadow-none"
              >
                <ConfirmationSuccessBlock />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Embedded Google Form below the default waitlist form */}
      </div>
    </section>
  );
}