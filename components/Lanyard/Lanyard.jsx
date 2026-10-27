'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer, RoundedBox, useTexture } from '@react-three/drei'
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import * as THREE from 'three'

extend({ MeshLineGeometry, MeshLineMaterial })

// ── Tunable layout knobs ───────────────────────────────────────────
const SEG = 0.65 // rope segment length — smaller = shorter lanyard
const RING_Y = 1.78 // where the strap meets the top of the card
const BAND_WIDTH = 0.85 // strap thickness

/**
 * Interactive lanyard name tag — single strap, draggable card with real physics.
 */
export default function Lanyard({
  position = [0, 0, 15],
  gravity = [0, -40, 0],
  fov = 24,
  className = '',
}) {
  return (
    <div className={`lanyard-canvas ${className}`}>
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), 0)}
      >
        <ambientLight intensity={Math.PI * 0.4} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={6} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  )
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef()
  const fixed = useRef()
  const j1 = useRef()
  const j2 = useRef()
  const j3 = useRef()
  const card = useRef()

  const vec = new THREE.Vector3()
  const dir = new THREE.Vector3()
  const ang = new THREE.Vector3()
  const rot = new THREE.Vector3()

  const segmentProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 2,
    linearDamping: 2,
  }

  const [front, back, bandTex] = useTexture([
    '/images/lanyard/card-front.png',
    '/images/lanyard/card-back.png',
    '/images/lanyard/band.png',
  ])

  useEffect(() => {
    for (const t of [front, back, bandTex]) {
      t.colorSpace = THREE.SRGBColorSpace
      t.anisotropy = 16
      t.generateMipmaps = true
      if (t === bandTex) t.wrapS = t.wrapT = THREE.RepeatWrapping
      t.needsUpdate = true
    }
  }, [front, back, bandTex])

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  )
  const [dragged, drag] = useState(false)
  const [hovered, hover] = useState(false)
  const { width, height } = useThree((s) => s.size)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], SEG])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], SEG])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], SEG])
  useSphericalJoint(j3, card, [[0, 0, 0], [0, RING_Y, 0]])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => {
        document.body.style.cursor = 'auto'
      }
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      })
    }

    if (fixed.current) {
      // smooth the two middle joints so the strap feels like fabric
      for (const ref of [j1, j2]) {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const d = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + d * (maxSpeed - minSpeed)))
      }

      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped)
      curve.points[2].copy(j1.current.lerped)
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(32))

      // gentle angular damping so the card doesn't spin forever
      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
    }
  })

  return (
    <>
      <group position={[0, 3.5, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.98, 1.4, 0.05]} />
          <group
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => {
              e.target.releasePointerCapture(e.pointerId)
              drag(false)
            }}
            onPointerDown={(e) => {
              e.target.setPointerCapture(e.pointerId)
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            }}
          >
            <CardMesh front={front} back={back} />
          </group>
        </RigidBody>
      </group>

      {/* the single, thicker strap */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#ffffff"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={bandTex}
          repeat={[-3, 1]}
          lineWidth={BAND_WIDTH}
        />
      </mesh>
    </>
  )
}

/**
 * The physical name-tag card: printed insert in a glossy holder, with a metal
 * clasp and ring on top.
 */
function CardMesh({ front, back }) {
  return (
    <group>
      {/* glossy plastic holder (frame around the insert) */}
      <RoundedBox args={[1.96, 2.86, 0.1]} radius={0.11} smoothness={5}>
        <meshPhysicalMaterial
          color="#dfe8f1"
          roughness={0.22}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0.14}
          transparent
          opacity={0.9}
        />
      </RoundedBox>

      {/* printed insert — front (2:3) */}
      <mesh position={[0, 0, 0.052]}>
        <planeGeometry args={[1.78, 2.67]} />
        <meshStandardMaterial map={front} roughness={0.5} metalness={0} />
      </mesh>

      {/* printed insert — back */}
      <mesh position={[0, 0, -0.052]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1.78, 2.67]} />
        <meshStandardMaterial map={back} roughness={0.5} metalness={0} />
      </mesh>

      {/* metal clasp just above the holder */}
      <mesh position={[0, 1.56, 0]}>
        <boxGeometry args={[0.6, 0.2, 0.12]} />
        <meshStandardMaterial color="#c7ccd1" metalness={1} roughness={0.28} />
      </mesh>
      {/* ring — strap meets here (matches RING_Y) */}
      <mesh position={[0, 1.78, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.15, 0.034, 16, 32]} />
        <meshStandardMaterial color="#c7ccd1" metalness={1} roughness={0.28} />
      </mesh>
    </group>
  )
}