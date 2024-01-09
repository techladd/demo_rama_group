import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const tableStyles = {
  border: 'none', // Remove borders from the table
}

const headerCellStyle = {
  borderBottom: 'none', // Remove underline from header cells
}

export default function BasicTable({ color, chartData, flag }) {
  const rows = [
    flag
      ? createData(
          chartData?.project_name,
          'Residential',
          'Raipur',
          `${chartData?.progress}%`
        )
      : createData('Rama Greens', 'Residential', 'Raipur', '87%'),
    createData('Rama High Street', 'Residential', 'Raipur', '80%'),
    createData('Rama Magneto', 'Commercial', 'Raipur', '77%'),
    createData('Rama Lifecity', 'Residential', 'Raipur', '73%'),
  ]
  function createData(project, type, location, progress) {
    return { project, type, location, progress }
  }
  return (
    <TableContainer>
      <Table sx={{ minWidth: 250, ...tableStyles }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ ...headerCellStyle }}>
              <Typography variant="subtitle2" fontWeight="bold">
                Project Name
              </Typography>
            </TableCell>
            <TableCell align="right" sx={{ ...headerCellStyle }}>
              <Typography variant="subtitle2" fontWeight="bold">
                Type
              </Typography>
            </TableCell>
            <TableCell align="right" sx={{ ...headerCellStyle }}>
              <Typography variant="subtitle2" fontWeight="bold">
                Location
              </Typography>
            </TableCell>
            <TableCell align="right" sx={{ ...headerCellStyle }}>
              <Typography variant="subtitle2" fontWeight="bold">
                Progress
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.project}>
              <TableCell component="th" scope="row">
                {row.project}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell style={{ color: color || '#16A000' }} align="right">
                {row.progress}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
