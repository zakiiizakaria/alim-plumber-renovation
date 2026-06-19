import { useEffect, useState, type FormEvent } from "react"
import { ClipboardList, Send } from "lucide-react"

import { BrandMark } from "@/components/BrandMark"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  COMPANY,
  DISPATCH_CATEGORY_LABELS,
  PROPERTY_TYPE_LABELS,
} from "@/lib/constants"
import { redirectToWhatsApp } from "@/lib/whatsapp"
import { hasErrors, validateLeadForm } from "@/lib/validation"
import type {
  DispatchCategory,
  LeadFormData,
  LeadFormErrors,
  PropertyArchitecture,
} from "@/types/lead"
import { cn } from "@/lib/utils"

const INITIAL_FORM: LeadFormData = {
  name: "",
  dispatchCategory: "emergency_plumbing",
  area: "",
  propertyType: "terrace",
  description: "",
}

interface LeadFormDialogProps {
  trigger?: React.ReactElement
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultDispatchCategory?: DispatchCategory
  title?: string
  description?: string
}

export function LeadFormDialog({
  trigger,
  open: controlledOpen,
  onOpenChange,
  defaultDispatchCategory = "renovation_inspection",
  title = "Request Free Renovation Inspection",
  description = "Complete the checklist below and we will respond on WhatsApp with availability and a tailored quote.",
}: LeadFormDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [form, setForm] = useState<LeadFormData>({
    ...INITIAL_FORM,
    dispatchCategory: defaultDispatchCategory,
  })
  const [errors, setErrors] = useState<LeadFormErrors>({})

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  useEffect(() => {
    if (open) {
      setForm((prev) => ({
        ...prev,
        dispatchCategory: defaultDispatchCategory,
      }))
    }
  }, [open, defaultDispatchCategory])

  const setOpen = (value: boolean) => {
    if (!isControlled) setInternalOpen(value)
    onOpenChange?.(value)
    if (!value) {
      setForm({ ...INITIAL_FORM, dispatchCategory: defaultDispatchCategory })
      setErrors({})
    }
  }

  const updateField = <K extends keyof LeadFormData>(
    key: K,
    value: LeadFormData[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateLeadForm(form)
    setErrors(nextErrors)
    if (hasErrors(nextErrors)) return

    redirectToWhatsApp(form)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? <DialogTrigger render={trigger} /> : null}
      <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <BrandMark variant="header" className="mb-1" />
          <DialogTitle className="flex items-center gap-2 text-lg">
            <ClipboardList className="size-5 text-primary" aria-hidden="true" />
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
          <div className="grid gap-2">
            <Label htmlFor="lead-name">Full Name</Label>
            <Input
              id="lead-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? (
              <p className="text-xs text-destructive">{errors.name}</p>
            ) : null}
          </div>

          <fieldset className="grid gap-2">
            <legend className="text-sm font-medium">
              Service Dispatch Category
            </legend>
            <div className="grid gap-2">
              {(
                Object.entries(DISPATCH_CATEGORY_LABELS) as [
                  DispatchCategory,
                  string,
                ][]
              ).map(([value, label]) => (
                <label
                  key={value}
                  className={cn(
                    "flex cursor-pointer items-start gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors",
                    form.dispatchCategory === value
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  <input
                    type="radio"
                    name="dispatchCategory"
                    value={value}
                    checked={form.dispatchCategory === value}
                    onChange={() => updateField("dispatchCategory", value)}
                    className="mt-0.5 accent-[oklch(0.6_0.25_280)]"
                  />
                  {label}
                </label>
              ))}
            </div>
            {errors.dispatchCategory ? (
              <p className="text-xs text-destructive">
                {errors.dispatchCategory}
              </p>
            ) : null}
          </fieldset>

          <div className="grid gap-2">
            <Label htmlFor="lead-area">Specific Area</Label>
            <Input
              id="lead-area"
              name="area"
              list="service-areas"
              placeholder="e.g. Ampang, Cheras, Cyberjaya"
              value={form.area}
              onChange={(e) => updateField("area", e.target.value)}
              aria-invalid={Boolean(errors.area)}
            />
            <datalist id="service-areas">
              {COMPANY.serviceAreas.map((area) => (
                <option key={area} value={area} />
              ))}
            </datalist>
            {errors.area ? (
              <p className="text-xs text-destructive">{errors.area}</p>
            ) : null}
          </div>

          <fieldset className="grid gap-2">
            <legend className="text-sm font-medium">
              Property Architecture
            </legend>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {(
                Object.entries(PROPERTY_TYPE_LABELS) as [
                  PropertyArchitecture,
                  string,
                ][]
              ).map(([value, label]) => (
                <label
                  key={value}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors",
                    form.propertyType === value
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  <input
                    type="radio"
                    name="propertyType"
                    value={value}
                    checked={form.propertyType === value}
                    onChange={() => updateField("propertyType", value)}
                    className="accent-[oklch(0.6_0.25_280)]"
                  />
                  <span className="text-xs sm:text-sm">{label}</span>
                </label>
              ))}
            </div>
            {errors.propertyType ? (
              <p className="text-xs text-destructive">{errors.propertyType}</p>
            ) : null}
          </fieldset>

          <div className="grid gap-2">
            <Label htmlFor="lead-description">Job Description</Label>
            <Textarea
              id="lead-description"
              name="description"
              rows={4}
              placeholder="Describe the leak, renovation scope, or urgency..."
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              aria-invalid={Boolean(errors.description)}
            />
            {errors.description ? (
              <p className="text-xs text-destructive">{errors.description}</p>
            ) : null}
          </div>

          <DialogFooter className="border-0 bg-transparent p-0 sm:justify-stretch">
            <Button type="submit" size="lg" className="w-full gap-2">
              <Send className="size-4" aria-hidden="true" />
              Submit via WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
