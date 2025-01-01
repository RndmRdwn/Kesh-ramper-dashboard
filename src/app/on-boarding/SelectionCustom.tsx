import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/ui/select'
import { countries } from '@/lib/country-data'
import Image from 'next/image'
import React from 'react'


export function SelectIndustry() {
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

export function SelectCountry() {
  const CountryOptions=countries.map((country)=>({
        value:country.name,
            flag:country.flag,
            label:country.name
    }))

  return (
    <div>
        <Select >
            <SelectTrigger className="w-full  rounded-lg border-primary/50 py-6  text-muted-foreground">
              <SelectValue placeholder={"Select a country"} className="" />
            </SelectTrigger>
            <SelectContent className='w-64'>
              <SelectGroup>
                {CountryOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    <span className="flex items-center gap-2">
                        <Image
                              width={100}
                              height={100}
                              src={item.flag}
                              alt={`${item.label}`}
                              className="mr-2 h-4 w-6 object-cover"
                          />
                        {item.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
    </div>
  )
}
export function SelectVolume() {
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

export function SelectFundsSource() {
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

export function SelectLive() {
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

