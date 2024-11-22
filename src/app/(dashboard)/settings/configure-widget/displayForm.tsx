"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/shadcn/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn/ui/select"
import { toast } from "sonner"

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
  font: z.enum(["inter", "manrope", "system"], {
    invalid_type_error: "Select a font",
    required_error: "Please select a font.",
  }),
  color: z.enum(["blue", "red", "yellow", "custom"], {
    invalid_type_error: "Select a color",
    required_error: "Please select a color.",
  }),
  customColor: z
    .string()
    .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color code.")
    .optional(),
})

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AppearanceFormValues> = {
  theme: "light",
}

export function AppearanceForm() {
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  })

  function onSubmit(data: AppearanceFormValues) {
    console.log("Submitted data:", data)
    toast("Preferences updated successfully!", {
      description: `Theme: ${data.theme}, Font: ${data.font}, Color: ${data.color}`,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo changes"),
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Font Selection */}
        <FormField
          control={form.control}
          name="font"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select a font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="manrope">Manrope</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Set the font you want to use in the dashboard.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Primary Color Selection */}
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Color</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select a color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blue">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#0075F2]" />
                        Blue
                      </div>
                    </SelectItem>
                    <SelectItem value="red">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-red-500" />
                        Red
                      </div>
                    </SelectItem>
                    <SelectItem value="yellow">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-yellow-400" />
                        Yellow
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Set the primary color for the dashboard.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Theme Selection */}
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Theme</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Select the theme for the dashboard.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update Preferences</Button>
      </form>
    </Form>
  )
}
