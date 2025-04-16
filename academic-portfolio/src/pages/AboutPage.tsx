import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-1">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md sticky top-24"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=936&q=80"
              alt="Dr. Jane Smith"
              className="w-full h-64 object-cover object-center rounded-md mb-6"
            />
            <h2 className="text-xl font-bold mb-2">Dr. Jane Smith</h2>
            <p className="text-muted-foreground mb-4">Ph.D in Computer Science</p>

            <div className="space-y-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>Assistant Professor<br /><span className="text-muted-foreground text-sm">Stanford University</span></p>
              </div>

              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>jane.smith@stanford.edu</p>
              </div>

              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Computer Science Department<br /><span className="text-muted-foreground text-sm">Stanford, CA 94305</span></p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-2">
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Biography</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                I am an Assistant Professor in the Computer Science Department at Stanford University. My research
                lies at the intersection of machine learning, natural language processing, and human-computer
                interaction. I am particularly interested in building intelligent systems that can understand and
                generate human language, and that can learn from human feedback.
              </p>
              <p className="mb-4">
                Prior to joining Stanford, I completed my Ph.D. at MIT, where I was advised by Prof. John Doe. My
                dissertation focused on developing new methods for training language models with minimal human supervision.
                I also spent time as a research intern at Google AI, where I worked on improving the efficiency of large
                language models.
              </p>
              <p>
                When I'm not doing research, I enjoy hiking, photography, and playing the piano. I'm also passionate
                about mentoring students and promoting diversity in computer science.
              </p>
            </div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold">Ph.D. in Computer Science</h3>
                  <span className="text-accent">2017-2021</span>
                </div>
                <p className="text-primary font-medium">Massachusetts Institute of Technology</p>
                <p className="text-muted-foreground">Thesis: "Self-Supervised Learning for Natural Language Understanding"</p>
                <p className="text-muted-foreground">Advisor: Prof. John Doe</p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold">M.S. in Computer Science</h3>
                  <span className="text-accent">2015-2017</span>
                </div>
                <p className="text-primary font-medium">Stanford University</p>
                <p className="text-muted-foreground">Focus: Artificial Intelligence and Machine Learning</p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold">B.S. in Computer Science</h3>
                  <span className="text-accent">2011-2015</span>
                </div>
                <p className="text-primary font-medium">University of California, Berkeley</p>
                <p className="text-muted-foreground">Minor: Mathematics</p>
                <p className="text-muted-foreground">Graduated Summa Cum Laude</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Affiliations</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Stanford Artificial Intelligence Laboratory (SAIL)</h3>
                    <p className="text-muted-foreground">Faculty Member</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Association for Computational Linguistics (ACL)</h3>
                    <p className="text-muted-foreground">Member</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Neural Information Processing Systems (NeurIPS)</h3>
                    <p className="text-muted-foreground">Program Committee Member</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">IEEE Computer Society</h3>
                    <p className="text-muted-foreground">Senior Member</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
