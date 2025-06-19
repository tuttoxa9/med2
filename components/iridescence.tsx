"use client"

interface IridescenceProps {
  className?: string
}

export default function Iridescence({ className = "" }: IridescenceProps) {
  return <div className={`w-full h-full ${className}`} />
}
