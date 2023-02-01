"use client"

import Header from '@/components/Header'
import Tagline from '@/components/Tagline'
import CoreCourses from '@/components/Courses/CoreCourses'

import { Box } from '@chakra-ui/react'
import DevelopingSmartContracts from '@/components/Courses/DevelopingSmartContracts'

export default function page() {
  return (

    <Box as='div'>
    <Header />
    <Tagline />
    <CoreCourses />
    <DevelopingSmartContracts />
    </Box>
  )
}
