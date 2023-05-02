export interface FilterInterface {
    [key: string]: string
  }
  
  export interface UserDCK {
    avatar: string
    created_at: string
    email: string
    gender: string | null
    name: string
  }

  export interface User {
  id: number,
  name: string,
  email: string,
  email_verified_at: Date,
  current_team_id: null,
  image: string,
  created_at: Date,
  phone: number,
  id_number: number,
  business_id: number,
  profile: string,
  status: string
  }

  export interface Business {
    id: number,
    business_name:string,
    phone: number,
    owner: string,
    owner_id: number,
    email: string,
    email_verified_at:Date,
    level_of_business: string,
    is_registered: Boolean,
    no_of_employees: number,
    registration_number:string,
    products_services_offered: string,
    avatar: string,
    remember_token: string,
    created_at: Date,
    updated_at: Date,
    operation_location: string,
    user_id: number,
    sub_category: string,
    currency: string
  }