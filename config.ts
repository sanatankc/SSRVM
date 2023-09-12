import campus1 from './src/images/campus/gas/gallery/1.jpeg';
import campus2 from './src/images/campus/gas/gallery/2.jpeg';
import campus3 from './src/images/campus/gas/gallery/3.jpeg';

import testimonial1 from './src/images/testimonial/1.png';
import testimonial2 from './src/images/testimonial/2.png';
import testimonial3 from './src/images/testimonial/3.png';
import principalGAW from "./src/images/campus/gaw/principal.png"
import leadership1 from "./src/images/leadership/1.png"
import topper1 from "./src/images/campus/toppers/topper.png"
import topper2 from "./src/images/campus/toppers/topper2.png"
import topper3 from "./src/images/campus/toppers/topper3.png"
import topper4 from "./src/images/campus/toppers/topper4.png"

type Campus = {
  title: string;
  description: string;
  hightlights?: string[];
  internalName: string;
  images: string[];
  topHeading?: string;
  subHeading?: string;
  bgImage?: string;
  ctaText: string;
  leaderMessage?: LeaderMessage[];
  academic?: Academic[];
  facilities?: Facilities[];
  contact?: Contact;
  toppers?: Toppers[];
};
export type ContactDetails = {
  label: string;
  value: string;
  type: 'contact' | 'mail' | 'address',
}

type Contact = {
  details: {
    [key: string]: ContactDetails | undefined; // Add index signature
    phoneNo?: ContactDetails;
    workingHours?: ContactDetails;
    address?: ContactDetails;
  };
  mapEmbedLink: string;
  mindlerLink?: string;
}

type Facilities = {
  title: string;
  description: string;
  images: string[];
  bgColor?: string;

}

type Academic = {
  title: string;
  description: string;
  images: string[];
  highlights?: string[];
}
type LeaderMessage = {
  image: string;
  name: string;
  role: string;
  body: string;
}


type Testimonial = {
  image: string;
  quote: string;
  ctaText?: string;
  ctaLink?: string;
  author?: string;
};

type School = {
  discription: string;
};

type Testimonials = {
  title: string;
  subtitle: string;
  data: Testimonial[];
};
type indexPage =  {
    hero : {
      title: string;
      subtitle: string; 
      bgImage: string;
      topHeading: string;
      description: string;
    }
}
type LeaderShipData = {
  name: string;
  role: string;
  image: string;
}
type LeaderShip = {
  data: {
    trustee: LeaderShipData[]
    government: LeaderShipData[]

  }
}
type Toppers = {
  name: string;
  ranks: string;
  marks: string;
  image: string;
}

interface Data {
  indexPage: indexPage;
  ctaLink: string;
  school: School;
  campus: Campus[];
  testimonials: Testimonials;
  leadership: LeaderShip; 
}

const data: Data = {
  
  ctaLink: 'https://www.insightacademy.in/',
  school: {
    discription: 'Insight Academy, launched in 2007, ranks among the best schools in Bangalore. Upholding the principle of "Quality Education for All", we create an inclusive, secular educational landscape where all students can flourish, instilling strong academics and comprehensive growth beyond traditional classroom confines.',
    
  },
  campus: [
    {
      title: 'Kanakapura Road (ICSE)',
      internalName: 'kanakapura',
      subHeading: 'Marathahalli Campus (CBSE)',
      topHeading: "Welcome to",
      description: 'Located near the peaceful ISRO Layout amidst greenery, we offer focused learning within our ICSE-affiliated institution.',
     
      images: [campus1,campus2,campus3],
      bgImage: campus1,
      ctaText: 'Explore Campus',
      leaderMessage: [
        {
          image: principalGAW,
          name: 'Mrs. Singupilla Ratna Kumari',
          role: 'PRINCIPAL',
          body: "Insight Academy, founded in 2007, is a school dedicated to providing quality education for all children, regardless of their intelligence, physical condition, or challenges. With a focus on holistic development and a committed team of well-trained teachers, the school goes beyond the minimum requirements to offer additional facilities and enhance students' learning abilities. The strong partnership between students, parents, and the institution fosters a foundation for a better future."
        }
      ],
      academic: [
        {
          title: 'Academic',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development. Key features of our ECE program include a 1:25 teacher-student ratio, multisensory learning, teachers skilled in personalized attention, communication skills development, and a strong emphasis on extracurricular activities like fine arts and sports, creating a foundation for lifelong learning and wellbeing.',
          images: [campus1],
          highlights: [
           "1:25 Student-to-Teacher ratio",
           "Multi-sensory, experiential learning approach",
           "Emphasis on communication skills",
           "Extracurriculars activities like swimming, tennis, music & art"
          ],
        },
        {
          title: 'Academic',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development. Key features of our ECE program include a 1:25 teacher-student ratio, multisensory learning, teachers skilled in personalized attention, communication skills development, and a strong emphasis on extracurricular activities like fine arts and sports, creating a foundation for lifelong learning and wellbeing.',
          images: [campus1],
          highlights: [
            "1:25 Student-to-Teacher ratio",
            "Multi-sensory, experiential learning approach",
            "Emphasis on communication skills",
            "Extracurriculars activities like swimming, tennis, music & art"
           ],
        },
        {
          title: 'Academic',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development. Key features of our ECE program include a 1:25 teacher-student ratio, multisensory learning, teachers skilled in personalized attention, communication skills development, and a strong emphasis on extracurricular activities like fine arts and sports, creating a foundation for lifelong learning and wellbeing.',
          images: [campus1],
          highlights: [
            "1:25 Student-to-Teacher ratio",
            "Multi-sensory, experiential learning approach",
            "Emphasis on communication skills",
            "Extracurriculars activities like swimming, tennis, music & art"
           ],
        },
      ],
      facilities: [
        {
          title: 'Smart-Classes',
          description: 'Insight Academy emphasizes hands-on learning through our continually upgraded, modern labs. With ',
          images: [campus1],
          bgColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(245, 204, 79, 0.20) 100%);',
          
        },
        
        {
          title: 'Smart-Classes',
          description: "Insight Academy's library, a sanctuary for book enthusiasts, is spacious and bright, housing a diverse .",
          images: [campus1],
          
        },
        
        {
          title: 'Smart-Classes',
          description: "Insight Academy integrates technology into education, providing computer learning with a dedicated",
          images: [campus1]
        },
        {
          title: 'Smart-Classes',
          description: "Insight Academy integrates technology into education, providing computer learning with a dedicated",
          images: [campus1]
        },
      ],
      contact: {
        details: {
          phoneNo: {
            label: 'Call us On',
            value: '+91 80 26667333, +91 80 26667444',
            type: 'contact'
          },
          workingHours: {
            label: 'Mail us at',
            value: 'info@insightacademy.in',
            type: 'mail'
          },
          address: {
            label: 'We are here',
            value: '#20, Vasanthpura Main Road, Off Kanakapura Road, Bangalore – 560 062',
            type: 'address'
          }
        },
        mapEmbedLink: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAIyVF44QhoXfwwKHLd1h3N49cQTHS0Yvw&q=Whitefield Glentree Academy, Whitefield, Bengaluru',
        mindlerLink: 'https://www.mindler.com/schools/GLENTREE2023'
      },
      toppers: [
        {
          name: 'Aniksha <br> Raghuveera Kamat',
          ranks: 'Rank 1',
          marks: '98.8%',
          image: topper1,
        },
        {
          name: 'Anshul A Gadgoli',
          ranks: 'Rank 2',
          marks: '98.8%',
          image: topper2,
        },
        {
          name: 'Harsh Shalgar',
          ranks: 'Rank 3',
          marks: '98.8%',
          image: topper3,
        },
        {
          name: 'Hasini Gupta PS',
          ranks: 'Rank 4',
          marks: '98.8%',
          image: topper4,
        },
      ]
      
    },

    {
      title: 'Marathahalli (CBSE)',
      internalName: 'marathahalli',
      subHeading: 'Marathahalli Campus (CBSE)',
      topHeading: "Welcome to",
      description: 'Conveniently positioned in Marathahalli, we foster comprehensive education in a CBSE-affiliated framework.',
      images: [campus1,campus2,campus3],
      bgImage: campus1,
      ctaText: 'Explore Campus',
      leaderMessage: [
        {
          image: principalGAW,
          name: 'Mrs. Singupilla Ratna Kumari',
          role: 'PRINCIPAL',
          body: 'At Glentree, we embrace the belief that learning is a lifelong process. We foster curiosity and encourage our students to be self-motivated learners. Our holistic approach focuses on developing their intelligence, emotions, and spirituality. By providing an enlightened and innovative learning environment, we empower them to become global citizens, offering transformative experiences and opportunities for personal growth.'
        }
      ],
      academic: [
        {
          title: 'Academic',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development. Key features of our ECE program include a 1:25 teacher-student ratio, multisensory learning, teachers skilled in personalized attention, communication skills development, and a strong emphasis on extracurricular activities like fine arts and sports, creating a foundation for lifelong learning and wellbeing.',
          images: [campus1],
          highlights: [
           "1:25 Student-to-Teacher ratio",
           "Multi-sensory, experiential learning approach",
           "Emphasis on communication skills",
           "Extracurriculars activities like swimming, tennis, music & art"
          ],
        },
        {
          title: 'Academic',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development. Key features of our ECE program include a 1:25 teacher-student ratio, multisensory learning, teachers skilled in personalized attention, communication skills development, and a strong emphasis on extracurricular activities like fine arts and sports, creating a foundation for lifelong learning and wellbeing.',
          images: [campus1],
          highlights: [
            "1:25 Student-to-Teacher ratio",
            "Multi-sensory, experiential learning approach",
            "Emphasis on communication skills",
            "Extracurriculars activities like swimming, tennis, music & art"
           ],
        },
        {
          title: 'Academic',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development. Key features of our ECE program include a 1:25 teacher-student ratio, multisensory learning, teachers skilled in personalized attention, communication skills development, and a strong emphasis on extracurricular activities like fine arts and sports, creating a foundation for lifelong learning and wellbeing.',
          images: [campus1],
          highlights: [
            "1:25 Student-to-Teacher ratio",
            "Multi-sensory, experiential learning approach",
            "Emphasis on communication skills",
            "Extracurriculars activities like swimming, tennis, music & art"
           ],
        },
      ],
      facilities: [
        {
          title: 'Smart-Classes',
          description: 'Insight Academy emphasizes hands-on learning through our continually upgraded, modern labs. With ',
          images: [campus1],
          bgColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(245, 204, 79, 0.20) 100%);',
          
        },
        
        {
          title: 'Smart-Classes',
          description: "Insight Academy's library, a sanctuary for book enthusiasts, is spacious and bright, housing a diverse .",
          images: [campus1],
          
        },
        
        {
          title: 'Smart-Classes',
          description: "Insight Academy integrates technology into education, providing computer learning with a dedicated",
          images: [campus1]
        },
        {
          title: 'Smart-Classes',
          description: "Insight Academy integrates technology into education, providing computer learning with a dedicated",
          images: [campus1]
        },
      ],
      contact: {
        details: {
          phoneNo: {
            label: 'Phone No',
            value: '+91 7899738130',
            type: 'contact'
          },
          workingHours: {
            label: 'Working Hours',
            value: 'Monday to Saturday - 8:00 AM to 4:00 PM',
            type: 'mail'
          },
          address: {
            label: 'Address',
            value: 'Nallurhalli Rd, Palm Meadows, Nallurhalli, Whitefield, Bengaluru, Karnataka 560066',
            type: 'address'
          }
        },
        mapEmbedLink: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAIyVF44QhoXfwwKHLd1h3N49cQTHS0Yvw&q=Whitefield Glentree Academy, Whitefield, Bengaluru',
        mindlerLink: 'https://www.mindler.com/schools/GLENTREE2023'
      },
      toppers: [
        {
          name: 'Aniksha <br> Raghuveera Kamat',
          ranks: 'Rank 1',
          marks: '98.8%',
          image: topper1,
        },
        {
          name: 'Anshul A Gadgoli',
          ranks: 'Rank 2',
          marks: '98.8%',
          image: topper2,
        },
        {
          name: 'Harsh Shalgar',
          ranks: 'Rank 3',
          marks: '98.8%',
          image: topper3,
        },
        {
          name: 'Hasini Gupta PS',
          ranks: 'Rank 4',
          marks: '98.8%',
          image: topper4,
        },
      ]
      
    },
    
  ],
  testimonials: {
    title: 'Insight Voices',
    subtitle: 'Stories of Transformation and Growth',
    data: [
      {
        image: testimonial3,
        quote: '“This school offers more than just education. Teachers give individual attention, and activities add to the wholesome learning experience...',
        ctaText: 'Watch Video',
        ctaLink: '',
      },
      {
        image: testimonial2,
        quote: 'Insight Academy has enriched my life! The supportive teachers and engaging activities have truly made my school years memorable.',
        author: '- SANATAN (grade 10)',
      },
      {
        image: testimonial1,
        quote: 'At Insight Academy, every day is an adventure! The fascinating blend of academics and co-curriculars instills in us the love for learning.',
        author: '- SANATAN (grade 10)',

      },
    ],
  },
  leadership: {
    data: {
      trustee: [
        { 
          name: 'Mr. S. K. Gupdta',
          role: 'Trustee',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Trustee',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Trustee',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Trustee',
          image: leadership1
        }
      ],
      government: [
        { 
          name: 'Mr. S. K. Gupdta',
          role: 'Governing Council',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Governing Council',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Governing Council',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Governing Council',
          image: leadership1
        }
    ]
  }
}
};






export default data;