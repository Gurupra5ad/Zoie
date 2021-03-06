/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/carrots.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="AuxScene">
        <group>
          <mesh
            material={materials['Box material 12_d5faf52c-9d1d-410b-822f-9cf887ba0901']}
            geometry={nodes.Box_10.geometry}
            name="Box_10"
          />
          <mesh
            material={materials['Box material 13_da0ca515-c645-42c0-ab20-7525d1a06a39']}
            geometry={nodes.Box_11.geometry}
            name="Box_11"
          />
          <mesh
            material={materials['Box material 14_06824ccd-5bf8-4516-b7ba-6a5758ba3926']}
            geometry={nodes.Box_12.geometry}
            name="Box_12"
          />
          <mesh
            material={materials['Box material 15_0a07aa31-1197-4686-8a52-74925c5deac8']}
            geometry={nodes.Box_13.geometry}
            name="Box_13"
          />
          <mesh
            material={materials['Box material 16_6d4dd9af-56ef-4bf0-b308-aed46d1418a0']}
            geometry={nodes.tip_2.geometry}
            name="tip_2"
          />
          <mesh
            material={materials['Box material 17_6686a88e-bc8a-4f94-9abe-8454ea8bb3da']}
            geometry={nodes.tip_3.geometry}
            name="tip_3"
          />
          <mesh
            material={materials['Box material 18_8c903249-004a-431e-8420-4ca811d169c4']}
            geometry={nodes.Box_14.geometry}
            name="Box_14"
          />
          <mesh
            material={materials['Box material 19_4f472fdd-3191-49fd-8afd-fdcbc4f74858']}
            geometry={nodes.Box_15.geometry}
            name="Box_15"
          />
          <mesh
            material={materials['Box material 20_208a9740-3b00-4a5b-a7fd-1ba7e91a2f51']}
            geometry={nodes.Box_16.geometry}
            name="Box_16"
          />
          <mesh
            material={materials['Box material 21_c9314d76-a910-41fa-a535-1830004045c7']}
            geometry={nodes.Box_17.geometry}
            name="Box_17"
          />
          <mesh
            material={materials['Box material 22_0f9ea5c4-a325-4d06-955c-83befd5e92cb']}
            geometry={nodes.Box_18.geometry}
            name="Box_18"
          />
          <mesh
            material={materials['Box material 23_1ec08aff-661c-41ca-a266-a804ffdab217']}
            geometry={nodes.Box_19.geometry}
            name="Box_19"
          />
          <mesh
            material={materials['Box material 24_3cf837e8-fc3b-46a9-8c48-da46fa62519e']}
            geometry={nodes.Box_20.geometry}
            name="Box_20"
          />
          <mesh
            material={materials['Box material 25_bc03eb8e-a05f-443a-9f47-ebc283c0d87e']}
            geometry={nodes.Box_21.geometry}
            name="Box_21"
          />
          <mesh
            material={materials['Box material 26_6a4ac4ad-a35b-4c3f-978c-2981046ce228']}
            geometry={nodes.Box_22.geometry}
            name="Box_22"
          />
          <mesh
            material={materials['Box material 27_0e0c542a-c12a-4789-bba3-29ca36abf947']}
            geometry={nodes.tip_4.geometry}
            name="tip_4"
          />
          <mesh
            material={materials['Box material 28_5262877c-54ee-4447-8352-d7c13c7a8d42']}
            geometry={nodes.tip_5.geometry}
            name="tip_5"
          />
          <mesh
            material={materials['Box material 29_edd2b189-b07c-4cb3-8dc2-bc1e84179fa4']}
            geometry={nodes.Box_23.geometry}
            name="Box_23"
          />
          <mesh
            material={materials['Box material 30_b1919447-92ca-486e-ae68-d63485f2465d']}
            geometry={nodes.Box_24.geometry}
            name="Box_24"
          />
          <mesh
            material={materials['Box material 31_0cfa6469-09b1-4036-9327-673fbf737543']}
            geometry={nodes.Box_25.geometry}
            name="Box_25"
          />
          <mesh
            material={materials['Box material 32_f86ed12e-2112-48bb-94b6-6354a41c2c1a']}
            geometry={nodes.Box_26.geometry}
            name="Box_26"
          />
          <mesh
            material={materials['Box material 33_3bcf355f-6ebb-4fcf-99f4-3b7de554cc56']}
            geometry={nodes.Box_27.geometry}
            name="Box_27"
          />
          <mesh
            material={materials['Box material 45_69a1b644-e88a-4426-a738-6773ed9ca237']}
            geometry={nodes.Box_28.geometry}
            name="Box_28"
          />
          <mesh
            material={materials['Box material 46_083ac3f0-1b20-4d0e-8f57-1027231a9f11']}
            geometry={nodes.Box_29.geometry}
            name="Box_29"
          />
          <mesh
            material={materials['Box material 47_61692438-e4bd-40dc-ad47-34cf88abb4b6']}
            geometry={nodes.Box_30.geometry}
            name="Box_30"
          />
          <mesh
            material={materials['Box material 48_a98730ab-9136-4207-a50f-4e79e778554e']}
            geometry={nodes.Box_31.geometry}
            name="Box_31"
          />
          <mesh
            material={materials['Box material 49_13acdafa-6eb9-43be-9c89-e070bd21c8e4']}
            geometry={nodes.tip_6.geometry}
            name="tip_6"
          />
          <mesh
            material={materials['Box material 50_5fd885ef-d26a-47f5-9be6-807731114683']}
            geometry={nodes.tip_7.geometry}
            name="tip_7"
          />
          <mesh
            material={materials['Box material 51_630407d3-f265-4f25-bf95-fff6aa8184e1']}
            geometry={nodes.Box_32.geometry}
            name="Box_32"
          />
          <mesh
            material={materials['Box material 52_5f3371a1-8d67-4ad7-97ae-c0b9d2bb6e57']}
            geometry={nodes.Box_33.geometry}
            name="Box_33"
          />
          <mesh
            material={materials['Box material 53_6ff92edb-9fcf-4d6f-9ca1-decfabda9936']}
            geometry={nodes.Box_34.geometry}
            name="Box_34"
          />
          <mesh
            material={materials['Box material 54_1f30c29a-1951-4d92-8613-b30604c4425d']}
            geometry={nodes.Box_35.geometry}
            name="Box_35"
          />
          <mesh
            material={materials['Box material 55_7297d3a0-a6a6-457e-b467-1f76caa360ad']}
            geometry={nodes.Box_36.geometry}
            name="Box_36"
          />
          <mesh
            material={materials['Box material 56_15f7c78c-9a0d-423c-b62a-7dc7861d047d']}
            geometry={nodes.Box_6.geometry}
            name="Box_6"
          />
          <mesh
            material={materials['Box material 57_0ab0d7e1-6800-4e66-8e89-4a1d3bcd46e3']}
            geometry={nodes.Box_9.geometry}
            name="Box_9"
          />
          <mesh
            material={materials['Box material 58_1e4e9702-f8d2-4530-aae4-05892596ae6d']}
            geometry={nodes.Box_8.geometry}
            name="Box_8"
          />
          <mesh
            material={materials['Box material 59_500405d9-6e53-495c-bdd7-6c6d4a41a37b']}
            geometry={nodes.Box_7.geometry}
            name="Box_7"
          />
          <mesh
            material={materials['Box material 60_22b1e013-2a10-4a78-8928-189948cfde53']}
            geometry={nodes.tip.geometry}
            name="tip"
          />
          <mesh
            material={materials['Box material 61_7fc14b81-b08d-493a-831c-8d876ccbe192']}
            geometry={nodes.tip_1.geometry}
            name="tip_1"
          />
          <mesh
            material={materials['Box material 62_de9b1e9e-c2c5-4be1-b2f7-90b158a265b8']}
            geometry={nodes.Box_5.geometry}
            name="Box_5"
          />
          <mesh
            material={materials['Box material 63_323c5714-2212-4cbb-9323-5d035c4ab2e5']}
            geometry={nodes.Box_4.geometry}
            name="Box_4"
          />
          <mesh
            material={materials['Box material 64_af511fdf-6c5b-4830-90d5-3ed9363ec74d']}
            geometry={nodes.Box_2.geometry}
            name="Box_2"
          />
          <mesh
            material={materials['Box material 65_0a5fc0d0-5adb-4eae-b99e-a09c2ba0de09']}
            geometry={nodes.Box_1.geometry}
            name="Box_1"
          />
          <mesh
            material={materials['Box material 66_60cc6dff-eec9-4051-9b3f-134e34e7d7b5']}
            geometry={nodes.Box_3.geometry}
            name="Box_3"
          />
          <mesh
            material={materials['Box material 67_00f51920-f803-4581-9e52-d70d75d4c81d']}
            geometry={nodes.Box_37.geometry}
            name="Box_37"
          />
          <mesh
            material={materials['Box material 68_05315859-3965-419f-8bc7-a7ce11299899']}
            geometry={nodes.Box_38.geometry}
            name="Box_38"
          />
          <mesh
            material={materials['Box material 69_e10d24e1-1930-447b-98c5-d32f5e9b053d']}
            geometry={nodes.Box_39.geometry}
            name="Box_39"
          />
          <mesh
            material={materials['Box material 70_b6c5c4fe-d589-4fb8-b871-abd8c685047f']}
            geometry={nodes.Box_40.geometry}
            name="Box_40"
          />
          <mesh
            material={materials['Box material 71_4b9fb426-d67d-4787-9ebb-f4d66ab02890']}
            geometry={nodes.tip_8.geometry}
            name="tip_8"
          />
          <mesh
            material={materials['Box material 72_d2f79879-5993-4ba1-a945-faa730ac7524']}
            geometry={nodes.tip_9.geometry}
            name="tip_9"
          />
          <mesh
            material={materials['Box material 73_50becf9d-ef15-4bd9-acbe-be3a0fc49792']}
            geometry={nodes.Box_41.geometry}
            name="Box_41"
          />
          <mesh
            material={materials['Box material 74_73935baf-8bc5-423e-a51d-0212b249b6b7']}
            geometry={nodes.Box_42.geometry}
            name="Box_42"
          />
          <mesh
            material={materials['Box material 75_12031537-2023-4c66-a5fb-770f9dfbcd42']}
            geometry={nodes.Box_43.geometry}
            name="Box_43"
          />
          <mesh
            material={materials['Box material 76_6ecef3cf-f25c-4783-9654-4fd23ed233cd']}
            geometry={nodes.Box_44.geometry}
            name="Box_44"
          />
          <mesh
            material={materials['Box material 77_90fcba47-da89-4c07-ac99-0bced382b245']}
            geometry={nodes.Box_45.geometry}
            name="Box_45"
          />
        </group>
      </scene>
    </group>
  )
}
