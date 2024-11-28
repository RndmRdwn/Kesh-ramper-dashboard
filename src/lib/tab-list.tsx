import { CheckCircle, CircleMinus, Clock } from "lucide-react"

export const settingTabs = [
    { id: "1", path: '/settings', name: 'Business Settings' },
    { id: "2", path: '/settings/teams', name: 'Teams' },
    { id: "3", path: '/settings/payments', name: 'Payments' },
    { id: "4", path: '/settings/balance', name: 'Balance' },
    { id: "5", path: '/settings/configure-widget', name: 'Configure Widget' },
    { id: "6", path: '/settings/integrations', name: 'Integrations' },
    { id: "7", path: '/settings/developers', name: 'Developer', 
            sub: [
                { path: '/settings/developers', name: 'API settings' },
                { path: '/settings/developers/api_docs', name: 'API Docs' },
                { path: '/settings/developers/web_hooks', name: 'Webhooks' },
            ]
         },
]


export const customerStatus = [
    {value : 'inactive' , label: 'Inactive', icon: CircleMinus,},
    {value : 'active' , label: 'Active', icon: CheckCircle,},
    {value : 'pending' , label: 'Pending', icon: Clock ,},
]