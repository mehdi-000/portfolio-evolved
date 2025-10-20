'use client'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode
  href: string
  className?: string
  onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const useTransitionRouter = () => {
  const router = useRouter()

  const handleTransition = async (href: string) => {
    const body = document.querySelector('body')

    body?.classList.add('page-transition')

    await sleep(500)
    router.push(href)
    await sleep(500)

    body?.classList.remove('page-transition')
  }

  return { handleTransition }
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({ children, href, ...props }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isSamePage = href === pathname || href.split('#')[0] === pathname

    if (isSamePage) {
      return
    }

    e.preventDefault()
    const body = document.querySelector('body')

    body?.classList.add('page-transition')

    await sleep(500)
    router.push(href)
    await sleep(500)

    body?.classList.remove('page-transition')
  }

  return (
    <Link {...props} href={href} onClick={handleClick}>
      {children}
    </Link>
  )
}
