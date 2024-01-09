import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// import BuildingIcon from './buildingIcon.svg';
import SvgIcon from '@mui/material/SvgIcon';

const tableStyles = {
  border: 'none', // Remove borders from the table
};

const headerCellStyle = {
  borderBottom: 'none', // Remove underline from header cells
};

function createData(unit, priority, status, supervisor) {
  return { unit, priority, status, supervisor };
}

const BuildingSvgIcon = (props) => (
  <SvgIcon {...props}>
    <img src={"/buildingIcon.svg"} alt="Building" width="24" height="24" />
  </SvgIcon>
);

const projectsData = [
  createData(1, 'Low', '60%', 'Aditya Mittal'),
  createData(2, 'High', '35%', 'Riya Choudhary'),
  createData(3, 'Medium', '76%', 'Krishna Dutta'),
  createData(4, 'Low', '44%', 'Vibhav Sawant'),

];

export default function SupervisorTable({ color }) {
  return (
    <TableContainer sx={{ marginY: "20px" }} >
      <Table sx={{ maxWidth: 300, ...tableStyles }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ ...headerCellStyle }}>
              <Typography variant="subtitle4" fontWeight="bold" sx={{ fontSize: '12px' }}>
                Type
              </Typography>
            </TableCell>
            <TableCell align="right" sx={{ ...headerCellStyle }}>
              <Typography variant="subtitle4" fontWeight="bold" sx={{ fontSize: '12px' }}>
                Unit
              </Typography>
            </TableCell>
            <TableCell align="right" sx={{ ...headerCellStyle }}>
              <Typography variant="subtitle4" fontWeight="bold" sx={{ fontSize: '12px' }}>
                Priority
              </Typography>
            </TableCell>
            <TableCell align="right" sx={{ ...headerCellStyle }}>
              <Typography variant="subtitle4" fontWeight="bold" sx={{ fontSize: '12px' }}>
                Status
              </Typography>
            </TableCell>
            <TableCell align="right" sx={{ ...headerCellStyle }}>
              <Typography variant="subtitle4" fontWeight="bold" sx={{ fontSize: '12px' }}>
                Supervisor
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projectsData.map((row) => (
            <TableRow key={row.unit}>
              <TableCell>
                <Stack direction="column" spacing={0.25}>
    <img src={"/buildingIcon.svg"} alt="Building" width="24" height="24" />
                </Stack>
              </TableCell>
              <TableCell>
                <Stack direction="column" spacing={0.25}>
                  {row.unit}
                </Stack>
              </TableCell>
              <TableCell>
                <Stack direction="column" spacing={0.25}>
                  {row.priority}
                </Stack>
              </TableCell>
              <TableCell>
                <Stack direction="column" spacing={0.25}>
                  {row.status}
                </Stack>
              </TableCell>
              <TableCell>
                <Stack direction="column" spacing={0.25}>
                  {row.supervisor}
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
