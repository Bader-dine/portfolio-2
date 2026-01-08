export const FALLBACK_RESPONSES = {
    skills: [
        "Bader has a diverse set of technical skills, including Python, C++, and JavaScript/TypeScript. In the industrial world, he's an expert in PLC programming (TIA Portal, Siemens) and SCADA systems. He also specializes in Computer Vision (OpenCV, YOLO) and AI (PyTorch, TensorFlow, OpenVINO).",
        "On the technical side, Bader is proficient in Robotics (ROS), Video Processing (GStreamer, Milestone XProtect), and Embedded Systems. He's also skilled in modern web development with Next.js and React.",
        "Bader's expertise spans Electrical Engineering, Automation, and AI. He's particularly strong in developing intelligent video analytics systems and industrial automation solutions."
    ],
    projects: [
        "Bader has worked on several impressive projects. One highlight is a Video Analytics System integrated with Milestone XProtect using GStreamer and OpenVINO. He also developed a Facial Recognition System and an Object Detection system using YOLO.",
        "In the industrial sector, Bader has implemented advanced automation solutions using PLCs and TIA Portal. He also worked on Neural Networks for Electrical Fault Diagnosis and various Robotics Vision systems.",
        "You can see a full list of Bader's work on the Projects page. Key highlights include his work in AI-driven surveillance, industrial automation, and robotics."
    ],
    experience: [
        "Bader is an Electrical & Automation Engineer with experience in both industry and research. He has a strong background in robotics and AI, having worked on complex systems that integrate hardware and software.",
        "With a focus on innovation, Bader has held roles where he designed system architectures, implemented AI pipelines, and established real-time communication protocols for industrial applications.",
        "Bader's professional journey is marked by a commitment to technical excellence in automation and artificial intelligence. You can find more details in the About and CV sections."
    ],
    contact: [
        "You can reach out to Bader via the Contact page. He's available through email and LinkedIn for professional inquiries or collaborations.",
        "Bader is always open to discussing new opportunities in Robotics, AI, and Automation. Feel free to connect with him on LinkedIn or send an email through the contact form.",
        "Looking to get in touch? The Contact section has all the links you need to reach Bader directly."
    ],
    greetings: [
        "Hello! I'm Bader's AI assistant. While I'm currently in a limited mode, I can still help you learn about his skills, projects, and experience. What would you like to know?",
        "Hi there! I'm here to represent Bader. I'm currently running with limited capacity, but I can still answer questions about his professional background and technical expertise.",
        "Welcome! I'm Bader's virtual assistant. How can I help you explore his portfolio today?"
    ],
    general: [
        "I'm currently in a limited mode, but I can still tell you about Bader's expertise in Robotics, Computer Vision, and Industrial Automation. Feel free to ask about his skills or projects!",
        "Bader is a specialist in bridging the gap between AI and industrial systems. I can provide information about his technical background, even while I'm in this demo mode.",
        "I'm here to help you learn more about Bader Eddine Dakhli's work as an Electrical & Automation Engineer. Ask me about his projects or technical skills!"
    ]
};

export function getLocalFallbackResponse(message: string): string {
    const msg = message.toLowerCase();

    const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    if (msg.includes('skill') || msg.includes('compétence') || msg.includes('techno') || msg.includes('expert')) {
        return getRandom(FALLBACK_RESPONSES.skills);
    }

    if (msg.includes('project') || msg.includes('projet') || msg.includes('work') || msg.includes('réalisation')) {
        return getRandom(FALLBACK_RESPONSES.projects);
    }

    if (msg.includes('experience') || msg.includes('parcours') || msg.includes('cv') || msg.includes('job') || msg.includes('travail')) {
        return getRandom(FALLBACK_RESPONSES.experience);
    }

    if (msg.includes('contact') || msg.includes('email') || msg.includes('linkedin') || msg.includes('joindre')) {
        return getRandom(FALLBACK_RESPONSES.contact);
    }

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('salut') || msg.includes('bonjour') || msg.includes('hey')) {
        return getRandom(FALLBACK_RESPONSES.greetings);
    }

    return getRandom(FALLBACK_RESPONSES.general);
}
