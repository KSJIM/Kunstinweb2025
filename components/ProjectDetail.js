// components/ProjectDetail.js
import React from 'react';
import Image from 'next/image';

const ProjectDetail = ({ data }) => {
  const {
    title,
    mainImage,
    info,
    sections,
    galleryImages,
    creationImages,
  } = data;

  return (
    <div className="project-detail-wrapper">
      {/* 主图 */}
      {mainImage && (
        <img
          src={mainImage}
          alt={`${title} Main`}
          className="project-main-image"
        />
      )}

  {/* 基础信息部分 */}
{info && (
  
  <div className="project-info-grid">
  {info.map((item, i) => (
    <React.Fragment key={i}>
      <div className="info-label">{item.label}</div>
      <div className="info-value">{item.value}</div>
    </React.Fragment>
  ))}
</div>
)}


      {/* 细节图展示 */}
      {galleryImages?.length > 0 && (
        <div className="project-gallery">
          {galleryImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} detail ${i}`}
              className="project-detail-image"
            />
          ))}
        </div>
      )}

  {/* 分节展示 */}
  {sections?.length > 0 && sections.map((section, i) => {
  // 1. 纯图片区域
  if (section.type === 'imageGroup') {
    return (
      <div key={i} className={`section-imageGroup ${section.layout || 'single'}`}>
        {section.images.map((src, j) => (
          <img key={j} src={src} alt={`img-${j}`} />
        ))}
      </div>
    );
  }

  // 2. 标准 Section（带文字）
  return (
    <div key={i}>
      <div className="project-section">
        <div className="section-label">{section.label}</div>
        <div className="section-content">{section.content}</div>
      </div>

      {section.images?.length > 0 && (
        <div className="project-gallery">
          {section.images.map((src, j) => (
            <img key={j} src={src} alt={`${section.label} ${j}`} className="project-detail-image" />
          ))}
        </div>
      )}
    </div>
  );
})}





      {/* Creation 特别区块 */}
      {creationImages?.length > 0 && (
        <>
          <div className="project-section">
            <div className="section-label">CREATION</div>
          </div>
          <div className="project-gallery">
            {creationImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title} creation ${i}`}
                className="project-detail-image"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetail;
