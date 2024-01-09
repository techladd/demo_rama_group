import Heading from '@/components/Heading'
import MobileNavBar from '@/components/MobileNavBar'
import SupervisorTable from '@/components/SupervisorTable'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { Button } from '@mui/material'
import DonutChart from '@/components/Charts'
import YourComponent from '@/components/UpdateModal'
import UpdateDialog from '@/components/UpdateModal'
import supabase from '@/supabase'
const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [data, setData] = useState(null)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchData = async () => {
      try {
        const { data: status, error } = await supabase
          .from('status')
          .select('*')

        if (error) {
          console.error('Error fetching data:', error)
        } else {
          setData(status?.[0] || null)
        }
      } catch (error) {
        console.error('Error fetching data:', error.message)
      }
    }
    console.log('datmaina', data)
    // Call the fetch data function
    fetchData()
  }, [refresh])

  const prefillData = data

  const handleOpenDialog = () => {
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }
  return (
    <div className="flex flex-col">
      <MobileNavBar />
      <div className="flex flex-col p-[10px]">
        <div className="text-[12px] my-[18px]">
          <p>
            <b> Site Name:</b> {data?.project_name}
          </p>
          <p>
            <b> Site Engineer:</b> {data?.supervisor_name}
          </p>

          <p>
            <b> Start Date:</b> {data?.start_date}
          </p>

          <p>
            <b> End Date: </b> {data?.end_date}
          </p>
        </div>
        <Heading title="MS1: Site preparation and foundation" />
        <div className="text-[12px] my-[18px] text-[#4F4F4F] bg-[#F5F5F5] m-[-10px] p-[10px] px-[20px]">
          <p className="flex justify-between">
            <b> Scheduled Start date: </b> 2021-01-01{' '}
          </p>
          <p className="flex justify-between">
            <b> Scheduled End date: </b> 2023-01-01
          </p>
          <p className="flex justify-between">
            <b> Actual Start date: </b> {data?.start_date}
          </p>
          <p className="flex justify-between">
            <b> Actual End date: </b> {data?.end_date}
          </p>
        </div>
        <p className="text-[12px] font-bold">Overall progresss</p>
        <DonutChart value={data?.progress} />
        <p className="text-[12px] my-[20px]">
          {`Completion Status:  ${data?.progress} %`}
        </p>
        <div className="my-[20px] mx-[-10px]">
          <img src="/images.png" alt="graph" />
        </div>
        <div className="flex items-center justify-center">
          <Button
            className="bg-[#2563EB] text-[12px]"
            onClick={handleOpenDialog}
            variant="contained"
          >
            Update Progress
          </Button>
        </div>
        <Heading title="Milestone details" />
        <div className="my-[10px] mt-[20px] flex flex-row items-center ">
          <img src="/accordian.png" alt="graph" style={{ width: '90%' }} />
          <EditIcon className="ml-[10px] text-[#555555]" />
        </div>
        <div className="my-[10px]">
          <img src="/endAccordian.png" alt="graph" />
        </div>
        <div className="my-[5px]">
          <img src="/lock.png" alt="graph" />
        </div>
        <YourComponent />
        <UpdateDialog
          open={dialogOpen}
          handleClose={handleCloseDialog}
          prefillData={prefillData}
          setRefresh={setRefresh}
        />
      </div>
    </div>
  )
}

export default Index
