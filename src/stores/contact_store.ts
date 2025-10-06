
import type { UserContactType } from "../types/user"
import { createStore } from "ripple-file-router"

// Create an empty default contact object
const defaultContact: UserContactType = {
  name: "",
  image: "",
  active: false,
  activity: "",
  type: "",
  number: "",
  count: 0,
  lead_source: "",
  rating: "",
  status: "",
  owner: ""
}

export const activeContactStore = createStore({ contact: defaultContact, active: false },{ persist: true, storageKey: "activeContact" }
)

export default activeContactStore

