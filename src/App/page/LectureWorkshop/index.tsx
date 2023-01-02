import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { markdownGSD, markdownLecture, markdownWorkshopSeries, markdownBIO } from '../../const'

import Footer from '../../component/Footer';

import './index.css';

const LectureWorkshop = () => {

    return (
        <div>

            {/* <div className='data-design-container'> */}
            <div className='text-center'>
                <h2 className='title-sub'>Latest activity: Data & Design & Computation & Code for design</h2>
                <img className='logo' src={process.env.PUBLIC_URL + '/reference/img/gsd_logo1.png'}/>
                <h1 className='title'>Data in Design & AI for Urban Data & Visualization</h1>
            </div>
            {/* </div> */}


            <div className="lecture-workshop-center">

                <p>
                    <a href="https://namjulee.github.io/njslabs/nj-namju-lee">
                    Instructor: NJ Namju Lee
                    </a>
                </p>
                <a className="git-icon" href="https://github.com/NamjuLee/Data-Design-AI-for-Urban-Data-and-Viz-Harvard-GSD-public/">
                    <i className={"fa"}>&#xf09b;</i>
                </a>

                <p>
                    This course is for the "designers" who want to use "data as design materials." During the class, students will visit the basic concept of design data: Vector or Raster at scales from urban and architectural levels to products. It enables us to use the design process, and computational thinking becoming the core methodology to use data as design materials , by Software and code as design tools.
                </p>

                <p>! This material is for the education and research purpose only, DO NOT use for commercial use or production.</p>
                <p>! This schedule could be revised based on the students' expectations and time. </p>


                <h2 className='class-index'>CLASS INDEX & HISTORY</h2>
            </div>


            <div className='lecture-workshop-bg'>
                <div className='lecture-workshop-center'>
                    <ReactMarkdown children={markdownGSD} remarkPlugins={[remarkGfm]} transformImageUri={uri => uri.startsWith("http") ? uri : `${process.env.PUBLIC_URL}${uri}`} />
                </div>
            </div>



            <div className='lecture-workshop-bg-dark'>
                <div className='lecture-workshop-center'>
                    <ReactMarkdown children={markdownLecture} remarkPlugins={[remarkGfm]} transformImageUri={uri => uri.startsWith("http") ? uri : `${process.env.PUBLIC_URL}${uri}`} />
                </div>
            </div>


            <div className='lecture-workshop-bg'>
                <div className='lecture-workshop-center'>
                    <ReactMarkdown children={markdownWorkshopSeries} remarkPlugins={[remarkGfm]} transformImageUri={uri => uri.startsWith("http") ? uri : `${process.env.PUBLIC_URL}${uri}`} />
                </div>
            </div>


            <div className='lecture-workshop-bg-dark'>
                <div className='lecture-workshop-center'>
                    <ReactMarkdown children={markdownBIO} remarkPlugins={[remarkGfm]} transformImageUri={uri => uri.startsWith("http") ? uri : `${process.env.PUBLIC_URL}${uri}`} />
                </div>
            </div>

            <Footer mode='dark' />
        </div >
    )

};
export default LectureWorkshop;