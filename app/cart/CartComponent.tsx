'use client'
import { CameraControls } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { button, buttonGroup, Leva, useControls } from 'leva'
import { DEG2RAD } from 'three/src/math/MathUtils.js'
import { Group, Object3DEventMap, Vector3 } from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import dynamic from 'next/dynamic'

export const CartComponent = ({}) => {
  const cameraControlsRef = useRef<CameraControls>(null!)
  const carRef = useRef<Group<Object3DEventMap>>(null!)
  const Cart = dynamic(() => import('@/components/canvas/Models').then((mod) => mod.Cart), { ssr: false })
  const rotateCamera = () => {
    cameraControlsRef.current?.rotate(DEG2RAD * 0.1, 0, true)
  }
  useGSAP(() => {
    gsap.timeline({ repeat: -1, onRepeat: rotateCamera })
  })

  const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
      <div className='flex h-96 w-full flex-col items-center justify-center'>
        <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      </div>
    ),
  })
  const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

  const {} = useControls({
    label: 'Camera Controls',
    thetaGrp: buttonGroup({
      label: 'Rotation         dasd a d as   ',
      opts: {
        '+45º': () => cameraControlsRef.current?.rotate(45 * DEG2RAD, 0, true),
        '-90º': () => cameraControlsRef.current?.rotate(-90 * DEG2RAD, 0, true),
      },
    }),
    lookAtMotor: button(() =>
      cameraControlsRef.current?.setLookAt(0.0579922388379204, 2.1150204071489074, 5.505339191410302, 0, 0, 0, true),
    ),
    lookAtBack: button(() =>
      cameraControlsRef.current?.setLookAt(0.2044339892201191, 4.5409846797824835, 9.58638195698657, 0, 0, 0, true),
    ),
    lookAtFrontFar: button(() =>
      cameraControlsRef.current?.setLookAt(8.067032997772627, 6.368051718744217, -16.081155073706547, 0, 0, 0, true),
    ),
    lookAtFrontClose: button(() =>
      cameraControlsRef.current?.setLookAt(
        -0.035388982419012616,
        3.5940952123596013,
        -6.536212373813296,
        0,
        0,
        0,
        true,
      ),
    ),
    lookAtSteeringWheel: button(() =>
      cameraControlsRef.current?.setLookAt(0.10127984009380323, 4.419742668356005, -4.9446771394733755, 0, 0, 0, true),
    ),
    lookAtBackleft: button(() =>
      cameraControlsRef.current?.setLookAt(-2.6943185646935865, 0.8278881406833074, 8.004120549471846, 0, 0, 0, true),
    ),

    lookAtRightMiddle: button(() =>
      cameraControlsRef.current?.setLookAt(6.54559743461848, 3.3205228194221283, -1.488184186509365, 0, 0, 0, true),
    ),
  })

  return (
    <div className='md:h-128 flex size-full flex-col overflow-hidden rounded-xl md:flex-row'>
      <View className='size-full '>
        <Suspense fallback={null}>
          <CameraControls
            ref={cameraControlsRef}
            mouseButtons={{ left: 0, middle: 0, right: 0, wheel: 0 }}
            touches={{ one: 0, three: 0, two: 0 }}
          />
          <Cart ref={carRef} />
          <gridHelper position={-1.5} args={[50, 50, 0xc977c7, 'teal']} />
          <ambientLight intensity={0.5} />
          <Common cameraPosition={new Vector3(4, 3, 8)} environment />
        </Suspense>
      </View>
      <div className='md:max-w-45 pt-2 md:pl-2 md:pt-0'>
        <Leva titleBar={{ drag: false }} fill />
      </div>
    </div>
  )
}
export default CartComponent
