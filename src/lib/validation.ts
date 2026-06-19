import type { LeadFormData, LeadFormErrors } from "@/types/lead"

export function validateLeadForm(data: LeadFormData): LeadFormErrors {
  const errors: LeadFormErrors = {}

  if (!data.name.trim()) {
    errors.name = "Sila isi nama anda."
  }

  if (!data.dispatchCategory) {
    errors.dispatchCategory = "Sila pilih kategori servis di atas."
  }

  if (!data.area.trim()) {
    errors.area = "Sila masukkan kawasan / lokasi anda."
  }

  if (!data.propertyType) {
    errors.propertyType = "Sila pilih jenis rumah anda."
  }

  if (!data.description.trim()) {
    errors.description = "Sila nyatakan masalah paip atau skop renovation anda."
  } else if (data.description.trim().length < 10) {
    errors.description = "Sila tulis sekurang-kurangnya 10 aksara supaya kami mudah memahami masalah anda."
  }

  return errors
}

export function hasErrors(errors: LeadFormErrors): boolean {
  return Object.keys(errors).length > 0
}

