import { langTexts } from "../../lang";
import { useOutletContext } from "react-router-dom";
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
          <div 
            style={{ backgroundImage:"url(/media/icons/alura.jpg)",
                      height: `${PROJECTS_SIZES[Math.floor(Math.random() * PROJECTS_SIZES.length)]}px` }}
            className="single-project-container">
            <motion.div 
              initial={{
                opacity: 0,
                paddingBottom: "3%"
              }}
              whileHover={{
                opacity: 1,
                paddingBottom: "7%"
              }}
              transition={{
                duration: 0.2
              }}
              className="project-info">
              <h3>Alura</h3>
              <p className="p">Olha, se você não me ama, então não me ligue</p>
              <div className="project-tool">
                <p className="p">React</p>
              </div>
            </motion.div>

        </div>
          <div 
            style={{ backgroundImage:"url(/media/icons/alura.jpg)",
                      height: `${PROJECTS_SIZES[Math.floor(Math.random() * PROJECTS_SIZES.length)]}px` }}
            className="single-project-container">
            <motion.div 
              initial={{
                opacity: 0,
                paddingBottom: "3%"
              }}
              whileHover={{
                opacity: 1,
                paddingBottom: "7%"
              }}
              transition={{
                duration: 0.2
              }}
              className="project-info">
              <h3>Alura</h3>
              <p className="p">Olha, se você não me ama, então não me ligue</p>
              <div className="project-tool">
                <p className="p">React</p>
              </div>
            </motion.div>

        </div>
          <div 
            style={{ backgroundImage:"url(/media/icons/alura.jpg)",
                      height: `${PROJECTS_SIZES[Math.floor(Math.random() * PROJECTS_SIZES.length)]}px` }}
            className="single-project-container">
            <motion.div 
              initial={{
                opacity: 0,
                paddingBottom: "3%"
              }}
              whileHover={{
                opacity: 1,
                paddingBottom: "7%"
              }}
              transition={{
                duration: 0.2
              }}
              className="project-info">
              <h3>Alura</h3>
              <p className="p">Olha, se você não me ama, então não me ligue</p>
              <div className="project-tool">
                <p className="p">React</p>
              </div>
            </motion.div>

        </div>
          <div 
            style={{ backgroundImage:"url(/media/icons/alura.jpg)",
                      height: `${PROJECTS_SIZES[Math.floor(Math.random() * PROJECTS_SIZES.length)]}px` }}
            className="single-project-container">
            <motion.div 
              initial={{
                opacity: 0,
                paddingBottom: "3%"
              }}
              whileHover={{
                opacity: 1,
                paddingBottom: "7%"
              }}
              transition={{
                duration: 0.2
              }}
              className="project-info">
              <h3>Alura</h3>
              <p className="p">Olha, se você não me ama, então não me ligue</p>
              <div className="project-tool">
                <p className="p">React</p>
              </div>
            </motion.div>

        </div>
          <div 
            style={{ backgroundImage:"url(/media/icons/alura.jpg)",
                      height: `${PROJECTS_SIZES[Math.floor(Math.random() * PROJECTS_SIZES.length)]}px` }}
            className="single-project-container">
            <motion.div 
              initial={{
                opacity: 0,
                paddingBottom: "3%"
              }}
              whileHover={{
                opacity: 1,
                paddingBottom: "7%"
              }}
              transition={{
                duration: 0.2
              }}
              className="project-info">
              <h3>Alura</h3>
              <p className="p">Olha, se você não me ama, então não me ligue</p>
              <div className="project-tool">
                <p className="p">React</p>
              </div>
            </motion.div>

        </div>
          <div 
            style={{ backgroundImage:"url(/media/icons/alura.jpg)",
                      height: `${PROJECTS_SIZES[Math.floor(Math.random() * PROJECTS_SIZES.length)]}px` }}
            className="single-project-container">
            <motion.div 
              initial={{
                opacity: 0,
                paddingBottom: "3%"
              }}
              whileHover={{
                opacity: 1,
                paddingBottom: "7%"
              }}
              transition={{
                duration: 0.2
              }}
              className="project-info">
              <h3>Alura</h3>
              <p className="p">Olha, se você não me ama, então não me ligue</p>
              <div className="project-tool">
                <p className="p">React</p>
              </div>
            </motion.div>

        </div>
          <div 
            style={{ backgroundImage:"url(/media/icons/alura.jpg)",
                      height: `${PROJECTS_SIZES[Math.floor(Math.random() * PROJECTS_SIZES.length)]}px` }}
            className="single-project-container">
            <motion.div 
              initial={{
                opacity: 0,
                paddingBottom: "3%"
              }}
              whileHover={{
                opacity: 1,
                paddingBottom: "7%"
              }}
              transition={{
                duration: 0.2
              }}
              className="project-info">
              <h3>Alura</h3>
              <p className="p">Olha, se você não me ama, então não me ligue</p>
              <div className="project-tool">
                <p className="p">React</p>
              </div>
            </motion.div>

        </div>
          <div 
            style={{ backgroundImage:"url(/media/icons/alura.jpg)",
                      height: `${PROJECTS_SIZES[Math.floor(Math.random() * PROJECTS_SIZES.length)]}px` }}
            className="single-project-container">
            <motion.div 
              initial={{
                opacity: 0,
                paddingBottom: "3%"
              }}
              whileHover={{
                opacity: 1,
                paddingBottom: "7%"
              }}
              transition={{
                duration: 0.2
              }}
              className="project-info">
              <h3>Alura</h3>
              <p className="p">Olha, se você não me ama, então não me ligue</p>
              <div className="project-tool">
                <p className="p">React</p>
              </div>
            </motion.div>

        </div>
          <div 
            style={{ backgroundImage:"url(/media/icons/uniRv.jpg)",
                      height: `${PROJECTS_SIZES[Math.floor(Math.random() * PROJECTS_SIZES.length)]}px` }}
            className="single-project-container">
            <motion.div 
              initial={{
                opacity: 0,
                paddingBottom: "3%"
              }}
              whileHover={{
                opacity: 1,
                paddingBottom: "7%"
              }}
              transition={{
                duration: 0.2
              }}
              className="project-info">
              <h3>Alura</h3>
              <p className="p">Olha, se você não me ama, então não me ligue</p>
              <div className="project-tool">
                <p className="p">React</p>
              </div>
            </motion.div>

        </div>
        
        </div>
        <PageSliderBtn text={langTexts[`${language}`].projects.pageSliderBtn} theme={theme} route='contact' />
      </motion.div>
    );
  }