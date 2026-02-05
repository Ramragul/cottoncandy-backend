export const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'created': return '#3b82f6';         // blue
      case 'collected': return '#8b5cf6';       // purple
      case 'in progress': return '#f97316';     // orange
      case 'ready': return '#22c55e';           // green
      case 'out for delivery': return '#eab308';// yellow
      case 'completed': return '#6b7280';       // grey
      case 'cancelled': return '#ef4444';       // red
      default: return '#9ca3af';                // neutral
    }
  };
  