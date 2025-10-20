'use client'

import { useGLTF } from '@react-three/drei'
import { Group, Mesh, Material, MeshStandardMaterial } from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type GroupProps = React.ComponentProps<'group'>
interface ModelProps extends GroupProps {}

export const PlayerModel = ({
  ref,
  ...props
}: ModelProps & {
  ref: React.RefObject<Group>
}) => {
  useGSAP(() => {
    if (ref.current) {
      gsap.set(ref.current.scale, { x: 0, y: 0, z: 0 })
      gsap.to(ref.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.7)',
        delay: 0.2,
      })
    }
  })
  const { nodes, materials } = useGLTF('/ttsync.glb') as any
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0.739, 1.5, -0.99]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.035}>
        <mesh castShadow receiveShadow geometry={nodes.Node.geometry} material={materials['Material_0.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Node001.geometry} material={materials['Material_1.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Node002.geometry} material={materials['Material_1.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Node003.geometry} material={materials['Material_2.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Node004.geometry} material={materials['Material_3.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Node005.geometry} material={materials['Material_1.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Node007.geometry} material={materials['Material_1.001']} />
      </group>
    </group>
  )
}
useGLTF.preload('ttsync.glb')

export const WotwModel = ({ ref, ...props }: GroupProps & { route?: string; ref: React.RefObject<Group> }) => {
  const { nodes, materials } = useGLTF('/wotW_title_3D.glb') as any

  useGSAP(() => {
    if (ref.current) {
      gsap.set(ref.current.scale, { x: 0, y: 0, z: 0 })

      gsap.to(ref.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.7)',
        delay: 0.2,
      })
    }
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.plane.geometry}
        material={materials['Material_0.002']}
        position={[0, 1, 3.059]}
        rotation={[0, -1.519, 1.591]}
        scale={0.007}
      />
    </group>
  )
}
useGLTF.preload('/wotW_title_3D.glb')

export const LegacyLinesModel = ({
  ref,
  ...props
}: ModelProps & {
  ref: React.RefObject<Group>
}) => {
  const { nodes, materials } = useGLTF('/legacy_lines.glb') as unknown as {
    nodes: { [key: string]: Mesh }
    materials: { [key: string]: Material }
  }

  useGSAP(() => {
    if (ref.current) {
      gsap.set(ref.current.scale, { x: 0, y: 0, z: 0 })

      gsap.to(ref.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.7)',
        delay: 0.2,
      })
    }
  })

  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[0, 1.5, 0]} rotation={[1.554, -0.102, 3.114]} scale={105.456}>
        <mesh geometry={nodes.Curve131.geometry} material={materials['SVGMat.056']} />
        <mesh geometry={nodes.Curve131_1.geometry} material={materials['SVGMat.058']} />
        <mesh geometry={nodes.Curve131_2.geometry} material={materials['SVGMat.068']} />
      </group>
    </group>
  )
}
useGLTF.preload('/legacy_lines.glb')

export const Cart = ({
  ref,
  ...props
}: ModelProps & {
  ref: React.RefObject<Group>
}) => {
  const { nodes } = useGLTF('/3D_cart.glb')

  useGSAP(() => {
    if (ref.current) {
      gsap.set(ref.current.scale, { x: 0, y: 0, z: 0 })

      gsap.to(ref.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.7)',
        delay: 0.2,
      })
    }
  })

  const M = {
    Gold: new MeshStandardMaterial({
      color: 0xc8a44d, // warm gold
      metalness: 1,
      roughness: 0.3,
    }),
    'Brushed Aluminum Black Stained': new MeshStandardMaterial({
      color: 0x2b2b2b, // very dark grey metal
      metalness: 1,
      roughness: 0.75,
    }),
    'White leather': new MeshStandardMaterial({
      color: 0xeeeeee, // off-white
      metalness: 0,
      roughness: 0.9,
    }),
    'Tyre Sidewall': new MeshStandardMaterial({
      color: 0x1a1a1a, // rubber black
      metalness: 0,
      roughness: 0.95,
    }),
    'Plastic purple red material': new MeshStandardMaterial({
      color: 0x3d1861, // deep magenta/burgundy plastic (not your accent colors)
      metalness: 0.05,
      roughness: 0.6,
    }),
    'Metal floor': new MeshStandardMaterial({
      color: 0x1b1b1b, // steel grey
      metalness: 1,
      roughness: 0.6,
    }),
    'Black matte metal': new MeshStandardMaterial({
      color: 0x1b1b1b,
      metalness: 1,
      roughness: 0.85,
    }),
    Carbon: new MeshStandardMaterial({
      color: 0x111315, // very dark graphite
      metalness: 0.2,
      roughness: 0.35,
    }),
    'Dark metal': new MeshStandardMaterial({
      color: 0x2e2f33,
      metalness: 1,
      roughness: 0.6,
    }),
    'Scratched black metal': new MeshStandardMaterial({
      color: 0x141414,
      metalness: 1,
      roughness: 0.9,
    }),
    'Plastic 3': new MeshStandardMaterial({
      color: 0x2b96ba, // mid grey plastic
      metalness: 0.05,
      roughness: 0.55,
    }),
    'Patterned metal': new MeshStandardMaterial({
      color: 0x132233,
      metalness: 1,
      roughness: 0.65,
    }),
    'Leather Fabric - Black 70': new MeshStandardMaterial({
      color: 0x0f0f10, // near-black leather
      metalness: 0,
      roughness: 0.9,
    }),
    'SciFi Structural Panelling.006': new MeshStandardMaterial({
      color: 0x154a54, // light neutral panel paint
      metalness: 0,
      roughness: 0.6,
    }),
    'Steering Plastic': new MeshStandardMaterial({
      color: 0x181a1c, // dark plastic
      metalness: 0.1,
      roughness: 0.8,
    }),
  }

  return (
    <group ref={ref} {...props} dispose={null} position={[0, -0.5, 0]}>
      <mesh
        geometry={(nodes.LOGO as Mesh).geometry}
        material={M.Gold}
        position={[0.035, 0.223, -4.893]}
        rotation={[-Math.PI / 2, Math.PI / 4, -Math.PI]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.Cylinder as Mesh).geometry}
        material={M['Plastic purple red material']}
        position={[0.616, 0.333, -3.499]}
        rotation={[-1.075, 0, Math.PI]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.Plane as Mesh).geometry}
        material={M['Metal floor']}
        position={[0.617, 0.223, -3.424]}
        rotation={[-Math.PI / 2, -1.571, 0]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.body as Mesh).geometry}
        material={M['Black matte metal']}
        position={[0.043, 0.08, -0.114]}
        rotation={[1.571, 0.017, 0]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.steer_1 as Mesh).geometry}
        material={M['Steering Plastic']}
        position={[-0.003, 0.308, -2.01]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.Cylinder_1 as Mesh).geometry}
        material={M.Carbon}
        position={[-0.033, 0.938, 2.134]}
        rotation={[0, -0.01, Math.PI / 2]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.Cube_2 as Mesh).geometry}
        material={M['Dark metal']}
        position={[-0.691, 1.67, 2.14]}
        rotation={[-Math.PI / 2, -0.698, -Math.PI]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.Sweep_12 as Mesh).geometry}
        material={M['Scratched black metal']}
        position={[-0.168, 1.88, 2.142]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.Cylinder_1_4 as Mesh).geometry}
        material={M['Plastic 3']}
        position={[-1.606, 0.176, -3.506]}
        rotation={[Math.PI / 2, -0.837, Math.PI]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.Plane_3 as Mesh).geometry}
        material={M['Patterned metal']}
        position={[0.023, 2.468, -3.194]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.009}
      />
      <mesh
        geometry={(nodes.Plane_2_2 as Mesh).geometry}
        material={M['Leather Fabric - Black 70']}
        position={[1.34, 0.666, -0.765]}
        rotation={[1.828, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.Plane_1_3 as Mesh).geometry}
        material={M['SciFi Structural Panelling.006']}
        position={[-2.229, 3.939, -0.257]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={0.01}
      />
      <mesh
        geometry={(nodes.Extrude_2003 as Mesh).geometry}
        material={M['Steering Plastic']}
        position={[-3.2, 0.344, 3.435]}
        rotation={[-2.854, -0.003, 1.595]}
        scale={0.032}
      />
    </group>
  )
}

useGLTF.preload('/3D_cart.glb')
