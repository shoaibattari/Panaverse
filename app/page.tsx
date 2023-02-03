"use client"

import Header from '@/components/Header'
import Tagline from '@/components/Tagline'
import CoreCourses from '@/components/Courses/CoreCourses'

import { Box } from '@chakra-ui/react'
import Web3Blockchain from '@/components/Courses/Web3.0(Blockchain)'
import WebBlockchainandMetaverseSpecialization from '@/components/Courses/Web3.0(AI.DL)'
import CloudNativeComputingSpecialization from '@/components/Courses/Web3.0(CloudNativeComputing)'

export default function page() {
  return (

    <Box as='div'>
    <Header />
    <Tagline />
    <CoreCourses />
    <Web3Blockchain />
    <WebBlockchainandMetaverseSpecialization />
    <CloudNativeComputingSpecialization />
    </Box>
  )
}
