// @ts-nocheck
import * as THREE from 'three'
import { extend, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import vertex from './glsl/shader.vert'
import fragment from './glsl/shader.frag'
import { useRef } from 'react'

const ShaderImpl = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.05, 0.0, 0.025),
  },
  vertex,
  fragment,
)

extend({ ShaderImpl })

const Shader = ({ children, ref, ...props }) => {
  const localRef = useRef()
  const elementRef = ref || localRef

  useFrame((_, delta) => (elementRef.current.time += delta))
  return <shaderImpl ref={elementRef} glsl={THREE.GLSL3} {...props} attach='material' />
}

export default Shader
