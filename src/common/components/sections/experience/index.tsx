'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';
import { useHasMounted, useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import SectionDivider from '@/common/components/shared/section-divider';
import { 
  Briefcase, 
  GraduationCap, 
  Trophy 
} from 'lucide-react';

const experienceData = [
  {
    title: "Senior Data Analyst",
    location: "Tech Company, Nairobi",
    description: "Led data analysis projects using Python and ML frameworks. Developed predictive models improving business efficiency by 30%.",
    date: "2022 - Present",
    icon: <Briefcase />,
    category: "work"
  },
  {
    title: "Machine Learning Engineer",
    location: "AI Startup, Remote",
    description: "Implemented ML solutions using TensorFlow and PyTorch. Created scalable data pipelines and automated reporting systems.",
    date: "2020 - 2022",
    icon: <Briefcase />,
    category: "work"
  },
  {
    title: "MSc in Data Science",
    location: "University Name",
    description: "Specialized in machine learning and statistical analysis. Completed thesis on predictive modeling in financial markets.",
    date: "2018 - 2020",
    icon: <GraduationCap />,
    category: "education"
  },
  {
    title: "BSc in Computer Science",
    location: "University Name",
    description: "Focus on algorithms, data structures, and software engineering principles.",
    date: "2014 - 2018",
    icon: <GraduationCap />,
    category: "education"
  },
  {
    title: "Data Science Excellence Award",
    location: "Industry Recognition",
    description: "Recognized for innovative ML solutions in business analytics.",
    date: "2022",
    icon: <Trophy />,
    category: "achievement"
  }
];

export default function Experience() {
  const { ref } = useSectionInView('experience');
  const { theme } = useTheme();
  const hasMounted = useHasMounted();

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>Experience & Education</SectionHeading>
      <VerticalTimeline animate={true} lineColor={theme === 'light' ? '#9ca3af' : 'rgba(255, 255, 255, 0.05)'}>
        {hasMounted &&
          experienceData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === 'light' ? '#fff' : 'rgba(255, 255, 255, 0.15)',
                  fontSize: '1.5rem',
                  color: getIconColor(item.category, theme),
                }}
                visible={true}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!mt-0 font-normal">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
      </VerticalTimeline>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}

function getIconColor(category: string, theme: string | undefined) {
  if (theme === 'light') {
    switch (category) {
      case 'work': return '#2563eb';
      case 'education': return '#059669';
      case 'achievement': return '#d97706';
      default: return '#6b7280';
    }
  }
  return '#fff';
}