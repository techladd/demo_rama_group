import BasicTable from '@/components/BestPerformingAsset'
import LeftMenuBar from '@/components/LeftMenuBar'
import NavBar from '@/components/NavBar'
import supabase from '@/supabase'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Index = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchData = async () => {
      try {
        const { data: status, error } = await supabase
          .from('status')
          .select('*')
        console.log('data', status)

        if (error) {
          console.error('Error fetching data:', error)
        } else {
          setData(status?.[0] || null)
        }
      } catch (error) {
        console.error('Error fetching data:', error.message)
      }
    }

    // Call the fetch data function
    fetchData()
  }, [])

  return (
    <div className="flex flex-col w-full h-[100%]">
      <NavBar />
      <div className="flex ">
        <LeftMenuBar />
        <div className="flex justify-start flex-col items-center">
          <img className=" w-full p-3 object-cover" alt="" src="/Info.png" />
          <div className="flex flex-row p-[10px] gap-[10px]  ">
            <div className="flex flex-col justify-center items-center bg-[#F5F5F5] p-[25px] rounded-xl gap-[20px]	">
              <p className="font-bold text-[24px]">Best Performing Projects</p>
              <BasicTable chartData={data} flag={true} />
            </div>
            <div className="flex flex-col justify-center items-center bg-[#F5F5F5] p-[25px] rounded-xl gap-[20px]	">
              <p className="font-bold text-[24px]">Least Performing Projects</p>
              <BasicTable color={'#FF0000'} flag={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
