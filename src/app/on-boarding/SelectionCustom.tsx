import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/ui/select'
import React from 'react'

type Props = {
}

export function SelectIndustry({}: Props) {
    const industryOptions = [
        {value : 'tech_industry', label : 'Tech Industry'},
        {value : 'finance_industry', label : 'Finance Industry'},
        {value : 'travel_industry', label : 'Travel Industry'},
        {value : 'industry_01', label : 'Industry 01'},
        {value : 'industry_02', label : 'Industry 02'},
        {value : 'industry_03', label : 'Industry 03'},
    ]
  return (
    <div>
        <Select >
            <SelectTrigger className="w-full rounded-lg border-primary/50 py-5  text-muted-foreground">
              <SelectValue placeholder={"Select an industry"} className="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {industryOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
    </div>
  )
}

export function SelectCountry({}: Props) {
    const industryOptions = [
        {value : 'tech_industry', label : 'Tech Industry'},
        {value : 'finance_industry', label : 'Finance Industry'},
        {value : 'travel_industry', label : 'Travel Industry'},
        {value : 'industry_01', label : 'Industry 01'},
        {value : 'industry_02', label : 'Industry 02'},
        {value : 'industry_03', label : 'Industry 03'},
    ]
  return (
    <div>
        <Select >
            <SelectTrigger className="w-full  rounded-lg border-primary/50 py-5  text-muted-foreground">
              <SelectValue placeholder={"Select a country"} className="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {industryOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
    </div>
  )
}
export function SelectVolume({}: Props) {
    const industryOptions = [
        {value : 'tech_industry', label : 'Tech Industry'},
        {value : 'finance_industry', label : 'Finance Industry'},
        {value : 'travel_industry', label : 'Travel Industry'},
        {value : 'industry_01', label : 'Industry 01'},
        {value : 'industry_02', label : 'Industry 02'},
        {value : 'industry_03', label : 'Industry 03'},
    ]
  return (
    <div>
        <Select >
            <SelectTrigger className="w-full  rounded-lg border-primary/50 py-5  text-muted-foreground">
              <SelectValue placeholder={"Select a country"} className="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {industryOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
    </div>
  )
}

export function SelectLive({}: Props) {
  return (
    <div>
        <Select defaultValue='days' >
            <SelectTrigger className="w-full rounded-lg border-primary/50 py-5  text-muted-foreground">
              <SelectValue className="" />
            </SelectTrigger>
            <SelectContent className='rounded-lg border-primary aria-selected:bg-primary selection:bg-primary '>
              <SelectGroup>
                  <SelectItem value={'days'}> Days </SelectItem>
                  <SelectItem value={'weeks'}> Weeks </SelectItem>
                  <SelectItem value={'months'}> Months </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
    </div>
  )
}

