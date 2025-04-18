const projectsData = {

      
    'L-Shufa': {
      title: 'L-Shufa',
      mainImage: '/contents/L-shufa/1.webp',
      
      info: [
        { label: 'Project', value: 'L-Cal' },
        { label: 'Role', value: 'Artist / Coder' },
        { label: 'Year', value: '2025' },
        { label: 'Advisor', value: 'Mike Rivera' },
            { label: 'Introduction', value: <p className="tight-value">
      Creating generative art based on the aesthetics of Chinese calligraphy and landscape painting,
      using Turtle graphics and L-system
      </p> }
],
    
      
sections: [
    {type: 'imageGroup',
        layout: 'carousel',
        images: ['/contents/L-shufa/i1.webp', '/contents/L-shufa/i2.webp','/contents/L-shufa/i3.webp','/contents/L-shufa/i4.webp']
      },


      
    {
      label: 'INSPIRATION',
      content: 'This project is inspired by the poetic imagery of traditional Chinese landscape painting and the abstract composition of flowing curves.',
    },

    {type: 'imageGroup',
        layout: 'grid-2x2',
        images: ['/contents/L-shufa/l5.webp', '/contents/L-shufa/l6.webp','/contents/L-shufa/l7.webp','/contents/L-shufa/l8.webp']
      },
      {type: 'imageGroup',
        layout: 'grid-3x2',
        images: ['/contents/L-shufa/l9.webp', '/contents/L-shufa/l10.webp','/contents/L-shufa/l11.webp','/contents/L-shufa/l12.webp','/contents/L-shufa/l13.webp','/contents/L-shufa/l14.webp']
      },


    {
      label: 'IDEATION',
      content: 'Through L-system experimentation, I explored a range of visual outputs, using irregular loops and flowing curves as the basic units for generative pattern creation.',
    },

    {
        type: 'imageGroup',
        layout: 'grid-2x2',
        images: ['/contents/L-shufa/l1.webp', '/contents/L-shufa/l2.webp','/contents/L-shufa/l3.webp','/contents/L-shufa/l4.webp']
      },


    {
        label: 'CREATION',
        content: 'In the final stage, I simulated the effect of a “bamboo forest” by generating patterns through dual-directional drawing, incorporating randomness in both stroke thickness and intensity.',
      }
  ],
      

    },



    
  
    // 其他项目...

   'Caltyp': {
        title: 'Caltyp',
        mainImage: '/contents/Caltyp/1.webp',
        
        info: [
          { label: 'Project', value: 'Caltyp' },
          { label: 'Role', value: 'Artist / Coder' },
          { label: 'Year', value: 'Work in progress' },
          { label: 'Advisor', value: 'Mike Rivera' },
              { label: 'Introduction', value: <p className="tight-value">
       Caltyp explores the generative reconstruction of Latin letterforms through dynamic simulation in Kangaroo2 (Grasshopper). The outcomes are transformed into 3D compositions, which serve as 'stamp' models for collaborative artistic creation with users.
        </p> }
  ],
      
        
  sections: [
      {type: 'imageGroup',
          layout: 'single',
          images: ['/contents/Caltyp/temp1.webp']
        },
  
  
        
      /*{
        label: 'INSPIRATION',
        content: 'This project is inspired by the poetic imagery of traditional Chinese landscape painting and the abstract composition of flowing curves.',
      },
  
      {type: 'imageGroup',
          layout: 'grid-2x2',
          images: ['/contents/L-shufa/l5.webp', '/contents/L-shufa/l6.webp','/contents/L-shufa/l7.webp','/contents/L-shufa/l8.webp']
        },
        {type: 'imageGroup',
          layout: 'grid-3x2',
          images: ['/contents/L-shufa/l9.webp', '/contents/L-shufa/l10.webp','/contents/L-shufa/l11.webp','/contents/L-shufa/l12.webp','/contents/L-shufa/l13.webp','/contents/L-shufa/l14.webp']
        },
  
  
      {
        label: 'IDEATION',
        content: 'Through L-system experimentation, I explored a range of visual outputs, using irregular loops and flowing curves as the basic units for generative pattern creation.',
      },
  
      {
          type: 'imageGroup',
          layout: 'grid-2x2',
          images: ['/contents/L-shufa/l1.webp', '/contents/L-shufa/l2.webp','/contents/L-shufa/l3.webp','/contents/L-shufa/l4.webp']
        },
  
  
      {
          label: 'CREATION',
          content: 'In the final stage, I simulated the effect of a “bamboo forest” by generating patterns through dual-directional drawing, incorporating randomness in both stroke thickness and intensity.',
        }*/
    ],
        
  
      },


      '70SS': {
        title: '70SS',
        mainImage: '/contents/70SS/1.webp',
        
        info: [
          { label: 'Project', value: '70SS' },
          { label: 'Role', value: 'Artist / Coder' },
          { label: 'Year', value: '2025' },
          { label: 'Advisor', value: 'Mike Rivera' },
              { label: 'Introduction', value: <p className="tight-value">
       Inspired by 1970s vintage programming aesthetics, the 70SS project uses Processing to generate algorithmic compositions featuring curves and abstract patterns.
        </p> }
  ],
      
        


  sections: [
        {type: 'imageGroup',
            layout: 'single',
            images: ['/contents/70SS/2.webp']
          },
          {type: 'imageGroup',
              layout: 'single',
              images: ['/contents/70SS/3.webp']
            },
      
        
          ],
  
    },


    'SansuiSan': {
      title: 'SansuiSan',
      
      
      info: [
        { label: 'Project', value: 'SansuiSan' },
        { label: 'Role', value: 'Artist / Coder' },
        { label: 'Year', value: '2024' },
        { label: 'Advisor', value: 'Justin Gitlin' },
            { label: 'Introduction', value: <p className="tight-value">
     Inspired by the aesthetics of classical Chinese landscape painting, 'SansuiSan' explores the generative fusion of mathematical curves with symbolic elements like mountains, rivers, and falling rain using P5.js.
      </p> }
],
sections: [
      {
        type:'fullwidth',
        content: (
          <div
    style={{
      position: 'relative',
      paddingBottom: '100%',  // 16:9 比例
      height: 0,
      overflow: 'hidden',
      marginTop: '2vh',
      marginLeft: '2%',
      marginRight: '2%',
      borderRadius: '6px',
    }} >
            <iframe
              src="https://editor.p5js.org/Kunstin/full/7ySBhXoNp"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '6px'
              }}
            ></iframe>
          </div>
        )
      }
      
        ],

  },


  'SansuiSan': {
      title: 'SansuiSan',
      
      
      info: [
        { label: 'Project', value: 'SansuiSan' },
        { label: 'Role', value: 'Artist / Coder' },
        { label: 'Year', value: '2024' },
        { label: 'Advisor', value: 'Justin Gitlin' },
            { label: 'Introduction', value: <p className="tight-value">
     Inspired by the aesthetics of classical Chinese landscape painting, 'SansuiSan' explores the generative fusion of mathematical curves with symbolic elements like mountains, rivers, and falling rain using P5.js.
      </p> }
],
sections: [
      {
        type:'fullwidth',
        content: (
          <div
    style={{
      position: 'relative',
      paddingBottom: '100%',  // 16:9 比例
      height: 0,
      overflow: 'hidden',
      marginTop: '2vh',
      marginLeft: '2%',
      marginRight: '2%',
      borderRadius: '6px',
    }} >
            <iframe
              src="https://editor.p5js.org/Kunstin/full/7ySBhXoNp"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '6px'
              }}
            ></iframe>
          </div>
        )
      }
      
        ],

  },

'KeySboard': {
      title: 'KeySboard',
  
      
      info: [
        { label: 'Project', value: 'KeySboard' },
        { label: 'Role', value: 'Artist / Coder' },
        { label: 'Year', value: '2025' },
        { label: 'Advisor', value: 'Joel Swanson' },
            { label: 'Introduction', value: <p className="tight-value">
     Drawing inspiration from multilingual keyboard layouts, 'KeySboard' remaps the standard English QWERTY layout to create a deliberate mismatch between input and display — an experiment in user response, disorientation, and the aesthetic potential of miscommunication.
      </p> }
],
sections: [
      {
        type:'fullwidth',
        content: (
          <div
    style={{
      position: 'relative',
      paddingBottom: '100%',  // 16:9 比例
      height: 0,
      overflow: 'hidden',
      marginTop: '2vh',
      marginLeft: '2%',
      marginRight: '2%',
      borderRadius: '6px',
    }} >
            <iframe
              src="https://editor.p5js.org/Kunstin/full/VbHQrxhct"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '6px'
              }}
            ></iframe>
          </div>
        )
      }
      
        ],

  },





   
  };
  
  export default projectsData;
  