import { toast } from "sonner"



export const handleClipboard = (label : string) => {
    navigator.clipboard.writeText(label)
    toast('API KEY Copied to clipboard.')
}
