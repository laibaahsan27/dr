"use client"
import React, { useEffect } from 'react'

const page = () => {

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      window.location.href = '/admin';
    }
  }, []);

  return (
    <div>page</div>
  )
}

export default page