import { useEffect, useState, type FormEvent } from "react"
import { ClipboardList, Send, MapPin, Home, MessageSquare, User } from "lucide-react"

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
  title = "Tanya Bajet & Pemeriksaan Percuma",
  description = "Sila isi butiran di bawah. Team ALIM akan hubungi anda semula melalui WhatsApp dengan anggaran harga & slot pemeriksaan.",
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
      <DialogContent className="max-h-[92svh] overflow-y-auto sm:max-w-xl border-t-4 border-t-brand-accent p-6 sm:p-8 gap-6 rounded-2xl bg-white shadow-2xl">
        <DialogHeader className="gap-2.5 pb-2 border-b border-slate-100">
          <div className="flex items-center justify-between">
            <BrandMark variant="header" className="mb-0" />
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-brand-orange/10 px-2.5 py-0.5 text-[10px] font-black text-brand-orange uppercase tracking-wider">
              Fast Response
            </span>
          </div>
          <DialogTitle className="flex items-center gap-2 text-xl font-extrabold text-brand-primary tracking-tight mt-2">
            <ClipboardList className="size-5 text-brand-accent" aria-hidden="true" />
            {title}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-6 mt-2" noValidate>
          {/* Full Name */}
          <div className="grid gap-2">
            <Label htmlFor="lead-name" className="flex items-center gap-1.5 font-bold text-slate-800">
              <User className="size-4 text-brand-primary" />
              Nama Penuh
            </Label>
            <Input
              id="lead-name"
              name="name"
              autoComplete="name"
              placeholder="Masukkan nama anda"
              className="h-11 rounded-xl border-slate-200 focus-visible:ring-brand-accent"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? (
              <p className="text-xs text-destructive font-semibold">{errors.name}</p>
            ) : null}
          </div>

          {/* Service Dispatch Category */}
          <fieldset className="grid gap-3">
            <legend className="text-sm font-bold text-slate-800 mb-1">
              Kategori Servis
            </legend>
            <div className="grid gap-2.5">
              {(
                Object.entries(DISPATCH_CATEGORY_LABELS) as [
                  DispatchCategory,
                  string,
                ][]
              ).map(([value, label]) => (
                <label
                  key={value}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-sm transition-all duration-200 select-none",
                    form.dispatchCategory === value
                      ? "border-brand-accent bg-brand-accent/5 ring-1 ring-brand-accent text-slate-900 shadow-sm"
                      : "border-slate-200 hover:border-brand-accent/40 bg-white"
                  )}
                >
                  <input
                    type="radio"
                    name="dispatchCategory"
                    value={value}
                    checked={form.dispatchCategory === value}
                    onChange={() => updateField("dispatchCategory", value)}
                    className="mt-0.5 size-4 accent-brand-accent shrink-0"
                  />
                  <span className="font-semibold text-slate-800 leading-snug">{label}</span>
                </label>
              ))}
            </div>
            {errors.dispatchCategory ? (
              <p className="text-xs text-destructive font-semibold">
                {errors.dispatchCategory}
              </p>
            ) : null}
          </fieldset>

          {/* Specific Area */}
          <div className="grid gap-2">
            <Label htmlFor="lead-area" className="flex items-center gap-1.5 font-bold text-slate-800">
              <MapPin className="size-4 text-brand-primary" />
              Kawasan / Lokasi
            </Label>
            <Input
              id="lead-area"
              name="area"
              list="service-areas"
              placeholder="cth: Ampang, Cheras, Kajang, Semenyih"
              className="h-11 rounded-xl border-slate-200 focus-visible:ring-brand-accent"
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
              <p className="text-xs text-destructive font-semibold">{errors.area}</p>
            ) : null}
          </div>

          {/* Property Architecture */}
          <fieldset className="grid gap-3">
            <legend className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <Home className="size-4 text-brand-primary" />
              Jenis Rumah
            </legend>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {(
                Object.entries(PROPERTY_TYPE_LABELS) as [
                  PropertyArchitecture,
                  string,
                ][]
              ).map(([value, label]) => (
                <label
                  key={value}
                  className={cn(
                    "flex cursor-pointer items-center justify-center gap-2 rounded-xl border p-3 text-center text-sm transition-all duration-200 select-none",
                    form.propertyType === value
                      ? "border-brand-accent bg-brand-accent/5 ring-1 ring-brand-accent text-slate-900 shadow-sm"
                      : "border-slate-200 hover:border-brand-accent/40 bg-white"
                  )}
                >
                  <input
                    type="radio"
                    name="propertyType"
                    value={value}
                    checked={form.propertyType === value}
                    onChange={() => updateField("propertyType", value)}
                    className="accent-brand-accent size-3.5"
                  />
                  <span className="font-semibold text-slate-800 text-xs sm:text-sm">{label}</span>
                </label>
              ))}
            </div>
            {errors.propertyType ? (
              <p className="text-xs text-destructive font-semibold">{errors.propertyType}</p>
            ) : null}
          </fieldset>

          {/* Job Description */}
          <div className="grid gap-2">
            <Label htmlFor="lead-description" className="flex items-center gap-1.5 font-bold text-slate-800">
              <MessageSquare className="size-4 text-brand-primary" />
              Keterangan Kerja / Masalah
            </Label>
            <Textarea
              id="lead-description"
              name="description"
              rows={4}
              placeholder="Ceritakan detail kerja atau kerosakan (cth: waterproofing bilik air bocor / nak pecah dinding dapur / paip sinki sumbat)..."
              className="rounded-xl border-slate-200 focus-visible:ring-brand-accent resize-y p-3.5 text-sm"
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              aria-invalid={Boolean(errors.description)}
            />
            {errors.description ? (
              <p className="text-xs text-destructive font-semibold">{errors.description}</p>
            ) : null}
          </div>

          {/* Dialog Footer */}
          <DialogFooter className="border-0 bg-transparent p-0 mt-2 sm:justify-stretch">
            <Button type="submit" size="lg" className="w-full h-12 gap-2.5 rounded-xl font-bold bg-brand-accent text-white hover:bg-brand-accent/90 shadow-md shadow-brand-accent/25 hover:shadow-lg hover:scale-[1.01] active:scale-98 transition-all duration-200 cursor-pointer">
              <Send className="size-4" aria-hidden="true" />
              Hantar via WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
