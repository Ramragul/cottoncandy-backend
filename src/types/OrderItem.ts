export interface OrderItem {
    // CC_Tailoring_Orders
    order_id: number;
    tailoring_details_id: number;
    delivery_details_id?: number;
  
    products_price?: number;
    security_deposit?: number;
    total_amount?: number;
  
    order_date?: string;
    order_status: string;
  
    user_id?: string;
    partner?: string;
  
    order_assignment?: string;
    updated_by?: string;
    last_updated_date?: string;
  
    payment_status?: string;
    payment_source?: string;
    payment_id?: string;
    payment_type?: string;
    payment_date?: string;
  
    created_at?: string;
  
    // CC_Tailoring_Order_Details
    tailoring_id?: number;
  
    name: string;
    email?: string;
    phone?: string;
  
    stitch_option?: string;
    custom_design?: string;
  
    address?: string;
    city?: string;
    pincode?: string;
  
    order_notes?: string;
  
    appointment_date: string;
  
    product_id?: string;
    product_image_url?: string;
  
    has_lining?: number;
    lining_price?: number;
  
    stitching_speed?: string;
    speed_price?: number;
  }
  