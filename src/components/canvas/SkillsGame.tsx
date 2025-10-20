'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { Text } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { techIcons } from '../UsedTechList'
import { randInt } from 'three/src/math/MathUtils.js'
import { useFrame, useThree } from '@react-three/fiber'
import { ShownSkills } from '@/components/ShownSkills'

export const curvePath = [
  10.136184463414924, -1.374508746897471, 10.384881573913269, 9.1152593889854714, -1.374508746897471,
  8.5846792797570011, 9.0669355709754882, -1.0665123466336568, 5.8937771631608156, 10.151040177840205,
  -0.65913653144937956, 3.4340491740541346, 10.806779203170416, 1.8859391007298545, 0.46855774212986023,
  10.761433540147586, 2.8724172201359197, -1.2811838605587311, 9.6195923104445065, 2.8724172201359197,
  -3.2833099941904766, 6.9763020889151646, 2.7659257976905427, -4.7591958908830172, 6.0461277891353697,
  1.0727045302089879, -6.6638740164090482, 7.3472235778544794, -1.8228856326635698, -9.0685043046185623,
  7.226367212900791, -1.8228856326635698, -10.499536640855691, 5.8354566696263914, -1.8228856326635698,
  -12.039219379199908, 3.6532357452141353, -0.20463983570573391, -13.87695442281038, -0.30169589630131455,
  1.5965000671484342, -14.879986418947327, -2.8925694230502157, 2.2971364614427481, -13.892095587598131,
  -4.537672295357936, 4.5863515759659208, -12.140831652074551, -6.1287913464117594, 5.9653814634119815,
  -8.9776527318875896, -6.0120301606452813, 4.4081161943855998, -6.712084358394045, -5.2138252159038974,
  2.820894808418279, -4.4532820412085607, -2.3424712835109611, 2.2032065005086259, -3.0788773693500198,
  -0.0076956453915433265, 1.8931797788880202, -1.6577070662471063, -0.24767503988481437, 2.8845808465856684,
  0.073915859214221724, -2.2174044353598896, 4.2415524507318576, 2.215992718290742, -3.4526531678364756,
  3.0615192023340851, 4.7922404932096558, -3.7356278971556445, 1.4054080369354316, 7.8432021841434629,
  -3.4003734463804118, 1.1924069108769393, 9.2464090886227073, -1.8851803760476225, 1.5269331003449989,
  10.306083896408374, 0.01071077144031829, 2.1101821577522295, 10.490880699847727, 0.42562058195647001,
  2.2759939598834387, 11.613129436580291, 0.096405262182225115, 0.032317784084054391, 16.223455375061565,
  2.3458797884520433, 0.38907275257695584, 19.91188266079584, 5.7018400098488771, 1.73337964747396, 20.615481586999959,
  7.9720939736751824, 1.73337964747396, 19.303399329816457, 9.8672362721095652, 0.090083018057025177,
  16.893338541618121, 11.225959519544134, -1.374508746897471, 14.279002555560753, 11.288646925965876,
  -1.374508746897471, 11.926359497447137, 10.136184463414924, -1.374508746897471, 10.384881573913269,
]

export const points = []
for (let i = 0; i < curvePath.length; i += 3) {
  points.push(new THREE.Vector3(curvePath[i], curvePath[i + 1], curvePath[i + 2]))
}

export const Camera = () => {
  const { camera } = useThree()
  const curvePath = new THREE.CatmullRomCurve3(points)

  useFrame((state) => {
    const time = state.clock.elapsedTime * 0.1
    const looptime = 9
    const p = (time % looptime) / looptime
    const pos = curvePath.getPointAt(p)
    const lookAt = curvePath.getPointAt((p + 0.03) % 1)

    camera.position.copy(pos)
    camera.lookAt(lookAt)
  })
  return (
    <group>
      <perspectiveCamera />
    </group>
  )
}

type LaserWithTarget = {
  id: number
  position: THREE.Vector3
  impactPos?: THREE.Vector3
  skill?: string
  butterflyId?: number
  hitObjectRef?: THREE.Object3D
  isExploding?: boolean
  scale?: number
  opacity?: number
  shot?: boolean
  direction?: THREE.Vector3
  impactColor?: THREE.Color
}

export const Crosshair = (props: {
  ref: React.RefObject<THREE.Group>
  butterfliesGroupRef: React.RefObject<THREE.Group>
  shotSkillsRef: React.RefObject<Set<string>>
}) => {
  const { pointer, camera, raycaster } = useThree()
  const [lasers, setlasers] = useState<Array<LaserWithTarget>>([])
  const [collectedSkills, setCollectedSkills] = useState<Array<{ id: number; skill: string; position: THREE.Vector3 }>>(
    [],
  )

  useFrame(() => {
    camera.add(props.ref.current)
    props.ref.current.position.set(pointer.x * 2, pointer.y * 2, -0.9)

    const crosshairPos = new THREE.Vector3()
    if (props.ref.current) {
      crosshairPos.setFromMatrixPosition(props.ref.current.matrixWorld)
    }

    setlasers((prevLasers) =>
      prevLasers
        .map((laser) => {
          const laserDirection = laser.direction || new THREE.Vector3()
          if (!laser.direction) {
            laserDirection.subVectors(crosshairPos, camera.position).normalize().multiplyScalar(0.2)
          }

          if (laser.isExploding) {
            const currentScale = laser.scale || 1
            const currentOpacity = laser.opacity || 1

            if (currentOpacity > 0.01) {
              return {
                ...laser,
                scale: currentScale + 0.33,
                opacity: currentOpacity * 0.55,
              }
            } else {
              return null
            }
          }

          const newPosition = laser.position.clone().add(laserDirection)

          if (laser.impactPos && laser.hitObjectRef && props.butterfliesGroupRef.current && !laser.isExploding) {
            const distanceToTarget = newPosition.distanceTo(laser.impactPos)

            if (distanceToTarget < 0.5) {
              props.butterfliesGroupRef.current.remove(laser.hitObjectRef)

              return {
                ...laser,
                position: laser.impactPos.clone(),
                hitObjectRef: undefined,
                isExploding: true,
                scale: 1.5,
                opacity: 1.0,
                impactColor: new THREE.Color(0x3d2fd4),
              }
            }
          }

          return {
            ...laser,
            position: newPosition,
          }
        })
        .filter((laser) => {
          if (!laser) return false
          if (laser.isExploding) return true
          const distanceFromCamera = laser.position.distanceTo(camera.position)
          return distanceFromCamera < 50
        }),
    )
  })

  const handleClick = () => {
    if (!props.ref.current || !props.butterfliesGroupRef.current) return

    const worldPosition = new THREE.Vector3()
    props.ref.current.getWorldPosition(worldPosition)

    const direction = new THREE.Vector3()
    direction.subVectors(worldPosition, camera.position).normalize()
    raycaster.set(camera.position, direction)

    const intersects = raycaster.intersectObjects(props.butterfliesGroupRef.current.children, true)

    const initialDirection = new THREE.Vector3()
    initialDirection.subVectors(worldPosition, camera.position).normalize().multiplyScalar(0.2)

    let newLaser: LaserWithTarget = {
      id: randInt(0, 1000000),
      position: worldPosition.clone(),
      scale: 1,
      opacity: 1,
      isExploding: false,
      impactPos: undefined,
      shot: false,
      direction: initialDirection,
      impactColor: undefined,
    }

    if (intersects.length > 0) {
      let hitObject = intersects[0].object

      while (hitObject && !hitObject.userData.skill) {
        hitObject = hitObject.parent as THREE.Object3D
      }

      if (hitObject?.userData.skill && hitObject.userData.id !== undefined) {
        const skill = hitObject.userData.skill
        const butterflyId = hitObject.userData.id

        newLaser.impactPos = hitObject.position.clone()
        newLaser.skill = skill
        newLaser.butterflyId = butterflyId
        newLaser.hitObjectRef = hitObject
        newLaser.shot = true

        setCollectedSkills((prev) => [
          ...prev,
          {
            id: butterflyId + randInt(0, 1000000),
            skill: skill,
            position: newLaser.impactPos.clone(),
          },
        ])
      }
    }

    setlasers((prevLasers) => [...prevLasers, newLaser])
    props.shotSkillsRef.current.add(newLaser.skill)
  }

  return (
    <>
      <group position={[pointer.x * 2, pointer.y * 2, -0.9]} ref={props.ref} onClick={handleClick}>
        <line>
          <bufferGeometry>
            <bufferAttribute
              attach='attributes-position'
              count={2}
              array={new Float32Array([-0.05, 0, 0, -0.14, 0, 0])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={0x33c4c0} />
        </line>
        <line>
          <bufferGeometry>
            <bufferAttribute
              attach='attributes-position'
              count={2}
              array={new Float32Array([0.05, 0, 0, 0.14, 0, 0])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={0x33c4c0} />
        </line>
        <line>
          <bufferGeometry>
            <bufferAttribute
              attach='attributes-position'
              count={2}
              array={new Float32Array([0, -0.05, 0, 0, -0.14, 0])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={0x33c4c0} />
        </line>
        <line>
          <bufferGeometry>
            <bufferAttribute
              attach='attributes-position'
              count={2}
              array={new Float32Array([0, 0.05, 0, 0, 0.14, 0])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={0x33c4c0} />
        </line>
      </group>

      <group>
        {lasers.map((laser) => (
          <mesh key={laser.id} position={laser.position} scale={laser.scale || 1}>
            <sphereGeometry args={[0.15, 8, 8]} />
            <meshBasicMaterial
              color={laser.impactColor || '#3d2fd4'}
              transparent={laser.isExploding}
              opacity={laser.isExploding ? laser.opacity || 1 : 1}
            />
          </mesh>
        ))}
      </group>

      <Suspense fallback={null}>
        {collectedSkills.map((skillItem) => (
          <SkillText key={skillItem.id} skillItem={skillItem} camera={camera} />
        ))}
      </Suspense>
    </>
  )
}

const SkillText = ({
  skillItem,
  camera,
}: {
  skillItem: { id: number; skill: string; position: THREE.Vector3 }
  camera: THREE.Camera
}) => {
  const textRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position)
    }
  })

  return (
    <Text ref={textRef} position={skillItem.position} fontSize={0.1} color='#33c4c0' scale={0.5}>
      {skillItem.skill}
    </Text>
  )
}

const Butterflies = ({
  butterflies,
  nodes,
  butterfliesGroupRef,
}: {
  butterflies: Array<{ id: number; position: THREE.Vector3; skill: string }>
  nodes: any
  butterfliesGroupRef: React.RefObject<THREE.Group>
}) => {
  return (
    <group ref={butterfliesGroupRef}>
      {butterflies.map((butterfly) => (
        <Butterfly key={butterfly.id} butterfly={butterfly} nodes={nodes} />
      ))}
    </group>
  )
}

const Butterfly = ({
  butterfly,
  nodes,
}: {
  butterfly: { id: number; position: THREE.Vector3; skill: string }
  nodes: any
}) => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.02
      groupRef.current.rotation.z += 0.02
    }
  })

  return (
    <group ref={groupRef} position={butterfly.position} userData={{ skill: butterfly.skill, id: butterfly.id }}>
      <mesh
        geometry={(nodes.Curve033_2 as THREE.Mesh).geometry}
        material={
          new THREE.MeshBasicMaterial({
            color: 0x2f4ad4,
            transparent: false,
            opacity: 0.5,
          })
        }
      />
      <mesh
        geometry={(nodes.Curve033_3 as THREE.Mesh).geometry}
        material={
          new THREE.MeshBasicMaterial({
            color: 0x3d2fd4,
            transparent: false,
            opacity: 0.0,
          })
        }
      />
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial transparent opacity={0.0} />
      </mesh>
    </group>
  )
}
export const NewSkillsGame = () => {
  const { nodes } = useGLTF('/butterfly.glb')
  const [butterflies, setButterflies] = useState<Array<{ id: number; position: THREE.Vector3; skill: string }>>([])
  const butterfliesGroupRef = useRef<THREE.Group>(null)
  const shotSkills = useRef(new Set<string>())
  const skills = [...Object.keys(techIcons)]
  const crosshairs = useRef<THREE.Group>(null)

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

  useEffect(() => {
    const tubeGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 222, 3, 16, true)
    const newButterflies = []

    for (let i = 0; i < 50; i++) {
      const p = (i / 50 + Math.random() * 0.9) % 1
      const pos = tubeGeo.parameters.path.getPointAt(p)
      pos.x += (Math.random() - 0.5) * 2
      pos.z += (Math.random() - 0.5) * 2

      newButterflies.push({
        id: i,
        position: pos,
        skill: skills[randInt(0, skills.length - 1)],
      })
    }

    setButterflies(newButterflies)
  }, [])

  return (
    <>
      <div className='flex w-full gap-8'>
        <div className='flex-1 bg-gradient-to-br from-purple-800/5 to-cyan-400/5 border border-pink/5 rounded-2xl shadow-lg'>
          <div className='relative w-full cursor-none' style={{ height: '600px' }}>
            <View className='absolute inset-0 w-full h-full'>
              <Suspense fallback={null}>
                <fogExp2 attach='fog' color='black' density={0.3} />
                <mesh>
                  <tubeGeometry args={[new THREE.CatmullRomCurve3(points), 222, 3, 16, true]} />
                  <meshBasicMaterial transparent opacity={0.0} side={THREE.BackSide} />
                </mesh>
                {/*
            <line>
            <edgesGeometry args={[new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 222, 3, 16, true)]} />
            <lineBasicMaterial color={'#3d2fd4'} />
            </line>
            */}
                <Butterflies butterflies={butterflies} nodes={nodes} butterfliesGroupRef={butterfliesGroupRef} />
                <Crosshair ref={crosshairs} butterfliesGroupRef={butterfliesGroupRef} shotSkillsRef={shotSkills} />
                <Camera />
              </Suspense>
              <Common cameraPosition={new THREE.Vector3(0, 0, 6)} environment />
            </View>
          </div>
        </div>
        <div className='flex-1 '>
          <ShownSkills shotSkillsRef={shotSkills} />
        </div>
      </div>
    </>
  )
}

export default NewSkillsGame
