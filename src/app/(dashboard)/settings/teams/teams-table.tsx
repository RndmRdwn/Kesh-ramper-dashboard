'use client'

import { teamsColumn } from '@/components/Tables/columns/teamsColumn'
import { DataTable } from '@/components/Tables/Main-table'
import React from 'react'
import { TeamsData } from './data'

type Props = {}

const TeamsTable = (props: Props) => {

  return (
    <div className='w-full grid'>
        <DataTable columns={teamsColumn} title='Teams' searchTitle='teams' data={TeamsData}/>

    </div>
  )
}

export default TeamsTable