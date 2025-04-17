// pages/index.js
import { useEffect, useRef, useState} from 'react';

import projectsData from '../data/projectData';

import ProjectDetail from '../components/ProjectDetail';
{console.log('render ProjectDetail')}

//每个项目标题和封面图
const projects = [
  {
    id: 'Caltyp',
    title: 'Caltyp',
    image0: '/mainpics/Calityp0.webp',
    image1: '/mainpics/Calityp1.webp',
  },
  {
    id: 'L-Shufa',
    title: 'L-Shufa',
    image0: '/mainpics/Lsystem0.webp',
    image1: '/mainpics/Lsystem1.webp',
  },
  {
    id: 'B8',
    title: 'B8',
    image0: '/mainpics/B80.webp',
    image1: '/mainpics/B81.webp',
  },
  {
    id: 'Sternal',
    title: 'Sternal',
    image0: '/mainpics/Sternal0.webp',
    image1: '/mainpics/Sternal1.webp',
  },
  {
    id: 'Terra',
    title: 'Terra',
    image0: '/mainpics/Terra0.webp',
    image1: '/mainpics/Terra1.webp',
  },
];


//每个项目对应的颜色
const projectColors = {
  'Caltyp':'#36292f',
  'L-Shufa': '#cdd1d3',
  'B8': '#9e9d08',
  'Sternal': '#f0fcf4',
  'Terra': '#daa45a',
};






export default function Home() {
  
  const [activeMenu, setActiveMenu] = useState('ABOUT');
  const [showDetail, setShowDetail] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);



  //视频播放
  const sidebarVideos = [ '/sidebarmedia/A2.mp4',];
  const [currentVideo, setCurrentVideo] = useState(sidebarVideos[0]);
  const videoRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * sidebarVideos.length);
      setCurrentVideo(sidebarVideos[random]);
    }, 100000); // 每 10 秒切换

    return () => clearInterval(interval); // 清除定时器
  }, []);






 //项目detail
 // 处理 detail 栏内容渲染逻辑
const renderProjectContent = () => {
  if (!showDetail || !activeProject) return null;

  // 特殊老项目逻辑（纯图片）
  if (activeProject === 'B8') {
    return (
      <div className="B8-gallery">
        {Array.from({ length: 1 }, (_, i) => (
          <img
            key={i}
            src={`/contents/B8/${1 + i}.webp`}
            alt={`B8 ${1 + i}`}
            className="B8-image"
          />
        ))}
      </div>
    );
  }

  if (activeProject === 'Terra') {
    return (
      <div className="terra-gallery">
        {Array.from({ length: 11 }, (_, i) => (
          <img
            key={i}
            src={`/contents/Terra/${12 + i}.webp`}
            alt={`Terra ${12 + i}`}
            className="terra-image"
          />
        ))}
      </div>
    );
  }

  if (activeProject === 'Sternal') {
    return (
      <div className="sternal-gallery">
        {Array.from({ length: 8 }, (_, i) => (
          <img
            key={i}
            src={`/contents/Sternal/${23 + i}.webp`}
            alt={`Sternal ${23 + i}`}
            className="sternal-image"
          />
        ))}
      </div>
    );
  }

  // 默认使用 ProjectDetail 模板的项目
  return (
    <>
   {/*
  <button className="close-btn" onClick={closeDetail}>
  </button>
*/}
      <ProjectDetail data={projectsData[activeProject]} />
    </>
  );
};









  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();  // 更新 <video> 源
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideo]);




  //菜单栏的颜色
const colors = ['#21373d', '#5c1f1f', '#2a2f45', '#4b533e', '#603535'];
const [activeColor, setActiveColor] = useState('#21373d');



// ✅ 当前激活菜单项颜色
const currentBgColor =
projectColors[hoveredProject] ||
(showDetail && projectColors[activeProject]) ||
activeColor; 





  const handleMenuClick = (item) => {
    setActiveMenu(item);
    setShowDetail(false);
    setActiveProject(null);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setActiveColor(randomColor);
  };
  

  const openDetail = (project) => {
    setActiveProject(project);
    setShowDetail(true);
  };

  const closeDetail = () => {
    setShowDetail(false);
    setActiveProject(null);
  };

 
  return (
    <div className={`container ${showDetail ? 'detail-open' : ''}`}>
      {/* === Sidebar === */}
      <div className="sidebar">
        <div
  className="site-title"
  style={{
    backgroundColor: activeColor,
   
    transition: 'background-color 0.4s ease'
  }}
>
  KUNSTIN yekun XU
</div>

        <div className="sidebar-menu">
          {['ABOUT', 'CONTACT', 'OTHERS'].map((item) => (
           <div
           key={item}
           className={`menu-bar ${activeMenu === item ? 'active' : ''}`}
           onClick={() => handleMenuClick(item)}
           style={activeMenu === item ? { backgroundColor: activeColor } : {}}
         >
           <a
             href="#"
             className="menu-link"
             style={{
               fontFamily: activeMenu === item ? 'DrukWide' : 'DrukCond',
             }}
             onClick={(e) => e.preventDefault()}
           >
             {item}
           </a>
         </div>
         
          ))}
        </div>



        
        <div className="sidebar-bottom">
        {activeMenu === 'ABOUT' && (
  <div className="bottom-content">

<img src="/profile/profile7.webp" alt="Profile" className="sidebar-profile" />
    
<div className="sidebar-spacer" />

    <p>
      I’m Kunstin, a creative practitioner with a background in industrial
      design.  
      <br />
      Currently,I’m exploring and creating in the fields of
      computational design, generative design, and digital fabrication.
      <br />
      I’m also currently enrolled in the MS in Human-Computer Interaction at the ATLAS Institute. 
      
      <a
        href="/Resume/Resume-YekunXu2025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        RESUME↗
      </a>
  
    </p>
  </div>
)}
          {activeMenu === 'CONTACT' && (

<div className="bottom-content">
<video
  ref={videoRef}
  key={currentVideo}  // 确保组件强制更新
  src={currentVideo}
  autoPlay
  loop
  muted
  playsInline
  className="sidebar-video"
/>
<div className="sidebar-spacer" />

<p>E-mail: kunstinjim@gmail.com</p>
</div>
            
          )}
          {activeMenu === 'OTHERS' && (
  <div className="photo-gallery">
    {Array.from({ length: 6 }, (_, i) => (
      <img
        key={i}
        src={`/otherpics/photos/${i + 1}.webp`}
        alt={`photo ${i + 1}`}
        className="photo-item"
      />
    ))}
  </div>
)}

        </div>
      </div>






      {/* === Project Gallery === */}
      <div
  className="main"
  style={{
    backgroundColor: currentBgColor,
    transition: 'background-color 0.4s ease',
  }}
>
  {projects.map((project) => (
    <div
    key={project.id}
    className="project-image-container"
    onClick={() => openDetail(project.title)}
    onMouseEnter={() => setHoveredProject(project.title)}
    onMouseLeave={() => setHoveredProject(null)}
  >
    <div className="project-image-wrapper">
      <img
        src={project.image0}
        alt={`${project.title} grayscale`}
        className="project-image image-base"
      />
      <img
        src={project.image1}
        alt={`${project.title} color`}
        className="project-image image-hover"
      />
    </div>
  </div>
  
  ))}
</div>










      {/* === Detail Section === */}


     
        
      <div className="detail">
  {renderProjectContent()}
</div>



</div>
  );

}










