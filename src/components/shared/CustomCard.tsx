import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../shadcn/ui/card'


type Props = {
  title: string,
  value: string,
  desc?: string,
}

const CustomCard = ({title, value, desc}: Props) => {
  return (
    <div>
       <Card className='rounded-md'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0  p-0 px-4">
                <CardTitle className="text-sm text-muted-foreground font-medium pt-3">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className='p-0 px-4 pb-3'>
                <div className="text-3xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">
                    {desc}
                </p>
            </CardContent>
        </Card>
    </div>
  )
}

export default CustomCard