import Heading from '@/components/Heading'
import MobileNavBar from '@/components/MobileNavBar'
import SupervisorTable from '@/components/SupervisorTable'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { useRouter } from 'next/navigation'

const Index = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col">
      <MobileNavBar />
      <div className="flex flex-col p-[10px]">
        <p>Welcome ,Raghav</p>
        <Heading title="Unit Test" />
        <SupervisorTable />
        <Heading title="Unit Details" />
        <div className="my-[20px]">
          <img src="/graph.png" alt="graph" />
        </div>
        <Heading title="Milestone details" />
        <div className="my-[10px] mt-[20px] flex flex-row items-center ">
          <img src="/accordian.png" alt="graph" style={{ width: '90%' }} />
          <EditIcon
            onClick={() => router.push('/update-project-details')}
            className="ml-[10px] text-[#555555]"
          />
        </div>
        <div className="my-[10px]">
          <img src="/detailAccordian.png" alt="graph" />
        </div>
        <div className="my-[5px]">
          <img src="/lock.png" alt="graph" />
        </div>
      </div>
    </div>
  )
}

export default Index
