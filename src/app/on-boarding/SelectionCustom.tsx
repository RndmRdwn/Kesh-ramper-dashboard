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
            <SelectTrigger className="w-full rounded-lg border-primary/50 py-6  text-muted-foreground">
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
        {value : 'country_01', label : 'Country 01'},
        {value : 'country_02', label : 'Country 02'},
        {value : 'country_03', label : 'Country 03'},
        {value : 'country_04', label : 'Country 04'},
        {value : 'country_05', label : 'Country 05'},
    ]
  return (
    <div>
        <Select >
            <SelectTrigger className="w-full  rounded-lg border-primary/50 py-6  text-muted-foreground">
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
        {value : 'volume_01', label : 'Volume 01'},
        {value : 'volume_02', label : 'Volume 02'},
        {value : 'volume_03', label : 'Volume 03'},
        {value : 'volume_04', label : 'Volume 04'},
        {value : 'volume_05', label : 'Volume 05'},
    ]
  return (
    <div>
        <Select >
            <SelectTrigger className="w-full  rounded-lg border-primary/50 py-6  text-muted-foreground">
              <SelectValue placeholder={"Select a volume"} className="" />
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

export function SelectFundsSource({}: Props) {
    const industryOptions = [
        {value : 'source_01', label : 'Source 01'},
        {value : 'source_02', label : 'Source 02'},
        {value : 'source_03', label : 'Source 03'},
        {value : 'source_04', label : 'Source 04'},
        {value : 'source_05', label : 'Source 05'},
    ]
  return (
    <div>
        <Select >
            <SelectTrigger className="w-full  rounded-lg border-primary/50 py-6  text-muted-foreground">
              <SelectValue placeholder={"Select a source"} className="" />
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
            <SelectTrigger className="w-full rounded-lg border-primary/50 py-6  text-muted-foreground">
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

