export function changeLanguage(lang) {
    localStorage.setItem("lang", lang)
}

export const langTexts = {
    title: " | Caio Geraldo | Developer",
    br: {
        menu: ["Sobre mim", "Projetos", "Contato", "Início", "Currículo"],
        dropdownMenu: ["Selecione sua língua", "Português", "Inglês", "Tema", "Mudar tema"],
        home: {
            header: "Olá, eu sou Caio Geraldo",
            descriptions: [
                "Desenvolvedor frontend, técnico em análise e desenvolvimento de sistemas, estudante em curso superior de engenharia de software, entusiasta de ciência da computação e curioso",
                "Trabalho para criar websites bem feitos e detalhados. Olhe mais "
            ],
            descriptionsMarkers: [{text: 'sobre mim', route: 'about'}, {text: 'meus projetos', route: 'projects'}, {text: 'currículo', route: 'resume'}, {text: 'contato', route: 'contact'}],
            emailConvite: " ou me mande um email em",
            pageSliderBtn: "Veja mais sobre mim"
        },
        about: {
            header: 'Sobre mim.',
            topics: [
                {
                    title: "Apresentação", 
                    body: "Tenho 18 anos, moro em Rio Verde, Goiás, e sou um desenvolvedor web front-end com paixão por criar interfaces de usuário modernas e interativas. Tenho experiência em projetos de alta qualidade e estou sempre em busca de aprimorar minhas habilidades. Estou animado para trabalhar em projetos desafiadores e contribuir para a criação de experiências incríveis para os usuários."
                },
                {
                    title: "Ferramentas", 
                    body: [
                        {
                            img: "python",
                            txt:"O python é uma linguagem de programação alto nível multiparadigma, utilizo essa ferramenta para controle de dados e criação de API's."
                        },
                        {
                            img: "html",
                            txt: "O HTML é uma linguagem de marcação de hipertexto utilizada para a construção de páginas Web."
                        },
                        {
                            img: "css",
                            txt: "O CSS é uma linguagem de estilização em cascata utilizada para estilizar as páginas HTML."
                        },
                        {
                            img: "javascript",
                            txt: "JavaScript é outra linguagem de programação multiparadigma de alto nível, e ainda é uma das ferramentas de programação mais utilizadas no mundo, e a mais utilizada para a criação de websites. É a minha especialidade."
                        },
                        {
                            img: "node",
                            txt: "O NodeJS é uma RTE (Runtime Environment) utilizada para a execução de códigos JavaScript fora de um navegador Web. Utilizo o Node, principalmente, para a criação e utilização de API's."
                        },
                        {
                            img: "typescript",
                            txt: "O TypeScript é um pacote de recursos que trazem formas mais eficientes de escrever um código JS, no caso, a adição é a tipagem estática."
                        },
                        {
                            img: "react",
                            txt:  "O React é uma biblioteca front-end de Javascript, que traz consigo o paradigma declarativo, a componentização, a velocidade da virtual-dom e muito mais!."
                        },
                        {
                            img: "react-router",
                            txt: "O React-router é uma framework JavaScript que me auxilia a lidar com o roteamento client e server-side de aplicações React."
                        },
                        {
                            img: "git",
                            txt: "O Git é o VCS (Version Control System) distribuído mais utilizado do mundo (e o melhor)."
                        }
                    ]
                },
                {
                    title: "Habilidades", 
                    body: [
                        "Experiência com projetos envolvendo responsividade e usabilidade do produto.",
                        "Apto para trabalhar com metodologias ágeis, bem como tenho prática com agile skills para programação.",
                        "Capacidade para criar interfaces de usuário com dessign atraente.",
                        "Pleno entendimento de estruturas web, e consigo trabalhar com a integração de API's",
                        "Prática com bancos de dados relacionais e não relacionais, e sei como utiliza-los juntamente ao programa Web.",
                        "Entendimento sobre processos de contrução, arquitetura e engenharia de softwares limpos e bem estruturados."
                    ]
                },
                {
                    title: "Formações", 
                    body: [
                        {
                            img: "senai",
                            url: "https://senaigoias.com.br/home",
                            desc: "Curso técnico e integrado de análise e desenvolvimento de sistemas."
                        },
                        {
                            img: "rocketseat",
                            url: "https://www.rocketseat.com.br/",
                            desc: "Curso técnico e integrado de desenvolvimento Web."
                        },
                        {
                            img: "alura",
                            url: "https://www.alura.com.br/",
                            desc: "Curso técnico e integrado de desenvolvimento Web com React."
                        },
                        {
                            img: "udemy",
                            url: "https://www.udemy.com/pt/",
                            desc: "Curso técnico e integrado de desenvolvimento Web FullStack com React + Django."
                        },
                        {
                            img: "uniRv",
                            url: "https://www.unirv.edu.br/",
                            desc: "Curso superior em engenharia de software - cursando"
                        }
                    ]
                }
            ],
            pageSliderBtn: "Dê uma olhada nos meus projetos"
        },
        projects: {
            header: "Projetos.",
            body: [
                {
                    name: "Landing page",
                    img: "landingpage",
                    tools: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
                    description: "Uma Landing page para faz-tudo, simples, limpa e profissional, com destaque para serviços oferecidos e seção de contato.",
                    githubRepo: "PauloCesar"
                },
                {
                    name: "App de clima",
                    img: "weatherapp",
                    tools: ["React.js", "TypeScript", "Tailwind CSS", "API's", "Vite"],
                    description: "Um Weather App com interface intuitiva e informações precisas sobre a previsão do tempo para locais específicos, incluindo temperatura atual, mínima, máxima e mais.",
                    githubRepo: "WeatherApp"
                },
            ],
            pageSliderBtn: "Veja mais no meu Currículo"
        },
        resume: {
            header: "Currículo.",
            pageSliderBtn: "Convencido a me contatar agora?"
        },
        contact: {
            header: "Contato.",
            body: [
                "Acesse alguma das minhas redes, ou me envie um e-mail diretamente em ",
                "Enviar mensagem",
                "Mensagem"
            ],
            pageSliderBtn: "Volte para o início"
        }
    },
    eua: {
        menu: ["About", "Projects", "Contact", "Home", "Resume"],
        dropdownMenu: ["Select your language", "Portuguese", "English", "Theme", "Change theme"],
        home: {
            header: "Hello, i'm Caio Geraldo",
            descriptions: [
                "Frontend developer, systems analysis and development technician, undergraduate student of software engineering, computer science enthusiast and curious",
                "I work to create well-made and detailed websites. Look more "
            ],
            descriptionsMarkers: [{text: 'about me', route: 'about'}, {text: 'my projects', route: 'projects'}, {text: 'resume', route: 'resume'}, {text: 'contact', route: 'contact'}],
            emailConvite: " or send me an email on",
            pageSliderBtn: "See more about me"
        },
        about: {
            header: 'About me.',
            topics: [
                {
                    title: "Presentation", 
                    body: "I'm 18 years old, I live in Rio Verde, Goiás, and I'm a front-end web developer with a passion for creating modern and interactive user interfaces. I have experience in high-quality projects and I'm always looking to improve my skills. I'm excited to work on challenging projects and contribute to creating amazing experiences for users."

                },
                {
                    title: "Tools", 
                    body: [
                        {
                            img: "python",
                            txt:"Python is a high-level multiparadigm programming language, I like to use this tool to control data and create APIs."
                        },
                        {
                            img: "html",
                            txt: "HTML is a hypertext markup language used to build web pages."
                        },
                        {
                            img: "css",
                            txt: "CSS is a cascading styling language used to style HTML pages."
                        },
                        {
                            img: "javascript",
                            txt: "JavaScript is another high-level multiparadigm programming language, and it is still one of the most used programming tools in the world, and the most used for creating websites. It's my specialty."
                        },
                        {
                            img: "node",
                            txt: "NodeJS is an RTE (Runtime Environment) used to run JavaScript code outside a web browser. I use Node mainly to create and use API's."
                        },
                        {
                            img: "typescript",
                            txt: "TypeScript is a pack of resources that bring more efficient ways to write JS code, in this case, the addition is static typing."
                        },
                        {
                            img: "react",
                            txt:  "React is a Javascript front-end library, which brings with it the declarative paradigm, componentization, virtual-dom speed and much more!."
                        },
                        {
                            img: "react-router",
                            txt: "React-router is a JavaScript framework that helps me handle client and server-side routing of React applications."
                        },
                        {
                            img: "git",
                            txt: "Git is the world's most widely used distributed VCS (Version Control System). and the best!."
                        }
                    ]
                    
                },
                {
                    title: "Skills", 
                    body: [
                        "Experience with projects involving product responsiveness and usability.",
                        "Able to work with agile methodologies, as well as have practice with agile programming skills.",
                        "Ability to create user interfaces with attractive design.",
                        "Full understanding of web structures, and I can work with API integration",
                        "Experience with relational and non-relational databases, and I know how to use them together with the Web program.",
                        "Understanding of clean and well-structured software construction, architecture and engineering processes."
                    ]
                },
                {
                    title: "Formations", 
                    body: [
                        {
                            img: "senai",
                            url: "https://senaigoias.com.br/home",
                            desc: "Technical and integrated course of systems analysis and development."
                        },
                        {
                            img: "rocketseat",
                            url: "https://www.rocketseat.com.br/",
                            desc: "Technical and integrated Web development course."
                        },
                        {
                            img: "alura",
                            url: "https://www.alura.com.br/",
                            desc: "Technical and integrated web development course with React."
                        },
                        {
                            img: "udemy",
                            url: "https://www.udemy.com/",
                            desc: "Technical and integrated FullStack Web development course with React + Django."

                        },
                        {
                            img: "uniRv",
                            url: "https://www.unirv.edu.br/",
                            desc: "Higher degree in software engineering - studying"
                        }
                    ]
                }
            ],
            pageSliderBtn: "Take a look at my projects"
        },
        projects: {
            header: "Projects.",
            body: [
                {
                    githubRepo: "portfolio",
                    img: "alura",
                    name: "Alura",
                    description: "Este é um teste. Aqui viria a descrição do projeto.",
                    tools: [
                        "React",
                        "TypeScript",
                        "Node.js",
                        "Python"
                    ]

                }
            ],
            pageSliderBtn: "See more in my resume"
        },
        resume: {
            header: "Resumé.",
            pageSliderBtn: "Convenced to contact me now?"
        },
        contact: {
            header: "Contact.",
            body: [
                "Access one of my networks, or send me an email directly at ",
                "Send Message",
                "Message"
            ],
            pageSliderBtn: "Go back home"
        }
    }
}