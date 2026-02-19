import React, { useMemo } from 'react';
import {
  Box, Grid, Stat, StatLabel,
  StatNumber, Spinner, Text
} from '@chakra-ui/react';
import useGetAllOrders from '../../hooks/useGetAllOrders';
import { OrderItem } from '../../types/OrderItem';

export default function TailoringOperationsDashboard() {
  const { data: orders = [], isLoading } =
    useGetAllOrders('/api/cc/tailoring/orders?showAll=false');

  const metrics = useMemo(() => {
    const now = new Date();

    const urgent = orders.filter((o: OrderItem) => {
      const diff =
        (new Date(o.appointment_date).getTime() - now.getTime()) / (1000*3600);
      return diff <= 48 && diff > 0;
    });

    const unassigned = orders.filter(
      (o: OrderItem) => !o.order_assignment
    );

    const revenue = orders.reduce(
      (sum:number,o:OrderItem)=>sum + Number(o.total_amount || 0),0
    );

    return {
      total: orders.length,
      urgent: urgent.length,
      unassigned: unassigned.length,
      revenue
    };
  }, [orders]);

  if(isLoading) return <Spinner size="xl" />

  return (
    <Box p={8}>
      <Text fontSize="3xl" fontWeight="bold" mb={6}>
        Tailoring Operations Dashboard
      </Text>

      <Grid templateColumns="repeat(4,1fr)" gap={6}>
        <StatCard label="Active Orders" value={metrics.total}/>
        <StatCard label="Urgent (48h)" value={metrics.urgent} color="red.400"/>
        <StatCard label="Unassigned" value={metrics.unassigned} color="orange.400"/>
        <StatCard label="Revenue" value={`₹${metrics.revenue}`} color="green.400"/>
      </Grid>
    </Box>
  )
}

const StatCard = ({label,value,color}:any)=>(
  <Stat p={6} bg="white" borderRadius="xl"
    boxShadow="md"
    borderLeft="6px solid"
    borderColor={color || 'teal.400'}
  >
    <StatLabel>{label}</StatLabel>
    <StatNumber>{value}</StatNumber>
  </Stat>
);
