import { CheckCircle, CircleXIcon, Clock } from "lucide-react"
import { PiHandDeposit, PiHandWithdraw } from "react-icons/pi"

export const CustomerStatus = [
    { value: "active", label: "Active", icon: CheckCircle, },
    { value: "inactive", label: "Inactive", icon: CircleXIcon, },
    { value: "pending", label: "Pending", icon: Clock, },
  ]
export const TransactionStatus = [
    { value: "completed", label: "Completed", icon: CheckCircle, },
    { value: "failed", label: "Failed", icon: CircleXIcon, },
    { value: "pending", label: "Pending", icon: Clock, },
  ]
  export const TransactionTypes = [
    { value: "deposit", label: "Deposit", icon: PiHandDeposit, },
    { value: "withdrawal", label: "Withdrawal", icon: PiHandWithdraw , },
  ]

  export const TeamRoles = [
    { value: "Moderator", label: "Moderator", },
    { value: "Viewer", label: "Viewer", },
    { value: "Admin", label: "Admin", },
    { value: "Editor", label: "Editor", },
    { value: "Super Admin", label: "Super Admin", },
  ]

  export const TeamAuth = [
    { value: "OAuth", label: "OAuth", },
    { value: "Password", label: "Password", },
    { value: "Single Sign-On", label: "Single Sign-On", },
  ]