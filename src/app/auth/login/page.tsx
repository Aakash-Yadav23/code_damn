"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { signIn } from "next-auth/react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

type FormData = z.infer<typeof formSchema>;

export default function Login() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="login max-w-[500px] w-full border p-10 rounded-lg">
        <div className="logo text-center py-10">
          <h1 className="text-5xl font-bold">Coders</h1>
        </div>
        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormDescription>Enter your email address.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormDescription>
                      Your password must be at least 8 characters long.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          <span className="text-center">or</span>
          <div className="flex flex-col gap-4 mt-2">
            <Button className="bg-[#4285F4] text-white">
              Sign in with Google
            </Button>
            <Button className="bg-[#333] text-white">
              Sign in with GitHub
            </Button>
          </div>

          <p className="flex text-sm items-center gap-2 mx-auto">
            new here?register
            <Link className="text-blue-900" href="/auth/register">
              here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
