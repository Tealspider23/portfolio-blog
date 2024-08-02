"use client"
import React, { useRef, useState, useEffect, useCallback } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Vector3 } from "three"

function DogModel(props) {
  const { scene } = useGLTF("/dog-baked.glb")
  return <primitive object={scene} {...props} />
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState(null)
  const [scale, setScale] = useState(3) // Initial scale

  const handleWindowResize = useCallback(() => {
    if (renderer && refContainer.current) {
      const scW = refContainer.current.clientWidth
      const scH = refContainer.current.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [renderer])

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const newScale = Math.max(1, 3 - scrollY / 300) // Adjust the scale calculation as needed
    setScale(newScale)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false)
    window.addEventListener("scroll", handleScroll, false)
    return () => {
      window.removeEventListener("resize", handleWindowResize, false)
      window.removeEventListener("scroll", handleScroll, false)
    }
  }, [handleWindowResize, handleScroll])

  return (
    <div
      ref={refContainer}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure it"s behind other content
        pointerEvents: "none", // Allow pointer events to pass through
      }}
    >
      <Canvas
        onCreated={({ gl }) => {
          setLoading(false)
          setRenderer(gl)
        }}
        camera={{ position: [0, 20, 40], fov: 50 }}
        style={{ height: "100%", width: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <OrbitControls autoRotate enableZoom enablePan enableRotate />
        <DogModel position={[0, -5, 0]} scale={[scale, scale, scale]} />
      </Canvas>
    </div>
  )
}

export default VoxelDog
