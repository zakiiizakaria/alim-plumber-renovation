import type { LeadFormData, LeadFormErrors } from "@/types/lead"

export function validateLeadForm(data: LeadFormData): LeadFormErrors {
  const errors: LeadFormErrors = {}

  if (!data.name.trim()) {
    errors.name = "Please enter your name."
  }

  if (!data.dispatchCategory) {
    errors.dispatchCategory = "Please select a dispatch category."
  }

  if (!data.area.trim()) {
    errors.area = "Please enter your specific area."
  }

  if (!data.propertyType) {
    errors.propertyType = "Please select a property type."
  }

  if (!data.description.trim()) {
    errors.description = "Please describe the job or issue."
  } else if (data.description.trim().length < 10) {
    errors.description = "Please provide at least 10 characters."
  }

  return errors
}

export function hasErrors(errors: LeadFormErrors): boolean {
  return Object.keys(errors).length > 0
}
