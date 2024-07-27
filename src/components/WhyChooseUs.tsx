"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description: 'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.'
    },
    {
      title: 'Live Feedback & Engagement',
      description: 'Experience real-time feedback and interactive sessions with our expert instructors. Our live engagement approach ensures you receive immediate guidance, fostering a dynamic and supportive learning environment.'
    },
    {
      title: 'Innovative Learning Techniques',
      description: 'Our curriculum is designed with innovative techniques that make learning music both effective and enjoyable. We incorporate the latest educational tools to keep you engaged and motivated throughout your journey.'
    },
    {
      title: 'Performance Opportunities',
      description: 'Showcase your talent and progress through our regular performance opportunities. Gain confidence and stage experience by participating in our recitals, concerts, and community events.'
    },
    {
      title: 'Comprehensive Music Theory',
      description: 'Build a solid foundation with our comprehensive music theory classes. Understanding the underlying principles of music enhances your ability to play, compose, and appreciate the art form.'
    },
    {
      title: 'Flexible Scheduling',
      description: 'We understand the demands of a busy lifestyle. Our flexible scheduling options allow you to balance your music education with your other commitments, ensuring a seamless and stress-free learning experience.'
    }
  ];
  

const WhyChooseUs = () => {
  return (
    <div className="">
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs