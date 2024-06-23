'use client'

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { CheckIcon, ClipboardIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'

export function EmailCopyButton() {
  const copy = 'ralexandrastoica@gmail.com'
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (!clicked) return
    setTimeout(() => setClicked(false), 3000)
  }, [clicked])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="my-1 h-6 p-1"
            onClick={() => {
              navigator.clipboard.writeText(copy)
              setClicked(true)
            }}
          >
            {copy}
            {clicked ? (
              <CheckIcon className="ml-2 h-3 w-3 animate-fadeIn" />
            ) : (
              <ClipboardIcon className="ml-2 h-3 w-3 animate-fadeIn" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>Click to copy</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
