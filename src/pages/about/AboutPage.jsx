import { langTexts } from "../../lang";
import { useOutletContext } from "react-router-dom";
import './aboutPage.css'
import { PageSliderBtn } from '../../components/pageSliderBtn/PageSliderBtn'
import { motion } from "framer-motion"
import { useEffect } from "react";

export function AboutPage() {
  const {language, setLanguage} = useOutletContext()
  const {theme, setTheme} = useOutletContext()
  const {setPageTitle} = useOutletContext()
  
  useEffect(() => {
      setPageTitle("About")
  }, [])

  
  return (
    <motion.div 
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      transition={{
          duration: 1,
          delay: 0.05
      }}
      className="about-container">
        <h1 className="h1">{ langTexts[`${language}`].about.header }</h1>
          <div className="topic">
            <h2 className="h2">{langTexts[`${language}`].about.topics[0].title}</h2>
            <p className="p">{langTexts[`${language}`].about.topics[0].body}</p>
          </div>
          <div className="topic">
            <h2 className="h2">{langTexts[`${language}`].about.topics[1].title}</h2>
            <div className="tools-container">
              {
                langTexts ? langTexts[`${language}`].about.topics[1].body.map((tool) => {
                  var id = ''
                  if (tool.img == 'react-router') { 
                    id = 'router'
                  }
                  return (
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                      className="single-tool-container">
                      <img src={`media/icons/${tool.img}-${theme}.png`} className="tool" id={id}/>
                      <h2 className="h2">{tool.txt}</h2>
                    </motion.div>
                  )
                }) : null
              }
            </div>
          </div>
        
          <div className="topic">
            <h2 className="h2">{langTexts[`${language}`].about.topics[2].title}</h2>
            {
              langTexts ? langTexts[`${language}`].about.topics[2].body.map((skill) => {
                  return (
                    <ul className="skills-list">
                      <motion.li 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        className="p">{skill}</motion.li>
                    </ul>
                  )
              }) : null
            }
          </div>
          <div className="topic">
            <h2 className="h2">{langTexts[`${language}`].about.topics[3].title}</h2>
            {
              langTexts ? langTexts[`${language}`].about.topics[3].body.map((formation) => {
                  return (
                    <a href={formation.url}>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        whileInView={{ opacity: 1, scale: 1 }}  
                        className="formation-container"
                      >
                        <img src={`media/icons/${formation.img}.jpg`} className="fomation-img" />
                        <p className="p">
                          {
                            formation.desc
                          }
                        </p>
                      </motion.div>
                    </a>
                  )
              }) : null
            }
          </div>
          <PageSliderBtn text={langTexts[`${language}`].about.pageSliderBtn} theme={theme} route='projects'  />
    </motion.div>
  );
}