'use client'

import { teamsColumn } from '@/components/Tables/columns/teamsColumn'
import { DataTable } from '@/components/Tables/Main-table'
import React from 'react'
import { TeamsData } from './data'

const TeamsTable = () => {

  return (
    <div className='w-full grid'>
        <DataTable columns={teamsColumn} title='Teams' searchTitle='teams members' data={TeamsData}/>

    </div>
  )
}

export default TeamsTable