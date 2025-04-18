// pages/index.js
import { useEffect, useRef, useState} from 'react';

import projectsData from '../data/projectData';

import ProjectDetail from '../components/ProjectDetail';
{console.log('render ProjectDetail')}

//作品分类


import styles from '../components/CategoryHeader.module.css';




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
    id: '70SS',
    title: '70SS',
    image0: '/mainpics/70SS0.webp',
    image1: '/mainpics/70SS1.webp',
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
  {
    id: 'SansuiSan',
    title: 'SansuiSan',
    image0: '/mainpics/SansuiSan0.webp',
    image1: '/mainpics/SansuiSan1.webp',
  },

  {
    id: 'KeySboard',
    title: 'KeySboard',
    image0: '/mainpics/KeySboard0.webp',
    image1: '/mainpics/KeySboard1.webp',
  },

  

  
];




//每个项目对应的颜色
const projectColors = {
  'Caltyp':'#36292f',
  'L-Shufa': '#cdd1d3',
  '70SS':'#8076a3',
  'B8': '#9e9d08',
  'Sternal': '#346c9c',
  'Terra': '#daa45a',
  'SansuiSan': '#daa45a',
  'KeySborad': '#daa45a',

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


//项目分类


const mainRef = useRef();  // 用于控制整个 scroll 区

const projectRefs = useRef({});


/*将 projects 重复三次以实现无限滚动效果
const repeatedProjects = [...projects, ...projects, ...projects];*/

const categoryRefs = {
  'Computational Art and Design': useRef(null),
  'Industrial and Product Design': useRef(null),
  'Creative Coding': useRef(null),
  'Communication Design': useRef(null),
};

const handleCategoryClick = (category) => {
  const el = categoryRefs[category]?.current;
  const container = mainRef.current;
  if (el && container) {
    const offset = el.offsetTop;
    container.scrollTo({
      top: offset - window.innerHeight * 0.002, // 保留 0.2% 空隙
      behavior: 'smooth',
    });
  }
};




/*useEffect(() => {
  const scrollContainer = scrollRef.current;
  if (!scrollContainer) return;

  // 初始滚动到中间那组项目
  const itemHeight = scrollContainer.scrollHeight / 3;
  scrollContainer.scrollTop = itemHeight;

  const handleScroll = () => {
    const scrollTop = scrollContainer.scrollTop;
    const totalHeight = scrollContainer.scrollHeight;
    const oneThird = totalHeight / 3;

    // 👇 如果滚到最顶部
    if (scrollTop < oneThird / 2) {
      scrollContainer.scrollTop = scrollTop + oneThird;
    }

    // 👇 如果滚到最底部
    if (scrollTop > oneThird * 1.5) {
      scrollContainer.scrollTop = scrollTop - oneThird;
    }
  };

  scrollContainer.addEventListener('scroll', handleScroll);
  return () => scrollContainer.removeEventListener('scroll', handleScroll);
}, []);*/


//detail时main栏逻辑
useEffect(() => {
  if (showDetail && activeProject && projectRefs.current[activeProject]) {
    const el = projectRefs.current[activeProject];
    const offset = el.getBoundingClientRect().top + window.scrollY;
    const containerOffset = mainRef.current?.offsetTop || 0;

    window.scrollTo({
      top: offset - containerOffset - window.innerHeight * 0.002,
      behavior: 'smooth',
    });
  }
}, [showDetail, activeProject]);



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
  
    setTimeout(() => {
      const el = projectRefs.current[project];
      const container = mainRef.current;
      if (el && container) {
        const offset = el.offsetTop;
        container.scrollTo({
          top: offset - window.innerHeight * 0.002,
          behavior: 'smooth',
        });
      }
    }, 50); // 细微 delay 等 detail 渲染逻辑处理
  };
  

  const closeDetail = () => {
    setShowDetail(false);
    setActiveProject(null);
    setTimeout(() => {
      const element = document.querySelector(`[data-project="${project}"]`);
      if (element && mainRef.current) {
        mainRef.current.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    }, 100);
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
  ref={mainRef}
  className="main"
  style={{
    backgroundColor: currentBgColor,
    transition: 'background-color 0.4s ease',
  }}
>
  {Object.entries({
    'Computational Art and Design': projects.slice(0, 3),
    'Industrial and Product Design': projects.slice(3,6),
    'Creative Coding': projects.slice(6),
    // 后续你可继续添加分类
  }).map(([category, categoryProjects]) => (
    <div key={category} ref={categoryRefs[category]}>
      <div
        className={styles.categoryHeader}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </div>

      {categoryProjects.map((project) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[project.title] = el)} 
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
  ))}
</div>










      {/* === Detail Section === */}


     
        
      <div className="detail">
  {renderProjectContent()}
</div>



</div>
  );

}










