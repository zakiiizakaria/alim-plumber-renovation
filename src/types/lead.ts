export type DispatchCategory = "emergency_plumbing" | "renovation_inspection"

export type PropertyArchitecture = "condo" | "terrace" | "shop_office"

export interface LeadFormData {
  name: string
  dispatchCategory: DispatchCategory
  area: string
  propertyType: PropertyArchitecture
  description: string
}

export interface LeadFormErrors {
  name?: string
  dispatchCategory?: string
  area?: string
  propertyType?: string
  description?: string
}
