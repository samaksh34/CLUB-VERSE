export const events = [
    {
        id: 1,
        title: "Robotics Competition 2024",
        club: "Robotics Club",
        date: "Dec 15, 2024",
        time: "10:00 AM - 5:00 PM",
        location: "Engineering Building, Hall A",
        category: "Technical",
        image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=1000",
        description: "Join us for an exciting robotics competition where teams will compete to build the most innovative autonomous robots. Prizes worth $5000!",
        tags: ["Robotics", "AI", "Competition"],
        registeredCount: 245,
        badges: ["Featured"]
    },
    {
        id: 2,
        title: "Campus Music Fest",
        club: "Music Society",
        date: "Dec 20, 2024",
        time: "6:00 PM - 10:00 PM",
        location: "University Amphitheater",
        category: "Music",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1000",
        description: "Experience an unforgettable evening of live performances from talented student musicians across various genres.",
        tags: ["Music", "Live", "Concert"],
        registeredCount: 532,
        badges: ["Trending"]
    },
    {
        id: 3,
        title: "InnovateX Hackathon",
        club: "Tech Innovators",
        date: "Dec 22, 2024",
        time: "9:00 AM (48 hours)",
        location: "Computer Science Block",
        category: "Hackathons",
        image: "https://images.unsplash.com/photo-1504384308090-c54be3855091?auto=format&fit=crop&q=80&w=1000",
        description: "48-hour hackathon focused on solving real-world problems using technology. Amazing prizes and mentorship opportunities await!",
        tags: ["Coding", "Hackathon", "Innovation"],
        registeredCount: 186,
        badges: ["Featured", "Trending"]
    },
    {
        id: 4,
        title: "Winter Drama Showcase",
        club: "Drama Club",
        date: "Dec 28, 2024",
        time: "5:00 PM - 8:00 PM",
        location: "Main Auditorium",
        category: "Drama",
        image: "https://images.unsplash.com/photo-1503095392269-27528ca38ea4?auto=format&fit=crop&q=80&w=1000",
        description: "A series of short plays and monologues directed and performed by students. Come support the arts!",
        tags: ["Theatre", "Acting", "Performance"],
        registeredCount: 120,
        badges: []
    },
    {
        id: 5,
        title: "Creative Writing Workshop",
        club: "Literary Society",
        date: "Jan 05, 2025",
        time: "2:00 PM - 4:00 PM",
        location: "Library Seminar Room",
        category: "Literary",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000",
        description: "Unlock your creativity with guided writing exercises and peer feedback sessions.",
        tags: ["Writing", "Literature", "Workshop"],
        registeredCount: 45,
        badges: ["Workshops"]
    },
    {
        id: 6,
        title: "Inter-Hall Football Tournament",
        club: "Sports Committee",
        date: "Jan 10, 2025",
        time: "8:00 AM - 6:00 PM",
        location: "University Stadium",
        category: "Sports",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1000",
        description: "Cheer for your hall team in the biggest football tournament of the year.",
        tags: ["Football", "Sports", "Tournament"],
        registeredCount: 310,
        badges: ["Social"]
    },
    {
        id: 7,
        title: "Web Development Workshop",
        club: "Tech Innovators",
        date: "Dec 16, 2024",
        time: "2:00 PM - 5:00 PM",
        location: "Lab 301, IT Building",
        category: "Workshops",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
        description: "Learn modern web development from industry experts. Covering React, Node.js, and best practices for building scalable applications.",
        tags: ["Web Dev", "Coding", "Workshop"],
        registeredCount: 98,
        badges: []
    }
];

export const clubs = [
    {
        id: 1,
        name: "Robotics Club",
        domain: "Technical",
        logo: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=200",
        banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1500",
        tagline: "Building the future, one bot at a time.",
        description: "We are a community of innovators passionate about robotics, automation, and AI. Our members design, build, and code robots for various competitions and real-world applications.",
        vision: "To become a leading hub for undergraduate robotics research and development.",
        members: 120,
        eventsHosted: 14,
        founded: 2018,
        active: true,
        email: "robotics@clubverse.edu",
        instagram: "@robotics_clubverse",
        coordinator: "Dr. Alan Grant",
        team: [
            { name: "Sarah Connor", role: "President", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
            { name: "John Smith", role: "Vice President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
            { name: "Emily Chen", role: "Tech Head", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" }
        ]
    },
    {
        id: 2,
        name: "Music Society",
        domain: "Music",
        logo: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=200",
        banner: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=1500",
        tagline: "Where words fail, music speaks.",
        description: "The Music Society is the heart of campus culture, bringing together vocalists, instrumentalists, and producers. We organize jams, concerts, and workshops throughout the year.",
        vision: "To foster a vibrant musical environment where every student can find their rhythm.",
        members: 250,
        eventsHosted: 24,
        founded: 2015,
        active: true,
        email: "music@clubverse.edu",
        instagram: "@musicsoc_cv",
        coordinator: "Prof. Lisa Minci",
        team: [
            { name: "David Bowie", role: "President", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
            { name: "Freddie M", role: "Secretary", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200" }
        ]
    },
    {
        id: 3,
        name: "Tech Innovators",
        domain: "Technical",
        logo: "https://images.unsplash.com/photo-1531297461136-82af022f5b79?auto=format&fit=crop&q=80&w=200",
        banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1500",
        tagline: "Innovating for a better tomorrow.",
        description: "Focused on software development, cloud computing, and emerging tech. We host hackathons, coding bootcamps, and industry talks.",
        vision: "Empowering students with industry-ready tech skills.",
        members: 300,
        eventsHosted: 30,
        founded: 2016,
        active: true,
        email: "tech@clubverse.edu",
        instagram: "@techinnovators",
        coordinator: "Prof. Turing",
        team: [
            { name: "Ada Lovelace", role: "President", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
            { name: "Grace Hopper", role: "Tech Lead", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200" }
        ]
    },
    {
        id: 4,
        name: "Drama Club",
        domain: "Drama",
        logo: "https://images.unsplash.com/photo-1503095392269-27528ca38ea4?auto=format&fit=crop&q=80&w=200",
        banner: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&q=80&w=1500",
        tagline: "All the world's a stage.",
        description: "From street plays to grand theatre productions, we cover it all. Join us to explore acting, direction, scriptwriting, and stage design.",
        vision: "Promoting theatrical arts and self-expression on campus.",
        members: 85,
        eventsHosted: 12,
        founded: 2019,
        active: true,
        email: "drama@clubverse.edu",
        instagram: "@drama_clubverse",
        coordinator: "Mr. Shakespeare",
        team: [
            { name: "Viola Davis", role: "President", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" }
        ]
    },
    {
        id: 5,
        name: "Samvaad Theatre Group",
        domain: "Cultural",
        logo: "https://images.unsplash.com/photo-1507676184212-d03ab07a11d0?auto=format&fit=crop&q=80&w=200",
        banner: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1500",
        tagline: "Correction through connection.",
        description: "A street play society dedicated to raising awareness about social issues through powerful nukkad nataks.",
        vision: "Social change through art.",
        members: 60,
        eventsHosted: 20,
        founded: 2017,
        active: true,
        email: "samvaad@clubverse.edu",
        instagram: "@samvaad_nukkad",
        coordinator: "Ms. Safdar",
        team: [
            { name: "Naseeruddin", role: "Convener", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" }
        ]
    },
    {
        id: 6,
        name: "Sports Committee",
        domain: "Sports",
        logo: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=200",
        banner: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1500",
        tagline: "Faster, Higher, Stronger.",
        description: "Responsible for all sports activities on campus, from inter-hall tournaments to varsity leagues.",
        vision: "To build a fit and competitive sporting culture.",
        members: 400,
        eventsHosted: 50,
        founded: 2010,
        active: true,
        email: "sports@clubverse.edu",
        instagram: "@sports_cv",
        coordinator: "Coach Carter",
        team: [
            { name: "Michael J", role: "Sports Sec", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200" }
        ]
    }
];

export const categories = [
    "All",
    "Cultural",
    "Technical",
    "Sports",
    "Music",
    "Drama",
    "Literary",
    "Hackathons",
    "Workshops",
    "Social",
    "Entrepreneurship"
];
