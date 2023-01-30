import { Text, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import { Model } from './model';

export default function Experience()
{
    const computer = useGLTF('./macbook.gltf')
    const three = useThree()
    window.addEventListener('resize', () => {
        if(window.innerWidth < 650) {
            three.camera.fov = 85
            three.camera.updateMatrixWorld()
        } else {
            three.camera.fov = 45
            three.camera.updateMatrixWorld()
        }
    })
    if(window.innerWidth < 650) {
        three.camera.fov = 85
        three.camera.updateMatrixWorld()
    }
    
    
    return <>

        <color args={ [ '#695b5b' ] } attach="background" />
        <Environment files={'./hdri.hdr'} />
        
        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 60 }
                    color={ 'blue' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <Model/>

                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 1 }
                    position={ [ 2, 0.75, 0.75 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 3 }
                >
                    Sikander Azam
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}