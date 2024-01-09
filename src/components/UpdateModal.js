import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import supabase from '@/supabase'

const UpdateDialog = ({ open, handleClose, prefillData, setRefresh }) => {
  const [data, setData] = useState(prefillData)

  useEffect(() => {
    setData(prefillData)
  }, [prefillData])
  const handleUpdate = async () => {
    const updatedData = {
      start_date: data?.start_date
        ? dayjs(data.start_date).format('YYYY-MM-DD')
        : null,
      end_date: data?.end_date
        ? dayjs(data.end_date).format('YYYY-MM-DD')
        : null,
      progress: data?.progress || 0,
      supervisor_name: data?.supervisor_name || null,
      project_name: data?.project_name || null,
      id: prefillData?.id,
    }

    try {
      // Send a POST request to update the data in the 'status' table
      const { data, error } = await supabase
        .from('status')
        .update(updatedData)
        .eq('id', prefillData.id) // Assuming prefillData contains the 'id' of the record to update

      if (error) {
        console.error('Error updating data:', error)
      } else {
        console.log('Data updated successfully:', data)
      }
    } catch (error) {
      console.error('Error updating data:', error.message)
    }

    // Close the dialog after updating
    setRefresh((prev) => !prev)
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      sx={{
        backgroundColor: '#F5F5F5',
      }}
    >
      <DialogTitle className="font-bold" sx={{ fontSize: '14px' }}>
        Enter Progress details
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            paddingY: '10px',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Actual Start Date"
              value={dayjs(data?.start_date) || null}
              onChange={(e) => setData((prev) => ({ ...prev, start_date: e }))}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  sx={{ margin: '8px', fontSize: '12px' }}
                />
              )}
              sx={{}}
            />
            <DatePicker
              label="Actual End Date"
              value={dayjs(data?.end_date) || null}
              onChange={(e) => setData((prev) => ({ ...prev, end_date: e }))}
              renderInput={(params) => (
                <TextField {...params} fullWidth sx={{ marginBottom: '8px' }} />
              )}
            />
          </LocalizationProvider>
          <TextField
            label="Progress (%)"
            type="number"
            fullWidth
            value={data?.progress}
            onChange={(e) =>
              setData((prev) => ({ ...prev, progress: e.target.value }))
            }
            sx={{ marginBottom: '8px' }}
          />
          <TextField
            label="Supervisor Name"
            fullWidth
            value={data?.supervisor_name || ''}
            onChange={(e) =>
              setData((prev) => ({ ...prev, supervisor_name: e.target.value }))
            }
            sx={{ marginBottom: '8px' }}
          />
          <TextField
            label="Project Name"
            fullWidth
            value={data?.project_name || ''}
            onChange={(e) =>
              setData((prev) => ({ ...prev, project_name: e.target.value }))
            }
            sx={{ marginBottom: '8px' }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" fullWidth>
          Cancel
        </Button>
        <Button onClick={handleUpdate} color="primary" fullWidth>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default UpdateDialog
