
export  interface User {
     name: string;
  image: string;
  active: boolean;
  activity: string;

}



export type UpNextItem = {
  title: string
  desc: string
  active: boolean
}

export type LeadScore = {
  score: number
  grade: string
  status: string
}

export type TimelineItem = {
  title: string
  time: string
}

export type RelationItem = {
  name: string
  relation: string
}

export type ContactItem = {
  name: string
  role: string
  company: string
  email: string
  phone: string
}

export type UserContactType = {
  name: string
  image: string
  active: boolean
  activity: string
  type: string
  number: string
  count: number
  lead_source: string
  rating: string
  status: string
  owner: string

  contacts?: ContactItem[]
  upNext?: UpNextItem[]
  leadScore?: LeadScore
  timeline?: TimelineItem[]
  relations?: RelationItem[]
}



export default  UserContactType

