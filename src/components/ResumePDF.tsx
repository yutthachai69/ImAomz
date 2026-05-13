import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import { resumeData } from '../data/resume';

// PROMPT FONT (Served locally from public/fonts/ for 100% reliability)
Font.register({
  family: 'Prompt',
  fonts: [
    {
      src: '/fonts/Prompt-Regular.ttf',
      fontWeight: 400,
    },
    {
      src: '/fonts/Prompt-Bold.ttf',
      fontWeight: 700,
    },
  ],
});

const COLORS = {
  primary: '#2563eb',
  dark: '#0f172a',
  text: '#334155',
  muted: '#64748b',
  soft: '#e2e8f0',
  sidebar: '#0f172a',
  white: '#ffffff',
  chipBg: '#dbeafe',
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontFamily: 'Prompt',
  },

  // SIDEBAR
  leftColumn: {
    width: '30%',
    backgroundColor: COLORS.sidebar,
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 30,
  },

  // MAIN
  rightColumn: {
    width: '70%',
    paddingHorizontal: 35,
    paddingVertical: 40,
  },

  // HEADER
  name: {
    fontSize: 30,
    fontWeight: 800,
    color: COLORS.dark,
    letterSpacing: 1,
    marginBottom: 4,
  },

  title: {
    fontSize: 11,
    color: COLORS.primary,
    letterSpacing: 2,
    fontWeight: 700,
    marginBottom: 24,
    textTransform: 'uppercase',
  },

  // SECTION
  section: {
    marginBottom: 26,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: COLORS.dark,
    marginBottom: 14,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
  },

  sidebarSectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: COLORS.white,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  // TEXT
  text: {
    fontSize: 10,
    color: COLORS.text,
    lineHeight: 1.7,
  },

  sidebarText: {
    fontSize: 9,
    color: '#cbd5e1',
    lineHeight: 1.6,
    marginBottom: 6,
  },

  // EXPERIENCE
  experienceItem: {
    marginBottom: 18,
  },

  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },

  role: {
    fontSize: 12,
    fontWeight: 700,
    color: COLORS.dark,
  },

  period: {
    fontSize: 9,
    color: COLORS.muted,
  },

  company: {
    fontSize: 10,
    color: COLORS.primary,
    fontWeight: 700,
    marginBottom: 6,
  },

  bullet: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingRight: 10,
  },

  bulletDot: {
    width: 8,
    fontSize: 10,
    color: COLORS.primary,
  },

  bulletText: {
    flex: 1,
    fontSize: 9.5,
    lineHeight: 1.6,
    color: COLORS.text,
  },

  // SKILLS
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  skillPill: {
    backgroundColor: COLORS.chipBg,
    color: COLORS.primary,
    fontSize: 8,
    fontWeight: 700,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginRight: 6,
    marginBottom: 6,
  },

  // EDUCATION
  eduItem: {
    marginBottom: 14,
  },

  eduDegree: {
    fontSize: 10,
    fontWeight: 700,
    color: COLORS.white,
    marginBottom: 2,
  },

  eduSchool: {
    fontSize: 9,
    color: '#93c5fd',
    marginBottom: 2,
  },

  eduPeriod: {
    fontSize: 8,
    color: '#94a3b8',
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
    marginVertical: 16,
  },
});

export const ResumePDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* SIDEBAR */}
        <View style={styles.leftColumn}>
          {/* CONTACT */}
          <View style={styles.section}>
            <Text style={styles.sidebarSectionTitle}>Contact</Text>

            <Text style={styles.sidebarText}>
              {resumeData.personalInfo.email}
            </Text>

            <Text style={styles.sidebarText}>
              {resumeData.personalInfo.phone}
            </Text>

            <Text style={styles.sidebarText}>
              {resumeData.personalInfo.linkedin}
            </Text>

            <Text style={styles.sidebarText}>
              {resumeData.personalInfo.github}
            </Text>
          </View>

          <View style={styles.divider} />

          {/* EDUCATION */}
          <View style={styles.section}>
            <Text style={styles.sidebarSectionTitle}>Education</Text>

            {resumeData.education.map((edu, idx) => (
              <View key={idx} style={styles.eduItem}>
                <Text style={styles.eduDegree}>{edu.degree}</Text>

                <Text style={styles.eduSchool}>
                  {edu.institution}
                </Text>

                <Text style={styles.eduPeriod}>
                  {edu.period}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          {/* SKILLS */}
          <View style={styles.section}>
            <Text style={styles.sidebarSectionTitle}>Skills</Text>

            <View style={styles.skillsContainer}>
              {resumeData.skills.map((skill, idx) => (
                <Text key={idx} style={styles.skillPill}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.divider} />

          {/* INTERESTS */}
          <View style={styles.section}>
            <Text style={styles.sidebarSectionTitle}>Interests</Text>

            <View style={styles.skillsContainer}>
              {resumeData.interests.map((interest, idx) => (
                <Text key={idx} style={styles.skillPill}>
                  {interest}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* MAIN CONTENT */}
        <View style={styles.rightColumn}>
          {/* HEADER */}
          <Text style={styles.name}>
            {resumeData.personalInfo.name}
          </Text>

          <Text style={styles.title}>
            {resumeData.personalInfo.title}
          </Text>

          {/* SUMMARY */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>

            <Text style={styles.text}>
              {resumeData.summary}
            </Text>
          </View>

          {/* EXPERIENCE */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>

            {resumeData.experience.map((exp, idx) => (
              <View key={idx} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.role}>
                    {exp.role}
                  </Text>

                  <Text style={styles.period}>
                    {exp.period}
                  </Text>
                </View>

                <Text style={styles.company}>
                  {exp.company}
                </Text>

                <View style={styles.bullet}>
                  <Text style={styles.bulletDot}>•</Text>

                  <Text style={styles.bulletText}>
                    {exp.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* PROJECTS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>

            {resumeData.projects.map((proj, idx) => (
              <View key={idx} style={styles.experienceItem}>
                <Text style={styles.role}>
                  {proj.name}
                </Text>

                <Text
                  style={{
                    fontSize: 9,
                    color: COLORS.primary,
                    marginTop: 3,
                    marginBottom: 6,
                  }}
                >
                  {proj.tech.join(' • ')}
                </Text>

                <View style={styles.bullet}>
                  <Text style={styles.bulletDot}>•</Text>

                  <Text style={styles.bulletText}>
                    {proj.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;