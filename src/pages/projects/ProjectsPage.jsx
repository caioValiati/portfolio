import { langTexts } from "../../lang";
import { Link, useOutletContext } from "react-router-dom";
import './projectsPage.css'
import { PageSliderBtn } from '../../components/pageSliderBtn/PageSliderBtn'
import { motion } from "framer-motion"
import { useEffect } from "react";


export function ProjectsPage() {
  const {language, setLanguage} = useOutletContext()
  const {theme, setTheme} = useOutletContext()
  const {setPageTitle} = useOutletContext()
  const PROJECTS_SIZES = [ 310, 400, 454 ]
  
  useEffect(() => {
    setPageTitle("Projects")
  }, [])

    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}  
        transition={{
            duration: 1,
            delay: 0.05
        }}
        className="projects-container">
        <h1 className="h1">{langTexts[`${language}`].projects.header}</h1>
        <div className="projects">
          
        {
            langTexts[`${language}`].projects.body.length > 0 ?  
              langTexts[`${language}`].projects.body.map((project) => { 
                return (
                  <a target={"_blank"} href={`https://github.com/caioValiati/${project.githubRepo}`}>
                    <div 
                      style={{ backgroundImage:`url(media/icons/${project.img}.jpg)`,
                                height: `${PROJECTS_SIZES[Math.floor(Math.random() * PROJECTS_SIZES.length)]}px` }}
                      className="single-project-container">
                      <div 
                        className="project-info">
                        <h3>{project.name}</h3>
                        <p className="p">{project.description}</p>
                        <div className="project-tools-container">
                          {
                            project.tools ? project.tools.map((tool) => {
                              return (
                                <div className="project-tool">
                                  <p className="p">{tool}</p>
                                </div>
                              )
                            }) : null
                          }
                        </div>
                      </div>

                    </div>
                  </a>
                )
              }) : <h3>Coming soon.</h3>
          }
          
        </div>
        <PageSliderBtn text={langTexts[`${language}`].projects.pageSliderBtn} theme={theme} route='contact' />
      </motion.div>
    );
  }