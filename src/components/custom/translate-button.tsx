"use client"

import * as React from "react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useMediaQuery } from "../../hooks/use-media-query"
import { Languages } from "lucide-react"
import { useEffect } from 'react';
import { useRouter } from "@/i18n/navegation"

type Status = {
  value: string
  label: string
}

const statuses: Status[] = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "es",
    label: "Espanish",
  },
]


export function TranslateButton() {
  const router =  useRouter();
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  )
  useEffect(() => {
    if (selectedStatus?.value) {
      router.push(selectedStatus.value)
    }
  }, [selectedStatus])
  

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="m-auto">
            {selectedStatus?.label ? <>{<Languages className="size-4 md:size-8 m-auto cursor-pointer hover:scale-125 transition-all" />}</> : <Languages className="size-4 md:size-8 m-auto cursor-pointer hover:scale-125 transition-all" />}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="m-auto">
          {selectedStatus?.label ? <>{<Languages className="size-4 md:size-8 m-auto cursor-pointer hover:scale-125 transition-all" />}</> : <Languages className="size-4 md:size-8 m-auto cursor-pointer hover:scale-125 transition-all" />}
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void
  setSelectedStatus: (status: Status | null) => void
}) {
  return (
    <Command>
      <CommandInput placeholder="Search Languague..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(
                  statuses.find((priority) => priority.value === value) || null
                )
                setOpen(false)
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
