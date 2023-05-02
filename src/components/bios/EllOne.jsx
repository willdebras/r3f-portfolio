import { useEffect, useRef, useState } from "react"

import './bios.css'

export default function EllOne({setSceneLetter}) {

    const wrapper = useRef()

    const [visible, setVisible] = useState(false)

    useEffect(()=> {
        setVisible(true)
    }, [])

    function handleClose() {
        setVisible(false)
        setTimeout(() => setSceneLetter(''), 300)
    } 

    return <>
        <div className={`menu ${visible && 'visible'}`} ref={wrapper}>
            <div className='border-image'>
                <button className='menuReturn' onClick={handleClose}>Return</button>
                <button className='menuClose'>Explore</button>
                <h1>PROJECTS</h1>
                <div className='menu-data'>
                    <a className='menu-card' href='https://github.com/microsoft/datamations' target="_blank">
                        <h1>{'{datamations}'}</h1>
                        <hr></hr>
                        <p className='ingredients'>
                            R, vegalite, D3
                        </p>
                        <p className='description'>
                            A data visualization library contracted to Microsoft Research that turns R and Python data pipelines into interactive and animated visualizations for research and education.
                        </p>
                    </a>
                    <a className='menu-card spacer'></a>
                    <a className='menu-card spacer'></a>
                    <a className='menu-card' href='#'>
                        <h1>willdebras.dev</h1>
                        <hr></hr>
                        <p className='ingredients'>
                            React, R3f, Blender, glsl
                        </p>
                        <p className='description'>
                             A personal portfolio built with custom modeling in Blender visualized in React and Three.js, garnished with effects in GSAP and shaders in GLSL.
                             </p>
                    </a>
                    <a className='menu-card' href='https://cdm.popcouncil.org/' target="_blank">
                        <h1>Population Council Climate Dashboard</h1>
                        <hr></hr>
                        <p className='ingredients'>
                            R, shiny, highcharts, leaflet
                        </p>
                        <p className='description'>
                            A website built for the Population Council to help researchers visualize urbanization and spatial population projection models within climate change scenarios.
                        </p>
                    </a>
                    <a className='menu-card spacer'></a>
                    <a className='menu-card spacer'></a>
                    <a className='menu-card' href='https://willdebras.github.io/viz/portfolio/nba/' target="_blank">
                        <h1>NBA Shotmap Visualization</h1>
                        <hr></hr>
                        <p className='ingredients'>
                            D3, Svelte, Canvas
                        </p>
                        <p className='description'>
                             A tool built to ingest NBA shot data and visualize them as shotmaps and provide game statistics for the 2021-2022 regular season using D3.js and Svelte.
                        </p>
                    </a>
                    <a className='menu-card' href='https://willdebras.github.io/components' target="_blank">
                        <h1>Components Library</h1>
                        <hr></hr>
                        <p className='ingredients'>
                            React, styled-components, storybook
                        </p>
                        <p className='description'>
                             A UI components library built and deployed with storybook utilizing React styled-components to house many modular components for personal use.
                             </p>
                    </a>
                </div>
            </div>
        </div>
    </>
}