'use client'

import { HTMLAttributes, Suspense, useEffect, useRef } from 'react'
import { Environment, OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import { ColorRepresentation, Vector3 } from 'three'

type CommonProps = { color?: ColorRepresentation; cameraPosition?: Vector3; environment?: boolean }

type ViewProps = HTMLAttributes<HTMLDivElement> & {
  orbit?: boolean
  ref?: React.RefObject<HTMLDivElement>
}

export const Common = ({ color, cameraPosition, environment }: CommonProps) => (
  <Suspense fallback={null}>
    <PerspectiveCamera makeDefault fov={75} near={0.1} far={1000} position={cameraPosition ?? [0, 0, 6]} />
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.1} />
    {environment && <Environment preset={'apartment'} backgroundBlurriness={0.5} />}
  </Suspense>
)

const View = ({ children, orbit, ref, ...props }: ViewProps) => {
  const localRef = useRef<HTMLDivElement>(null)
  const trackRef = ref ?? localRef

  useEffect(() => {
    if (ref && localRef.current) {
      ref.current = localRef.current
    }
  }, [ref])

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={trackRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
}
View.displayName = 'View'

export { View }
