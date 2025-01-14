
import { Box, colors, Stack, Tab, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import CreateCanteen from './CreateCanteen'
import { TabContext, TabList, } from '@mui/lab'
import React, { useMemo } from 'react'
import { GetCanteenUserApi } from '../AllGetApi'
import RefecthButton from '../RefecthButton'
import { GetCanteenUser } from '../AllTypes'
import { CanteenUserColumn } from '../DataGridColumn/CanteenUserColumn'

const CanteenList = () => {

    const [value, setValue] = React.useState("0");

    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    const { data, isRefetching, refetch } = GetCanteenUserApi()


    const CanteenDataRows = useMemo(() => {
        if (!data) return []
        const canteenData = data?.canteens
        if (canteenData) return canteenData?.map((item: GetCanteenUser, idx: number) => {
            return {
                ...item,
                id: item?.id,
                idx: idx + 1
            }
        })


    }, [data])

    return (
        <Box sx={{
            m: 2,
            p: 2,
            width: "85vw",
            height: "80vh",
        }}>
            <Stack direction={"row"} justifyContent={"space-between"} >
                <Typography variant='h5' sx={{
                    color: "red", fontWeight: "bold",
                    fontFamily: "monospace",
                    fontStyle: "italic"
                }}>
                    Canteen List
                </Typography>
                <TabContext value={value}>
                    <Box sx={{ mb: -5 }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Canteen List" value="0" />
                            <Tab label="Create Canteen" value="1" />

                        </TabList>
                    </Box>
                </TabContext>
                <RefecthButton refetch={refetch} isRefetching={isRefetching} />
            </Stack>
            {value === "1" && (
                <CreateCanteen />
            )}
            {value === "0" && (
                <Box sx={{ height: "80vh", mt: 5, width: "100%", backgroundColor: colors.grey[100], p: 2, borderRadius: "10px" }}>

                    <DataGrid
                        rows={CanteenDataRows}
                        columns={CanteenUserColumn}
                        pageSizeOptions={[10, 20, 50, 100]}
                        sx={{
                            width: "100%"
                        }}
                    />

                </Box>
            )}

        </Box >
    )
}

export default CanteenList