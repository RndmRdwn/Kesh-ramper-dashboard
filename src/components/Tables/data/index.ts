import { CheckCircle, CircleXIcon, Clock } from "lucide-react"
import { PiHandDeposit, PiHandWithdraw } from "react-icons/pi"

export const TransactionStatus = [
    { value: "completed", label: "Completed", icon: CheckCircle, },
    { value: "failed", label: "Failed", icon: CircleXIcon, },
    { value: "pending", label: "Pending", icon: Clock, },
  ]
  export const TransactionTypes = [
    { value: "deposit", label: "Deposit", icon: PiHandDeposit, },
    { value: "withdrawal", label: "Withdrawal", icon: PiHandWithdraw , },
  ]