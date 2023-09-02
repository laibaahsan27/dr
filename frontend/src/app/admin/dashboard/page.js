'use client';
import React, { useEffect } from 'react'
import Link from 'next/link';

const page = () => {
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      window.location.href = '/admin';
    }
  }, []);
  return (
    <>
      <Link href="/admin/dashboard/offlineservice">
        
          <button>Get Offline Service Request</button>

      </Link>

      <Link href="/admin/dashboard/onlineservice">
        
          <button>Get online Service Request</button>

      </Link>

    </>
  )
}

export default page