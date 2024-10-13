import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Park(props) {
  const { nodes, materials } = useGLTF('/park.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.78}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-12.698, 2.505, 12.236]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.Rura} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.Trawa} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.Krawe} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.Chodnik} />
            <mesh geometry={nodes.Object_14.geometry} material={materials.Asfalt} />
            <mesh geometry={nodes.Object_15.geometry} material={materials.Pasy} />
            <mesh geometry={nodes.Object_16.geometry} material={materials['Material.009']} />
            <mesh geometry={nodes.Object_17.geometry} material={materials.Ziemia2} />
            <mesh geometry={nodes.Object_18.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Object_19.geometry} material={materials.Rura2} />
            <mesh geometry={nodes.Object_20.geometry} material={materials.Material} />
            <mesh geometry={nodes.Object_21.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.Object_22.geometry} material={materials['Material.010']} />
          </group>
          <group position={[-9.791, 2.345, -10.502]} rotation={[0, 0.373, 0]} scale={1.665}>
            <mesh geometry={nodes.Object_24.geometry} material={materials.Kora} />
            <mesh geometry={nodes.Object_25.geometry} material={materials.Sosna} />
          </group>
          <group position={[-11.616, 0.959, 7.779]} rotation={[0, -1.212, 0]}>
            <mesh geometry={nodes.Object_27.geometry} material={materials.Smietnik2} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.Smietnik} />
            <mesh geometry={nodes.Object_29.geometry} material={materials.Ziemia} />
          </group>
          <group position={[-12.544, 0.774, 11.973]}>
            <mesh geometry={nodes.Object_31.geometry} material={materials.Smietnik2} />
            <mesh geometry={nodes.Object_32.geometry} material={materials.Smietnik} />
          </group>
          <group position={[-12.698, 2.505, 12.236]}>
            <mesh geometry={nodes.Object_34.geometry} material={materials['Material.012']} />
            <mesh geometry={nodes.Object_35.geometry} material={materials['Material.016']} />
          </group>
          <group position={[-12.698, 2.505, 12.236]}>
            <mesh geometry={nodes.Object_37.geometry} material={materials.Doniczka} />
            <mesh geometry={nodes.Object_38.geometry} material={materials.Ziemia} />
            <mesh geometry={nodes.Object_39.geometry} material={materials.Krzak} />
          </group>
          <group position={[0.597, 3.86, -1.788]}>
            <mesh geometry={nodes.Object_41.geometry} material={materials['Material.012']} />
            <mesh geometry={nodes.Object_42.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_43.geometry} material={materials.czerwone2} />
            <mesh geometry={nodes.Object_44.geometry} material={materials.zieone1} />
          </group>
          <group position={[-7.991, 3.86, 5.609]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_46.geometry} material={materials['Material.012']} />
            <mesh geometry={nodes.Object_47.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_48.geometry} material={materials.czerwone2} />
            <mesh geometry={nodes.Object_49.geometry} material={materials.zieone2} />
          </group>
          <group position={[-7.499, 3.86, -2.5]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_51.geometry} material={materials['Material.012']} />
            <mesh geometry={nodes.Object_52.geometry} material={materials.zieone1} />
            <mesh geometry={nodes.Object_53.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.czerwone1} />
          </group>
          <group position={[4.462, 0.352, 1.74]}>
            <mesh geometry={nodes.Object_56.geometry} material={materials['Material.018']} />
            <mesh geometry={nodes.Object_57.geometry} material={materials['Material.019']} />
          </group>
          <group position={[-10.183, 2.096, -4.463]} scale={1.314}>
            <mesh geometry={nodes.Object_61.geometry} material={materials.Drzewo} />
            <mesh geometry={nodes.Object_62.geometry} material={materials.Kora} />
          </group>
          <group position={[-12.698, 2.505, 12.236]}>
            <mesh geometry={nodes.Object_72.geometry} material={materials['Material.012']} />
            <mesh geometry={nodes.Object_73.geometry} material={materials['Material.017']} />
          </group>
          <group position={[6.822, 0.352, 1.568]}>
            <mesh geometry={nodes.Object_75.geometry} material={materials['Material.018']} />
            <mesh geometry={nodes.Object_76.geometry} material={materials['Material.019']} />
          </group>
          <group position={[8.137, 0.352, -0.328]}>
            <mesh geometry={nodes.Object_78.geometry} material={materials['Material.018']} />
            <mesh geometry={nodes.Object_79.geometry} material={materials['Material.019']} />
          </group>
          <group position={[1.107, 0.352, 10.43]}>
            <mesh geometry={nodes.Object_81.geometry} material={materials['Material.018']} />
            <mesh geometry={nodes.Object_82.geometry} material={materials['Material.019']} />
          </group>
          <group position={[2.685, 0.352, 10.437]}>
            <mesh geometry={nodes.Object_84.geometry} material={materials['Material.018']} />
            <mesh geometry={nodes.Object_85.geometry} material={materials['Material.019']} />
          </group>
          <group position={[-12.72, 2.345, -12.78]} rotation={[-Math.PI, 1.305, -Math.PI]} scale={1.559}>
            <mesh geometry={nodes.Object_87.geometry} material={materials.Kora} />
            <mesh geometry={nodes.Object_88.geometry} material={materials.Sosna} />
          </group>
          <group position={[-12.786, 2.492, -7.238]} rotation={[0, 1.053, 0]} scale={1.541}>
            <mesh geometry={nodes.Object_90.geometry} material={materials.Drzewo} />
            <mesh geometry={nodes.Object_91.geometry} material={materials.Kora} />
          </group>
          <group position={[0.108, 0.098, 0]}>
            <mesh geometry={nodes.Object_93.geometry} material={materials['Material.026']} />
            <mesh geometry={nodes.Object_94.geometry} material={materials['Material.027']} />
          </group>
          <group position={[7.588, 0.098, 0]}>
            <mesh geometry={nodes.Object_96.geometry} material={materials['Material.026']} />
            <mesh geometry={nodes.Object_97.geometry} material={materials['Material.027']} />
          </group>
          <group position={[3.852, 0.098, 0]}>
            <mesh geometry={nodes.Object_99.geometry} material={materials['Material.026']} />
            <mesh geometry={nodes.Object_100.geometry} material={materials['Material.027']} />
          </group>
          <group position={[9.363, 0.542, 9.2]} scale={1.507}>
            <group position={[-0.66, -0.144, -1.218]} rotation={[0, 0, -Math.PI / 2]} scale={0.263}>
              <mesh geometry={nodes.Object_115.geometry} material={materials.Tyre} />
              <mesh geometry={nodes.Object_116.geometry} material={materials.material} />
            </group>
            <group position={[0.669, -0.144, -1.218]} rotation={[Math.PI, 0, Math.PI / 2]} scale={0.263}>
              <mesh geometry={nodes.Object_118.geometry} material={materials.Tyre} />
              <mesh geometry={nodes.Object_119.geometry} material={materials.material} />
            </group>
            <group position={[-0.66, -0.144, 1.207]} rotation={[0, 0, -Math.PI / 2]} scale={0.263}>
              <mesh geometry={nodes.Object_121.geometry} material={materials.Tyre} />
              <mesh geometry={nodes.Object_122.geometry} material={materials.material} />
            </group>
            <group position={[0.669, -0.144, 1.207]} rotation={[Math.PI, 0, Math.PI / 2]} scale={0.263}>
              <mesh geometry={nodes.Object_124.geometry} material={materials.Tyre} />
              <mesh geometry={nodes.Object_125.geometry} material={materials.material} />
            </group>
            <mesh geometry={nodes.Object_102.geometry} material={materials['White.001']} />
            <mesh geometry={nodes.Object_103.geometry} material={materials['Red.001']} />
            <mesh geometry={nodes.Object_104.geometry} material={materials['Grey.001']} />
            <mesh geometry={nodes.Object_105.geometry} material={materials['Dark_Grey.001']} />
            <mesh geometry={nodes.Object_106.geometry} material={materials['Glass.001']} />
            <mesh geometry={nodes.Object_107.geometry} material={materials['Headlight.001']} />
            <mesh geometry={nodes.Object_108.geometry} material={materials['Taillight.001']} />
            <mesh geometry={nodes.Object_109.geometry} material={materials['Reverse_Light.001']} />
            <mesh geometry={nodes.Object_110.geometry} material={materials['Metal.001']} />
            <mesh geometry={nodes.Object_111.geometry} material={materials['Right_Blinker.001']} />
            <mesh geometry={nodes.Object_112.geometry} material={materials['Left_Blinker.001']} />
            <mesh geometry={nodes.Object_113.geometry} material={materials['Stop_Light.001']} />
          </group>
          <mesh geometry={nodes.Object_59.geometry} material={materials['Material.025']} position={[-6.347, 0.13, 14.531]} scale={[0.799, 0.196, 0.196]} />
          <mesh geometry={nodes.Object_64.geometry} material={materials['Material.025']} position={[0.565, 0.13, 4.139]} rotation={[0, Math.PI / 2, 0]} scale={[0.799, 0.196, 0.196]} />
          <mesh geometry={nodes.Object_66.geometry} material={materials['Material.025']} position={[-4.003, 0.13, 14.531]} scale={[0.799, 0.196, 0.196]} />
          <mesh geometry={nodes.Object_68.geometry} material={materials['Material.025']} position={[-1.546, 0.13, 14.531]} scale={[0.799, 0.196, 0.196]} />
          <mesh geometry={nodes.Object_70.geometry} material={materials['Material.001']} position={[1.741, 4.883, -5.13]} rotation={[Math.PI / 2, 0, Math.PI / 4]} scale={0.575} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/park.gltf')
