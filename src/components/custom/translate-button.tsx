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
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useMediaQuery } from "../../hooks/use-media-query"
import { Languages } from "lucide-react"
import { useEffect } from "react"
import { useRouter } from "@/i18n/navegation"
import { useTranslations } from "next-intl"

type Status = {
    value: string
    label: string
}

export function TranslateButton() {

  const t =  useTranslations('Languages');

  const statuses: Status[] = [
    {
      value: "en",
      label: t('english'),
    },
    {
      value: "es",
      label: t('spanish'),
    },
  ]

  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null)

  useEffect(() => {
    if (selectedStatus?.value) {
      router.push(selectedStatus.value)
    }
  }, [selectedStatus])

  function StatusList({
    setOpen,
    setSelectedStatus,
  }: {
    setOpen: (open: boolean) => void
    setSelectedStatus: (status: Status | null) => void
  }) {
    return (
      <Command>
        <CommandInput placeholder="Search Language..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {statuses.map((status) => (
              <CommandItem
                key={status.value}
                value={status.value}
                onSelect={(value) => {
                  setSelectedStatus(
                    statuses.find((s) => s.value === value) || null
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

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="m-auto">
            <Languages className="size-4 md:size-8 m-auto cursor-pointer hover:scale-125 transition-all" />
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
          <Languages className="size-4 md:size-8 m-auto cursor-pointer hover:scale-125 transition-all" />
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